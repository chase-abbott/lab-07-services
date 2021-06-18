import dotenv from 'dotenv';
dotenv.config();
import twilio from 'twilio';

const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendMessage = (phoneNumber, message) => {
  return twilioClient.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to: phoneNumber
  }); 
};

// run again
export default sendMessage;
