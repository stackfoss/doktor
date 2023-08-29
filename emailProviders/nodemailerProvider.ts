//nodemailerProvider.ts
const sendEmailUsingNodemailer = async (options: any): Promise<boolean> => {
  if (typeof window === 'undefined') {
    // Run this code only on the server-side
    const nodemailer = await import('nodemailer'); // Use dynamic import

    // Set up Nodemailer transporter here
    const transporter = nodemailer.createTransport({
      // Configure your email sending settings
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      const info = await transporter.sendMail(options);
      console.log('Email sent: ', info.response);
      return true;
    } catch (error) {
      console.error('Error sending email using Nodemailer:', error);
      return false;
    }
  } else {
    console.error('sendEmailUsingNodemailer should be used on the server side.');
    return false;
  }
};

export default sendEmailUsingNodemailer;

