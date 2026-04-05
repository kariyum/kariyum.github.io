<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import drone_vid from '$lib/project_assets/drone/vid.mp4';
	import maze_vid from '$lib/project_assets/maze/maze.mp4';
	import reunited_vid from '$lib/project_assets/reunited/reunited.mp4';
	import ants_vid from '$lib/project_assets/simulation/ants.mp4';
	import ants_poster from '$lib/project_assets/simulation/ants.png';
	import drone_poster from '$lib/project_assets/drone/drone_poster.png';
	import maze_poster from '$lib/project_assets/maze/maze_preview.png';

	let { data } = $props();
	const { project } = data;

	const videoMap = {
		aco: { vid: ants_vid, poster: ants_poster },
		'autonomous-agent': { vid: drone_vid, poster: drone_poster },
		reunited: { vid: reunited_vid },
		maze: { vid: maze_vid, poster: maze_poster },
		mips: { vid: '/mips.mp4', poster: '/mips_poster.png' }
	};

	const asset = videoMap[project.app_page_url];

	function formatDate(date) {
		const options = { year: 'numeric', month: 'long' };
		return new Date(date).toLocaleDateString('en-US', options);
	}

	function projectDates(start, end) {
		const startDate = formatDate(start);
		const endDate = formatDate(end);
		if (startDate === endDate) {
			return startDate;
		}
		return `${startDate} → ${endDate}`;
	}
</script>

<svelte:head>
	<title>{project.title} | Karim Ben Amara</title>
</svelte:head>

<div class="project-page fade-in">
	<header class="project-header">
		<a href="{base}/" class="back-link">← Back to Home</a>
		<div class="header-main">
			<h1 class="project-title">{project.title}</h1>
			<div class="project-meta">
				<span class="date">{projectDates(project.start_date, project.end_date)}</span>
				{#if project.github}
					<span class="divider">/</span>
					<a href={project.github} target="_blank" class="github-link">GitHub Repository</a>
				{/if}
			</div>
		</div>
	</header>

	<div class="project-content">
		<section class="overview">
			<div class="project-body">
				{#each project.body as description}
					<p>{@html description}</p>
				{/each}
			</div>

			<div class="tech-stack">
				<h3>Tech Stack</h3>
				<div class="tags">
					{#each project.techStack as tech}
						<span class="tech-tag">{tech}</span>
					{/each}
				</div>
			</div>
		</section>

		{#if asset}
			<section class="showcase">
				<video autoplay loop muted playsinline class="project-video" poster={asset.poster}>
					<source src={asset.vid} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</section>
		{/if}
	</div>
</div>

<style>
	.project-page {
		max-width: 800px;
		margin: 2rem auto;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 2rem;
		color: var(--text-secondary);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.back-link:hover {
		color: var(--accent-orange);
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

	.tech-stack h3 {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		margin-bottom: 1rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		background: var(--tag-bg);
		color: var(--text-primary);
		padding: 0.25rem 0.75rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		border: 1px solid var(--border-light);
	}

	.showcase {
		width: 100%;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
		background: #000;
	}

	.project-video {
		width: 100%;
		display: block;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.fade-in {
		animation: fadeIn 0.6s ease-out forwards;
	}
</style>
