import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

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

export default sendMessage;
