// mailjetProvider.ts
import axios from 'axios';

const sendEmailUsingMailjet = async (options: any): Promise<boolean> => {
  const apiKey = process.env.MAILJET_API_KEY;
  const apiSecret = process.env.MAILJET_API_SECRET;
  
  if (!apiKey || !apiSecret) {
    console.error('Mailjet API credentials are missing.');
    return false;
  }

  const apiUrl = 'https://api.mailjet.com/v3.1/send';

  const headers = {
    'Authorization': `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(apiUrl, options, { headers });
    if (response.status === 200) {
      console.log('Email sent successfully using Mailjet.');
      return true;
    } else {
      console.error('Failed to send email using Mailjet:', response.data);
      return false;
    }
  } catch (error) {
    console.error('Error sending email using Mailjet:', error);
    return false;
  }
};

export default sendEmailUsingMailjet;

