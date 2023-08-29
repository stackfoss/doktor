// sendinBlueProvider.ts
import axios from 'axios';

const sendEmailUsingSendinBlue = async (options: any): Promise<boolean> => {
  const apiKey = process.env.SENDINBLUE_API_KEY;

  if (!apiKey) {
    console.error('SENDINBLUE_API_KEY is missing in environment variables.');
    return false;
  }

  try {
    const response = await axios.post(
      'https://api.sendinblue.com/v3/smtp/email',
      {
        sender: {
          name: options.fromName,
          email: options.from,
        },
        to: [{ email: options.to }],
        subject: options.subject,
        textContent: options.text,
      },
      {
        headers: {
          'api-key': apiKey,
          'content-type': 'application/json',
        },
      }
    );

    if (response.status === 201) {
      console.log('Email sent successfully using SendinBlue.');
      return true;
    } else {
      console.error('Failed to send email using SendinBlue:', response.data);
      return false;
    }
  } catch (error) {
    console.error('Error sending email using SendinBlue:', error);
    return false;
  }
};

export default sendEmailUsingSendinBlue;

