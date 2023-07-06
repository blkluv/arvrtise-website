import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: Email
}

export default async function handleSubscribe(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<any>
) {
  const { name, email, message } = req.body;

  const requestEmpty = !name || !email || !message;
  const badRequest = req.method !== "POST" || requestEmpty;
  if( badRequest ) return res.status(400).json({ data: "Please send a properly formatted request" });

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);
  
  const msg = {
    to: 'info@arvrtise.com',
    from: 'info@arvrtise.com.com',
    subject: `ARVRtise.com it - from ${name} (${email})`,
    text: message,
    html: `<h1>Message from ARVRtise.com</h1>
      <p>${message}</p>`
  };
  
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      return res.status(500).json({ data: error });
    });
    
  return res.status(200).json({ data: "Email sent" });
};
