import nodemailer from 'nodemailer';
import { emailPW, email } from '$env/static/private';

/**
 *
 * @param {String} msg : HTML message to be sent
 * @param {any} attachments : array of attachments
 */
export const emailer = async (msg, attachments = []) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'icloud',
			auth: {
				user: email,
				pass: emailPW
			}
		});

		await transporter.verify();

		const mailData = {
			from: email,
			to: email,
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

export const imgParser = async (files) => {
	const arrayBuffer = files.map((x) => x.arrayBuffer());

	const settled = (await Promise.allSettled(arrayBuffer)).map((x) => x.value);

	const buffer = settled.map((x) => Buffer.from(x));

	const attachments = files.map((x, i) => ({
		filename: x.name,
		content: buffer[i],
		contentType: 'image/png'
	}));

	return attachments;
};

export const msgParser = (msg, attachments) => {
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
          <p>${msg['first name'] ? msg['firstName'] : "They didn't write a last name"} ${msg['lastName'] ? msg['lastName'] : "They didn't write a last name"} is interested in a tattoo.</p>
          <p>Their pronouns are ${msg['pronoun'] ? msg['pronoun'] : "They didn't pick a pronoun"}.</p>
          <p>They can be reached at ${msg['email']} or ${msg['phone'] ? msg['phone'] : "They didn't write an email "}.</p>
          <p>They describe their tattoo as follows: ${msg['description'] ? msg['description'] : "They didn't write a description"}.</p>
          <p>The tattoo will be located on their ${msg['location'] ? msg['location'] : "They didn't pick a location"}.</p>
          <p>The tattoo will be ${msg['size'] ? msg['size'] : "They didn't pick a size"} inches.</p>
          <p>The tattoo will be in color: ${msg['color'] ? msg['color'] : "They didn't pick a color"}.</p>
          ${
						attachments.length > 0
							? attachments.map((/** @type {any} */ x) => `<img src="cid:${x}">`).join('')
							: "<p>They didn't attache any references.</p>"
					}
          <p>Additional notes: ${msg['misc'] ? msg['misc'] : ''}.</p>
          </body>
      </html>
  `;
};
