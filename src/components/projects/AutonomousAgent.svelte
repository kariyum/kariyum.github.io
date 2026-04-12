<script lang="ts">
	import type { Project } from '../../routes/+layout.server';
	import ProjectDetails from './ProjectDetails.svelte';

	let { project }: { project: Project } = $props();
</script>

<ProjectDetails {project}></ProjectDetails>
