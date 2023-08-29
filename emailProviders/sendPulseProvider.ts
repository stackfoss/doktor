// sendPulseProvider.ts
import axios from 'axios';

const sendEmailUsingSendPulse = async (options: any): Promise<boolean> => {
  const apiKey = process.env.SENDPULSE_API_KEY;
  const apiSecret = process.env.SENDPULSE_API_SECRET;
  
  if (!apiKey || !apiSecret) {
    console.error('SendPulse API credentials are missing.');
    return false;
  }

  const apiUrl = 'https://api.sendpulse.com/smtp/emails';

  const headers = {
    'Authorization': `Bearer ${apiKey}:${apiSecret}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(apiUrl, options, { headers });
    if (response.status === 200) {
      console.log('Email sent successfully using SendPulse.');
      return true;
    } else {
      console.error('Failed to send email using SendPulse:', response.data);
      return false;
    }
  } catch (error) {
    console.error('Error sending email using SendPulse:', error);
    return false;
  }
};

export default sendEmailUsingSendPulse;

