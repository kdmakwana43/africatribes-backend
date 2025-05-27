export const getOtpTemplate = (otp) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Welcome to Dream11 Clone</title>
</head>
<body style="margin:0; padding:0; background-color: #ffffff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="height: 100vh;">
    <tr>
      <td align="center" valign="middle">
        <table width="450" cellpadding="0" cellspacing="0" style="border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); padding: 30px;">
          <tr>
            <td align="center" style="padding: 0 20px;">
              <img style="height:50px; width:140px" src="https://www.pinpng.com/pngs/m/229-2297093_bos-vs-orl-dream11-nba-team-prediction-fantasy.png" alt="Dream11 Banner" width="100%" style="border-radius: 10px 10px 0 0; margin-bottom: 20px;" />
              <h2 style="color: red; margin-bottom: 10px;">Welcome to Dream11</h2>
              <p style="font-size: 15px; color: #333;">Thanks for registering. Use the OTP below to verify your email address:</p>
              <div style="background-color:white; padding: 15px 30px; margin: 20px 0; border-radius: 6px; font-size: 28px; font-weight: 600; color:red; letter-spacing: 5px; display: inline-block;">
                ${otp}
              </div>
              <p style="font-size: 15px; color: #444;">This code is valid for 5 minutes. Do not share it with anyone.</p>
              <p style="font-size: 13px; color: #999; margin-top: 40px;">
                &copy; 2025 Dream11 Clone. All rights reserved.<br />
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
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      //  user: "nilesh.asservices@gmail.com",
      //  pass: "awjg ybze lkuy hvzt",
    },
  });

  try {
    const info = await transporter.sendMail({
      //  from: '"Dream11" <nilesh.asservices@gmail.com>',
      to: toEmail,
      subject: subject,
      html: html,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
