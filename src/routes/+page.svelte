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
				rel="noreferrer noopener"
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
		{#each data.projects_curiosity as project}
			<div>
				<div class="block-meta">
					<span class="project-date">{projectDates(project.start_date, project.end_date)}</span>
					<span class="divider">/</span>
					<div class="tech-inline">
						{#each project.tech_stack as tool}
							<span>{tool}</span>
						{/each}
					</div>
				</div>
				<a href={resolve('/[project]', { project: project.app_page_url })} class="link-branded"
					>{project.title}</a
				>
				<span class="project-body">
					{#each project.body as description}
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

	.projects-header-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 2rem;
	}

	.layout-switcher {
		display: flex;
		gap: 0.5rem;
		background: var(--tag-bg);
		padding: 0.25rem;
		border-radius: 0.5rem;
		border: 1px solid var(--border-light);
	}

	.layout-switcher button {
		padding: 0.35rem 0.75rem;
		border-radius: 0.35rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--text-secondary);
		background: transparent;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.layout-switcher button:hover {
		color: var(--text-primary);
	}

	.layout-switcher button.active {
		background: var(--bg-secondary);
		color: var(--accent-orange);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
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

	/* System Index Layout */
	.system-index {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--border-light);
		border-radius: 0.75rem;
		overflow: hidden;
		background: var(--bg-secondary);
	}

	.index-row {
		display: grid;
		grid-template-columns: 1.5fr 2fr 1fr;
		padding: 1rem 1.5rem;
		text-align: left;
		width: 100%;
		border: none;
		background: transparent;
		cursor: pointer;
		border-bottom: 1px solid var(--border-light);
		align-items: center;
		transition: background 0.2s ease;
	}

	.index-row:not(.header-row):hover {
		background: var(--card-hover-bg);
	}

	.header-row {
		background: var(--tag-bg);
		cursor: default;
		font-family: 'Fira Mono', monospace;
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.col-title {
		font-weight: 700;
		color: var(--text-primary);
	}

	.col-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.tech-pill {
		font-size: 0.7rem;
		background: var(--border-light);
		padding: 0.1rem 0.4rem;
		border-radius: 3px;
		color: var(--text-secondary);
	}

	.col-date {
		font-size: 0.85rem;
		color: var(--text-secondary);
		text-align: right;
	}

	.index-details {
		background: var(--hover-overlay);
		border-bottom: 1px solid var(--border-light);
	}

	.details-content {
		padding: 1.5rem;
	}

	.details-footer {
		margin-top: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1rem;
		border-top: 1px solid var(--border-light);
	}

	/* Minimal List Layout */
	.minimal-list {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.minimal-item {
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--border-light);
	}

	.minimal-main {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 0.75rem;
	}

	.minimal-title {
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.minimal-date {
		font-family: 'Fira Mono', monospace;
		font-size: 0.85rem;
		color: var(--text-secondary);
	}

	.minimal-reveal {
		max-width: 800px;
	}

	.minimal-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
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

	.block-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border-light);
	}

	.latest-news {
		margin-bottom: 4rem;
	}

	.news-card {
		background: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: 0.75rem;
		padding: 1.5rem 2rem;
		box-shadow: var(--card-shadow);
	}

	.tech-stack-inline {
		margin-top: 1rem;
		font-weight: 600;
		font-size: 0.85rem;
		color: var(--text-primary);
	}

	.grid {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.project-card {
		background: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: 1rem;
		padding: 2rem;
		display: grid;
		grid-template-columns: 1fr 240px;
		gap: 2rem;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			border-color 0.2s ease;
		box-shadow: var(--card-shadow);
	}

	.project-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--card-shadow-hover);
		border-color: var(--accent-orange);
	}

	.project-main-info {
		display: flex;
		flex-direction: column;
	}

	.project-side-info {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding-left: 1.5rem;
		border-left: 1px solid var(--border-light);
	}

	@media (max-width: 850px) {
		.project-card {
			grid-template-columns: 1fr;
			padding: 1.5rem;
		}
		.project-side-info {
			padding-left: 0;
			border-left: none;
			border-top: 1px solid var(--border-light);
			padding-top: 1.25rem;
		}
	}

	.project-header {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}

	.project-header h3 {
		font-size: 1.35rem;
		margin-bottom: 0.25rem;
		color: var(--text-primary);
	}

	.project-date {
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--text-secondary);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.project-body {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-secondary);
		flex-grow: 1;
	}

	.project-body p {
		margin-bottom: 0.75rem;
	}

	.tech-section h4,
	.links-section h4 {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}

	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tech-item {
		font-size: 0.8rem;
		font-weight: 600;
		background: var(--tag-bg);
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		color: var(--text-primary);
	}

	.github-link {
		display: inline-flex;
		align-items: center;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--accent-blue);
		transition: transform 0.2s ease;
	}

	.github-link:hover {
		transform: translateX(4px);
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

	.game-work {
		margin-bottom: 4rem;
		border-top: 1px solid var(--border-light);
		padding-top: 2rem;
	}

	.game-work :global(.outer-container) {
		text-align: left;
		display: inline-block;
		width: fit-content;
		margin-bottom: 1rem;
	}

	.game-content {
		max-width: 800px;
		font-size: 0.95rem;
		color: var(--text-secondary);
	}

	.game-content p {
		margin-bottom: 1rem;
	}

	/*.fade-in {
		animation: fadeIn 0.8s ease-out forwards;
		opacity: 0;
	}*/

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.fade-in:nth-child(2) {
		animation-delay: 0.2s;
	}
	.fade-in:nth-child(3) {
		animation-delay: 0.4s;
	}
	.fade-in:nth-child(4) {
		animation-delay: 0.6s;
	}
	.fade-in:nth-child(5) {
		animation-delay: 0.8s;
	}
</style>
