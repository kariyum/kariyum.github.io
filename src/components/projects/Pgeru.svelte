<script lang="ts">
	import type { Project } from '../../routes/+layout.server';
	import ProjectDetails from './ProjectDetails.svelte';

	let { project }: { project: Project } = $props();
</script>

<ProjectDetails {project}>
	<p>
		Pgeru is a native PostgreSQL desktop client with a built-in AI agent. Lets you browse the schema, run queries, and inspect results.
	</p>

	<p>
		The AI agent works against your live database. It can list configured connections, explore schemas and
		tables, describe columns, run and explain queries, and reason about your data through a set of
		tool calls exposed to the model.
	</p>

	<p>
		Built entirely in Rust with Iced and the Elm architecture, the UI is custom-styled and renders
		natively.
	</p>
</ProjectDetails>

<style>
	p {
		margin: 1rem 0;
	}
</style>
