import axios from "axios";
import handlebars from "handlebars";
import layouts from "handlebars-layouts";
import fs from "fs";
import path from "path";
import { APP_PATH, __dirname } from "../config/global.js";

const API_KEY = "<<API_KEY>>";
const FROM_EMAIL = "<<FROM>>";
const ZEPTOMAIL_URL = "api.zeptomail.com/";

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
        options.context.logo = process.env.FRONTEND_URL + "/backend/assets/africatribes_logo.svg";
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
                name: options.toName || "",
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
          //   reply_to: [
          //     {
          //       address: "<<Reply_to_email>>",
          //       name: "No Reply",
          //     },
          //   ],
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

        // Send email using ZeptoMail API
        const response = await axios.post(ZEPTOMAIL_URL, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Zoho-enczapikey ${API_KEY}`,
          },
        });

        console.log("✅ Email sent successfully:", response.data);
      } catch (error) {
        console.error("❌ Error sending email:", JSON.stringify(error.response?.data || error.message, null, 2));
      }
    })
    .catch((err) => {
      console.error("Error in mail sending : ", err);
    });
};
