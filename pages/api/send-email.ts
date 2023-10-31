import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

  if (!SENDGRID_API_KEY) {
    return res.status(500).json({ error: 'SENDGRID_API_KEY is not set.' });
  }

  if (req.method === 'POST') {
    const { patientName, appointmentDateTime, appointmentReason, patientEmail } = req.body;

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: patientEmail, // Replace with the patient's email address
      from: 'doctor.smith@gmail.com', // Replace with the doctor's email address
      subject: 'New Appointment Scheduled',
      text: `Patient Name: ${patientName}\nAppointment Date and Time: ${appointmentDateTime}\nReason for Appointment: ${appointmentReason}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Appointment scheduled successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Appointment scheduling failed. Please try again later.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

