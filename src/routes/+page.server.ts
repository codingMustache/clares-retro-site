import type { Actions } from './$types';
import { emailer } from '$lib/utils/email';
import { imgParser } from '$lib/utils/email';
import { msgParser } from '$lib/utils/email';

export const actions = {
	book: async ({ request }) => {
		const form = await request.formData();
		const formObj = Object.fromEntries(form.entries());
		const files = form.getAll('files');

		let attachments = [];
		if (files) {
			attachments = await imgParser(files);
		}

		const htmlParser = msgParser(formObj, attachments);

		const sentEmail = await emailer(htmlParser, attachments);

		return { success: sentEmail };
	}
} satisfies Actions;
