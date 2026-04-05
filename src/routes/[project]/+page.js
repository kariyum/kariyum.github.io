import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const data = await parent();
	const project = data.projects_curiosity.find((p) => p.app_page_url === params.project);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
}
