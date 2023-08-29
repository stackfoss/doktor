// sendgridProvider.ts
const sendEmailUsingSendgrid = async (options: any): Promise<boolean> => {
  if (typeof window === 'undefined') {
    // Import 'sendgrid' only on the server side
    const sendgrid = require('@sendgrid/mail');
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    try {
      await sendgrid.send(options);
      return true;
    } catch (error) {
      console.error('Error sending email using Sendgrid:', error);
      return false;
    }
  } else {
    console.error('sendEmailUsingSendgrid should be used on the server side.');
    return false;
  }
};

export default sendEmailUsingSendgrid;

