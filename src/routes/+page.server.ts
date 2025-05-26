import type { Actions } from './$types';
import { emailer } from '$lib/utils/email';
import { imgParser } from '$lib/utils/email';
import { msgParser } from '$lib/utils/email';
import type { Attachment } from 'nodemailer/lib/mailer';

export type EmailForm = {
	fname: string;
	lname: string;
	pronouns: string;
	age: number;
	phone: string;
	email: string;
	tattooLocation: string;
	tattooSize: string;
	dates: string;
	description: string;
	depositMethod: string;
	references: File[];
	color: boolean;
	black: boolean;
	budget: string;
};
export const actions = {
	'thank-you-for-booking': async ({ request }) => {
		try {
			const form = await request.formData();

			const formObj: EmailForm = {
				fname: form.get('fname') as string,
				lname: form.get('lname') as string,
				pronouns: form.get('pronouns') as string,
				age: Number(form.get('age')),
				phone: form.get('phone') as string,
				email: form.get('email') as string,
				tattooLocation: form.get('tattooLocation') as string,
				tattooSize: form.get('tattooSize') as string,
				dates: form.get('startDate') as string,
				description: form.get('description') as string,
				depositMethod: form.get('depositMethod') as string,
				references: form.getAll('references') as File[],
				color: form.get('color') === 'true',
				black: form.get('black') === 'true',
				budget: form.get('budget') as string
			};

			let attachments: Attachment[] = [];
			if (formObj.references && formObj.references.length > 0) {
				attachments = await imgParser(formObj.references);
			}

			const htmlParser = msgParser(formObj, attachments);
			const sentEmail = await emailer(htmlParser, attachments);

			return { success: sentEmail };
		} catch (e) {
			console.error(e);
			return { error: 'An error occurred while processing your request.' };
		}
	}
} satisfies Actions;
