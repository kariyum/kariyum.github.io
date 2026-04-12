<script lang="ts">
	import type { Component } from 'svelte';
	import type { Project } from '../+layout.server';
	import Aco from '../../components/projects/Aco.svelte';
	import Nfreelanci from '../../components/projects/Nfreelanci.svelte';
	import AutonomousAgent from '../../components/projects/AutonomousAgent.svelte';
	import SchedulingProblem from '../../components/projects/SchedulingProblem.svelte';
	import ProfilingSuite from '../../components/projects/ProfilingSuite.svelte';
	import FinanceApp from '../../components/projects/FinanceApp.svelte';
	import ReunitedGame from '../../components/projects/ReunitedGame.svelte';
	import Maze from '../../components/projects/Maze.svelte';

	let { data } = $props();
	const { project } = $derived(data);

	const projectSnippets: Map<string, Component<{ project: Project }>> = new Map([
		['aco', Aco],
		['nfreelanci', Nfreelanci],
		['autonomous-agent', AutonomousAgent],
		['single-machine-scheduling-problem', SchedulingProblem],
		['profiling-suite', ProfilingSuite],
		['personal-finance-app', FinanceApp],
		['reunited', ReunitedGame],
		['maze', Maze]
	]);

	let ProjectComponent: Component<{ project: Project }> | undefined = $derived(
		projectSnippets.get(project.app_page_url)
	);
</script>

<svelte:head>
	<title>{project.title} | Karim Ben Amara</title>
</svelte:head>

{#if ProjectComponent}
	<ProjectComponent {project}></ProjectComponent>
{:else}
	<div>Not defined</div>
{/if}
