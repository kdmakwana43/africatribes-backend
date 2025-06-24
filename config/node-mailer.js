import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);


const client = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY, 
});


export const getOtpTemplate = (token) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>TribesAfrica</title>
</head>
<body style="margin:0; padding:0; background-color: #ffffff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="height: 100vh;">
    <tr>
      <td align="center" valign="middle">
        <table width="450" cellpadding="0" cellspacing="0" style="border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); padding: 30px;">
          <tr>
            <td align="center" style="padding: 0 20px;">
              
              <p style="margin: 20px 0;">
                <a href="${process.env.FRONTEND_URL}/reset/password/${token}" 
                   style="font-size: 16px; color: blue; text-decoration: underline;">
                  Click here to forgot password
                </a>
              </p>

              <p style="font-size: 14px; color: #555;">This link is valid for 5 minutes. Do not share it with anyone.</p>
              <p style="font-size: 13px; color: #999; margin-top: 40px;">
                If you did not register, please ignore this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const sendEmail = async (toEmail, subject, html) => {


  try {
    const result = await client.messages.create(process.env.MAILGUN_DOMAIN, {
      from: 'Africatribes <africatribes@gmail.com>',
      to:[toEmail],
      subject:subject,
      html: html,
    });

    console.log('Email sent:', result);
  } catch (err) {
    console.error('Error sending email:', err);
  }
  
 
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.mail.yahoo.com",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: "afrikatribes@yahoo.com",
  //     pass: "Afrika.tribes@2025",
  //   },
  // });

  // try {
  //   const info = await transporter.sendMail({
  //     from: '"Africatribes" <afrikatribes@yahoo.com>',
  //     to: toEmail,
  //     subject: subject,
  //     html: html,
  //   });
  // } catch (error) {
  //   console.error("Error sending email:", error);
  // }
};
