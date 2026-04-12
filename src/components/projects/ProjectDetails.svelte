<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Project } from '../../routes/+layout.server';
	import { projectDates } from '$lib/utils';
	import { MoveLeft } from '@lucide/svelte';
	import { goto } from '$app/navigation';

	interface Props {
		children?: Snippet;
		title?: string;
		project: Project;
	}
	let { children, project, title }: Props = $props();
</script>

<div class="project-page">
	<header class="project-header">
		<button
			class="back-button"
			onclick={async () => {
				const isInternal = document.referrer.includes(window.location.host);

				if (isInternal && window.history.length > 1) {
					history.back();
				} else {
					await goto('/');
				}
			}}
		>
			<MoveLeft size={'32px'} />
		</button>
		<div class="header-main">
			<h2 class="project-title">{title ?? project.title}</h2>
			<div class="project-meta">
				<span class="date">{projectDates(project.start_date, project.end_date)}</span>
				{#if project.github}
					<span class="divider">/</span>
					<a href={project.github} target="_blank" class="github-link">github repository</a>
				{/if}
			</div>
			<div class="tags">
				{#each project.tech_stack as tech}
					<span class="tech-tag">{tech}</span>
				{/each}
			</div>
		</div>
	</header>

	<div class="project-content">
		<section class="project-body">
			{@render children?.()}
		</section>
	</div>
</div>

<style>
	:global(p) {
		margin: 1rem 0;
	}
	.back-button {
		border: none;
		color: var(--accent-blue);
		cursor: pointer;
		border-radius: 5px;
		padding: 0 1rem;
		background-color: hsl(from var(--accent-blue) h s calc(95));
		line-height: 0;
	}

	.back-button:hover {
		background-color: hsl(from var(--accent-blue) h s calc(90));
	}

	.project-page {
		max-width: 800px;
		margin: 2rem auto;
	}

	.header-main {
		margin-bottom: 3rem;
	}

	.project-title {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		margin-bottom: 0.75rem;
		line-height: 1.1;
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--text-secondary);
		font-size: 1rem;
	}

	.divider {
		opacity: 0.3;
	}

	.github-link {
		color: var(--accent-orange);
		font-weight: 600;
		text-decoration: none;
	}

	.github-link:hover {
		text-decoration: underline;
	}

	.project-content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.project-body {
		font-size: 1.15rem;
		line-height: 1.7;
		color: var(--text-secondary);
		margin-bottom: 2rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		margin: 1rem 0;
		gap: 0.5rem;
	}

	.tech-tag {
		background: hsl(from var(--accent-blue) h s 95);
		color: var(--text-primary);
		padding: 0.25rem 0.75rem;
		color: var(--accent-blue);
		/*border: 1px solid var(--accent-orange);*/
		border-radius: 5px;
		font-size: 0.9rem;
		font-weight: 600;
	}
</style>
