import nodemailer from 'nodemailer';
import { EMAIL_SENDER, EMAIL_PASSWORD, EMAIL_TO, EMAIL_FROM } from '$env/static/private';
import type { Attachment } from 'nodemailer/lib/mailer';
import type { EmailForm } from '../../routes/+page.server';

export const emailer = async (msg: string, attachments: Attachment[] = []) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'icloud',
			auth: {
				user: EMAIL_SENDER,
				pass: EMAIL_PASSWORD
			}
		});

		await transporter.verify();

		const mailData = {
			from: EMAIL_TO,
			to: EMAIL_FROM,
			subject: 'New Client - Contact Form Submission',
			html: msg,
			attachments: attachments
		};
		await transporter.sendMail(mailData);
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
};

export const imgParser = async (files: File[]) => {
	try {
		const arrayBuffer = files.map((x) => x.arrayBuffer());

		const settled = (await Promise.allSettled(arrayBuffer)).map((x) => x.value as ArrayBuffer);

		const buffer = settled.map((x) => Buffer.from(x));

		const attachments = files.map((x, i) => ({
			filename: x.name,
			content: buffer[i],
			contentType: 'image/png'
		}));

		return attachments satisfies Attachment[];
	} catch (e) {
		console.error(`Error parsing images: ${e}`);
		return [];
	}
};

export const msgParser = (msg: EmailForm, attachments: Attachment[]) => {
	return `
    <!DOCTYPE html>
      <html>
        <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  text-align: left;
                  color: #333;
              }
              p {
                  font-size: 14px;
                  color: #555;
              }
              img {
                object-fit: cover;
                width: 300px;
                height: 300px;
                margin: 3px;
              }

          </style>
        </head>
        <body>
          <p>${msg.fname ?? "They didn't write a last name"} ${msg.lname ?? "They didn't write a last name"} is interested in a tattoo.</p>
          <p>Their pronouns are ${msg.pronouns ?? "They didn't pick a pronoun."}</p>
          <p>They can be reached at ${msg.email} or ${msg.phone ?? "They didn't write an email."}</p>
          <p>Their age is ${msg.age ?? "They didn't write an age."}</p>
          <p>The tattoo will be located on their ${msg.tattooLocation ?? "They didn't pick a location."}</p>
          <p>The tattoo will be ${msg.tattooSize ?? "They didn't pick a size."}</p>
          <p>The tattoo will be ${msg.dates ?? "They didn't pick a size."}</p>
          <p>They describe their tattoo as follows: ${msg.description ?? "They didn't write a description."}</p>
          <p> ${msg.depositMethod ?? 'They didnt put a deposit method.'}</p>
          <p> ${msg.color ? 'They wanted color.' : "They didn't want color."}</p>
          <p> ${msg.black ? 'They wanted black and gray.' : "They didn't want black and gray."}</p>
          ${
						attachments.length > 0
							? attachments.map((x) => `<img src="cid:${x}">`).join('')
							: "<p>They didn't attache any references.</p>"
					}
          <p>Additional notes: ${msg.description}.</p>
          </body>
      </html>
  `;
};
