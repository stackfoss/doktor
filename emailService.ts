// emailService.ts
import sendEmailUsingSendgrid from './emailProviders/sendgridProvider';
import sendEmailUsingNodemailer from './emailProviders/nodemailerProvider';
import sendEmailUsingSendPulse from './emailProviders/sendPulseProvider'; 
import sendEmailUsingMailjet from './emailProviders/mailjetProvider'; 
import sendEmailUsingSendinBlue from './emailProviders/sendinBlueProvider';
// import additional email providers as needed

const emailService = async (options: any, provider: string): Promise<boolean> => {
  switch (provider) {
    case 'sendgrid':
      return await sendEmailUsingSendgrid(options);
    case 'nodemailer':
      return await sendEmailUsingNodemailer(options);
    case 'sendPulse':
      return await sendEmailUsingSendPulse(options); 
    case 'mailjet':
      return await sendEmailUsingMailjet(options); 
    case 'sendinBlue':
      return await sendEmailUsingSendinBlue(options); 
    // add cases for additional email providers here
    default:
      console.error('Unsupported email provider:', provider);
      return false;
  }
};

export default emailService;

