<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/images/favicon.ico';
	import { projectDates } from '$lib/utils.js';
	import karim_ben_amara_resume from '$lib/karim_ben_amara_resume.pdf';

	let { data } = $props();
</script>

<svelte:head>
	<title>Karim Ben Amara</title>
	<meta name="description" content="Karim Ben Amara portfolio website" />
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<section class="hero fade-in">
	<h1 class="slogan">
		bringing ideas into real life <span class="highlight">products</span> is my thing.
	</h1>
	<p class="subtitle">(aka. feeding my curiosity and suiting my needs)</p>
	<div>
		<p class="bio inline">
			I'm a software engineer, passionate about building robust systems and interactive
			visualizations. Many things capture my interest, and this site features some of them.
		</p>

		<p class="bio">
			Reach out: <a href="mailto:karimbenamara91@gmail.com" class="link-branded"
				>karimbenamara91@gmail.com</a
			>
		</p>
		<p class="bio">
			Find me: <a
				target="_blank"
				rel="noreferrer noopener"
				href="https://github.com/kariyum"
				class="link-branded">GitHub</a
			>
			<a
				href="https://www.linkedin.com/in/karim-ben-amara-01282a1ba/"
				class="link-branded"
				target="_blank"
				rel="noreferrer noopener">LinkedIn</a
			>
			<a
				target="_blank"
				rel="noreferrer noopener external"
				href={karim_ben_amara_resume}
				class="link-branded">Resume</a
			>
		</p>
	</div>
</section>

<section class="projects-grid fade-in">
	<div class="section-header">
		<span class="section-label">TECHNICAL INTERESTS</span>
		<h2 class="section-title">Hobby Projects</h2>
	</div>
	<p class="section-desc">This is a list numerating some of my projects I have done in the past</p>
	<div class="feature-blocks">
		{#each data.projects_curiosity as project (project)}
			<div>
				<div class="block-meta">
					<span class="project-date">{projectDates(project.start_date, project.end_date)}</span>
					<span class="divider">/</span>
					<div class="tech-inline">
						{#each project.tech_stack as tool (tool)}
							<span>{tool}</span>
						{/each}
					</div>
				</div>
				<a href={resolve('/[project]', { project: project.app_page_url })} class="link-branded"
					>{project.title}</a
				>
				<span class="project-body">
					{#each project.body as description (description)}
						<span>{@html description}</span>
					{/each}
				</span>
			</div>
		{/each}
	</div>
</section>

<section class="readings fade-in" id="blogs">
	<div class="section-header">
		<span class="section-label">KNOWLEDGE BASE</span>
		<h2 class="section-title">Technical Readings</h2>
	</div>
	<p class="section-desc">A collection of my favorite technical blogs and books.</p>
	<div class="readings-container">
		<div class="readings-column">
			<h3>Articles</h3>
			<ul class="reading-list">
				<li>
					<a
						href="https://discord.com/blog/why-discord-is-switching-from-go-to-rust/"
						class="link-branded">Why Discord is Switching from Go to Rust</a
					>
				</li>
				<li>
					<a
						href="https://discord.com/blog/how-discord-stores-billions-of-messages"
						class="link-branded">How Discord Stores Billions of Messages</a
					>
				</li>
				<li>
					<a href="https://samwho.dev/load-balancing/" class="link-branded"
						>Load Balancing Visualized</a
					>
				</li>
				<li>
					<a
						href="https://nee.lv/2021/02/28/How-I-cut-GTA-Online-loading-times-by-70/"
						class="link-branded">How I cut GTA Online loading times by 70%</a
					>
				</li>
				<li>
					<a href="https://blog.neetcode.io/p/doordash-robust-microservices" class="link-branded"
						>Doordash Robust Microservices</a
					>
				</li>
				<li>
					<a href="https://ryhl.io/blog/async-what-is-blocking/" class="link-branded"
						>Async what is blocking?</a
					>
				</li>
				<li>
					<a
						href="https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/"
						class="link-branded">Parse Don't Validate</a
					>
				</li>
			</ul>
		</div>
		<div class="readings-column">
			<h3>Books</h3>
			<ul class="reading-list">
				<li>
					<a href="https://natureofcode.com/introduction/" class="link-branded">Nature of Code</a>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.hero {
		margin: 2.5rem 0;
	}

	.slogan {
		font-size: clamp(2.25rem, 4.5vw, 4rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		margin-bottom: 0.75rem;
		line-height: 1.1;
	}

	.highlight {
		color: var(--accent-orange);
		position: relative;
		display: inline-block;
	}

	.highlight::after {
		content: '';
		position: absolute;
		bottom: 8%;
		left: 0;
		width: 100%;
		height: 0.2em;
		background: var(--accent-orange);
		opacity: 0.2;
		z-index: -1;
	}

	.subtitle {
		color: var(--text-secondary);
		font-style: italic;
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}

	.inline {
		display: inline;
	}

	.bio {
		font-size: 1.15rem;
		color: var(--text-secondary);
	}

	.section-header {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-bottom: 1.5rem;
	}

	.section-label {
		font-family: 'Fira Mono', monospace;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		color: var(--accent-orange);
		opacity: 0.8;
	}

	.section-title {
		font-size: 1.75rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.section-desc {
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
		max-width: 800px;
		font-size: 1rem;
	}

	.feature-blocks {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.block-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		column-gap: 1rem;
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	.tech-inline {
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.75rem;
		font-weight: 600;
		color: var(--accent-orange);
	}

	.project-date {
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--text-secondary);
	}
	
	.project-body {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-secondary);
		flex-grow: 1;
	}

	.readings-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 4rem;
	}

	.readings-column h3 {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--border-light);
		width: 100%;
		max-width: 200px;
	}

	@media (max-width: 768px) {
		.readings-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	.reading-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.reading-list li a {
		font-size: 0.95rem;
	}
</style>
