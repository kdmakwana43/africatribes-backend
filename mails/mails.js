import axios from "axios";
import handlebars from "handlebars";
import layouts from "handlebars-layouts";
import fs from "fs";
import path from "path";
import { APP_PATH, __dirname } from "../config/global.js";

const API_KEY = "wSsVR61yqRGlD6p/njWuduk9nFUAVF7/Eh4pjVOp437/FqiQocc8xUXLAQ7yTvAbEjU4HGEX8b97mxYCgGFaho8syA1UXSiF9mqRe1U4J3x17qnvhDzKX2lUmxKLKI0IwA5vk2VjFsAq+g==";
const FROM_EMAIL = "noreply@tribes.africa";
const ZEPTOMAIL_URL = "https://api.zeptomail.eu/v1.1/email";

// Register Handlebars layouts and partials
handlebars.registerHelper(layouts(handlebars));
handlebars.registerPartial("layout", fs.readFileSync(path.join(APP_PATH, "mails/templates/layout.hbs"), "utf8"));

export default async (options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(APP_PATH, "mails/templates/" + options.template), { encoding: "utf-8" }, (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  })
    .then(async (html) => {
      try {
        
        // Compile the template with context
        const template = handlebars.compile(html);
        options.context.logo = process.env.FRONTEND_URL + "/backend/assets/logo.png";
        const htmlToSend = template(options.context);

        // Prepare the API payload
        const data = {
          from: {
            address: FROM_EMAIL,
            name: "Africatribes",
          },
          to: [
            {
              email_address: {
                address: options.to,
                name: options.toName || "User",
              },
            },
          ],
          cc: options.cc
            ? [
                {
                  email_address: {
                    address: options.cc,
                    name: "CC Recipient",
                  },
                },
              ]
            : undefined,
          subject: options.subject,
          htmlbody: htmlToSend,
          track_clicks: true,
          track_opens: true,
          client_reference: "reference",
          mime_headers: {
            "X-Custom-Header": "CustomValue",
          },
        };

        // Remove undefined fields (like cc if not passed)
        Object.keys(data).forEach((key) => data[key] === undefined && delete data[key]);

        const response = await axios.post(
          'https://api.zeptomail.com/v1.1/email',
          data,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization:
                "Zoho-enczapikey wSsVR61yqRGlD6p/njWuduk9nFUAVF7/Eh4pjVOp437/FqiQocc8xUXLAQ7yTvAbEjU4HGEX8b97mxYCgGFaho8syA1UXSiF9mqRe1U4J3x17qnvhDzKX2lUmxKLKI0IwA5vk2VjFsAq+g=="
            }
          }
        );

        // Send email using ZeptoMail API
        // const response = await axios.post(ZEPTOMAIL_URL, data, {
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //     Authorization:
        //       "Zoho-enczapikey wSsVR61yqRGlD6p/njWuduk9nFUAVF7/Eh4pjVOp437/FqiQocc8xUXLAQ7yTvAbEjU4HGEX8b97mxYCgGFaho8syA1UXSiF9mqRe1U4J3x17qnvhDzKX2lUmxKLKI0IwA5vk2VjFsAq+g=="
        //   },
        // });

        console.log("✅ Email sent successfully:", response.data);
      } catch (error) {
        console.error("❌ Error sending email:", JSON.stringify(error.response?.data || error.message, null, 2));
      }
    })
    .catch((err) => {
      console.error("Error in mail sending : ", err);
    });
};
