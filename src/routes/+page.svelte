<script>
	import { base } from '$app/paths';
	import drone_vid from '$lib/project_assets/drone/vid.mp4';
	import maze from '$lib/project_assets/maze/maze.mp4';
	import reunited from '$lib/project_assets/reunited/reunited.mp4';
	import ants from '$lib/project_assets/simulation/ants.mp4';
	import HoverPeek from '../components/HoverPeek.svelte';
	import Tag from '../components/Tag.svelte';
	import favicon from '$lib/images/favicon.ico';

	export let data;
	/**
	 * @param {string | number | Date} date
	 */
	function formatDate(date) {
		/**
		 * @type {Intl.DateTimeFormatOptions}
		 */
		const options = { year: 'numeric', month: 'long' };
		return new Date(date).toLocaleDateString('en-US', options);
	}

	/**
	 * @param {string | number | Date} start
	 * @param {string | number | Date} end
	 */
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
	<title>Karim Ben Amara</title>
	<meta name="description" content="Karim Ben Amara portfolio website" />
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<section>
	<div class="introduction">
		<h1 class="slogan">
			turning ideas into real life <span class="highlight">products</span> is my thing.
		</h1>
		<span style="color:gray"> (aka. feeding my curiosty and suiting my needs) </span>
		<p>Basically, I'm a software engineer, from Tunisia.</p>
	</div>
	<div class="introduction" style="margin-top: 7rem;">
		<div class="card">
			<h1><span style="color:var(--orange);">*</span> Latest news!</h1>
			<p>
				Currently working on a project that aims to connect freelancers with clients specifically in
				Tunisia focusing on the ease of communication, matching, project management and eventually
				payment.
			</p>
			<p>
				Using Sveltekit for the user interface, Rust for the server and Postgres for the database.
			</p>
		</div>
	</div>
	<div class="introduction">
		<h1>
			<div>
				<span> # </span>
				What Am I Curious About?
			</div>
		</h1>
		<p>
			I love backend engineering, building systems from scratch, optimizing them, inventing new
			experiences, touching lives and helping shape the world around us 😊
		</p>
	</div>

	<div class="introduction">
		<!-- <h1><span style="color:orange">#</span> I simulate</h1> -->
		<h1>
			<div>
				<span> # </span>
				What I Had Been Curious About?
			</div>
		</h1>

		<p>
			During my time at the engineering school, I had been captivated with some of the concepts 
			and so I spared some time to create some visualizations for them, deepening my
			understanding and sharing them with the class.
		</p>

		<div class="container">
			{#each data.projects_curiosity as project}
				<div class="project-container">
					<div class="project">
						<h3 class="header"><div><span style="color:orange;">##</span> {project.title}</div></h3>
						{#each project.keywords as keyword}
							<Tag>{keyword}</Tag>
						{/each}
						{#each project.body as description}
							<p>
								{@html description}
							</p>
						{/each}
						<div>
							<div>
								<span style="font-weight: 500;">Tools: </span>
								{#each project.techStack as tool}
									<span>{tool + ' '}</span>
								{/each}
							</div>
						</div>
						<div class="project-footer">
							<a class="subtitle-link" href={project.github}>{project.to_repo}</a>
							<div class="project-date">
								{projectDates(project.start_date, project.end_date)}
							</div>
						</div>
					</div>
					<!-- <div class="project-video">
						<video controls autoplay loop muted playsinline style="width: 100%;">
							<source src={ants} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div> -->
				</div>
			{/each}
		</div>

		<div class="introduction" id="blogs">
			<h1>
				<div>
					<span>#</span>
					Readings
				</div>
			</h1>
			<p>The following list contains some of my favorite blogs</p>
			<ul>
				<li>
					<a href="https://discord.com/blog/why-discord-is-switching-from-go-to-rust/"
						>Why Discord is Switching from Go to Rust</a
					>
				</li>
				<li>
					<a href="https://discord.com/blog/how-discord-stores-billions-of-messages"
						>How Discord Stores Billions of Messages</a
					>
				</li>
				<li><a href="https://samwho.dev/load-balancing/">Load Balancing Visualized</a></li>
				<li>
					<a href="https://nee.lv/2021/02/28/How-I-cut-GTA-Online-loading-times-by-70/"
						>How I cut GTA Online loading times by 70%</a
					>
				</li>
				<li>
					<a href="https://blog.neetcode.io/p/doordash-robust-microservices"
						>Doordash Robust Microservices</a
					>
				</li>
				<li>
					<a href="https://ryhl.io/blog/async-what-is-blocking/">Async what is blocking?</a>
				</li>
			</ul>
			and books
			<ul>
				<li>
					<a href="https://natureofcode.com/introduction/">Nature of Code book</a>
				</li>
			</ul>
		</div>

		<div class="introduction">
			<HoverPeek videoPath={reunited}>
				<div style="display: flex; align-items:center;">
					<h1 style="display: inline; margin:0;">
						<div style="display: inline; margin:0;">
							<span>#</span>
							Reunited
						</div>
					</h1>
					<span>&nbsp;- a fun little game!</span>
				</div>
			</HoverPeek>
			<p>
				I made this game back in december 2020 when covid-19 was everywhere and we had to be
				isolated at home.
			</p>
			<a href="https://play.unity.com/en/games/67ca8ced-59e7-4d36-bc9b-9a62b0b2b88d/reunited">
				Play the game!
			</a>
			Move with arrow keys and jump with space key.
			<p>
				This project was the first project I have ever done. It is quite special for me because it
				taught me that the most important aspect about working on projects is to start prototyping
				asap, decompose the ideas into small components and just do it.
			</p>
		</div>
	</div>
</section>

<style>
	.card {
		border: 1px solid rgba(185, 185, 185, 0.5);
		box-shadow: rgba(166, 211, 255, 0.3) 0px 0px 24px;
		border-radius: 5px;
		padding: 1rem;
	}
	.introduction {
		margin: 0 auto 0 auto;
		max-width: 1000px;
		margin-top: 3em;
	}

	.slogan {
		display: inline;
		font-size: 72px;
		/* background-color: bisque; */
		/* translate: -20%; */
	}

	.highlight {
		display: inline;
		text-decoration-line: underline;
		text-decoration-color: rgb(205, 221, 255);
		text-decoration-style: wavy;
	}
	h1 {
		width: fit-content;
		margin-bottom: 0;
		margin-top: 0;
	}
	h1 > div > span {
		color: orange;
	}
	h1 > div {
		width: fit-content;
		border-bottom: 2px solid rgb(205, 221, 255);
		transition: background-color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}

	h1 > div:hover {
		width: fit-content;
		width: -moz-fit-content;
		border-bottom: 2px solid rgb(205, 221, 255);
		background-color: rgb(255, 246, 236);
	}

	.header {
		margin: 0;
		width: fit-content;
		border-bottom: 2px solid rgb(205, 221, 255);
		transition: background-color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}

	.header:hover {
		width: fit-content;
		width: -moz-fit-content;
		border-bottom: 2px solid rgb(205, 221, 255);
		background-color: rgb(255, 246, 236);
	}

	:global(.link) {
		text-decoration: none;
		font-weight: 500;
		background-color: rgb(255, 246, 236);
		color: rgb(255, 126, 52);
		margin-bottom: 10%;
	}

	.subtitle-link {
		text-decoration: underline;
		font-style: italic;
		color: rgb(41, 79, 160);
		font-weight: 500;
	}

	.project {
		/* border: 1px solid rgba(185, 185, 185, 0); */
		/* box-shadow: rgba(166, 211, 255, 0.3) 0px 0px 24px; */
		border-radius: 5px;
		/* padding: 0.5rem; */
	}

	/* .project:hover {
		box-sizing: border-box;
		background-color: rgb(255, 252, 248);
		border: 1px solid rgba(185, 185, 185, 0.5);
		box-shadow: rgba(166, 211, 255, 0.3) 0px 0px 24px;
		border-radius: 5px;
	} */

	.container {
		display: flex;
		/* grid-template-columns: 1fr 1fr; */
		flex-direction: column;
		gap: 2rem;
	}

	.project-footer {
		display: flex;
		justify-content: space-between;
	}

	.project-container {
		/* border: 1px solid rgba(185, 185, 185, 0.5); */
		/* box-shadow: rgba(166, 211, 255, 0.3) 0px 0px 24px; */
		border-radius: 5px;
		/* display: flex; */
		/* flex-direction: row; */
		/* gap: 1rem; */
	}

	.project-date {
		font-weight: 500;
		color: rgb(54, 54, 54);
		width: fit-content;
	}
</style>
