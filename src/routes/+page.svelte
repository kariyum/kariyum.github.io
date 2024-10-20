<script>
	// import welcome from '$lib/images/svelte-welcome.webp';
	import { base } from '$app/paths';
	import drone_vid from '$lib/project_assets/drone/vid.mp4';
	import maze from '$lib/project_assets/maze/maze.mp4';
	import reunited from '$lib/project_assets/reunited/reunited.mp4';
	import ants from '$lib/project_assets/simulation/ants.mp4';
	import HoverPeek from '../components/HoverPeek.svelte';
	import Tag from '../components/Tag.svelte';
	export let data;
</script>

<svelte:head>
	<title>Karim Ben Amara</title>
	<meta name="description" content="Karim Ben Amara portfolio" />
</svelte:head>

<section>
	<div class="introduction">
		<h1 class="slogan">
			turning ideas into real life <span class="highlight">products</span> is my thing.
		</h1>
		<span style="color:gray"> (aka. feeding my curiosty and suiting my needs) </span>
		<p>Basically, I'm a software engineer, from Tunisia.</p>
	</div>

	<div class="introduction" style="margin-top: 6em;">
		<h1>
			<div>
				<span> # </span>
				What Am I Curious About?
			</div>
		</h1>
		<p>
			I love backend engineering, building systems from scratch, optimizing them, touching lives,
			building experiences and helping shape the world around us.
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
			During my time at the engineering school, I had been captivated with some of the concepts in
			class and so I spared some time to create some visualizations for them, deepening my
			understanding and sharing it with the class.
		</p>
		<dir>
			<HoverPeek videoPath={ants}>
				<h1>
					<div>
						<span> ## </span>
						🐜 Ant Colony Optimizations (ACO)
					</div>
				</h1>
			</HoverPeek>
			<!-- <Tag>self-initiated</Tag> -->
			<Tag>heuristics</Tag>
			<Tag>search-algorithms</Tag>
			<p>
				Ant Colony Optimization is a metaheuristic approach that is well known as a solution
				approximator for the NP-Complete <a
					class="link"
					href="https://brilliant.org/wiki/traveling-salesperson-problem/"
					>Traveling Salesman Problem (TSP).</a
				>
			</p>
			<!-- svelte-ignore a11y-media-has-caption -->
			<!-- <video muted controls preload="none" style="width:100%" poster={ants_poster}>
				<source src={ants} />
			</video> -->
			<p>
				You can solve the problem with your own ACO configuration
				<a href="{base}/ant_colony_optimization/index.html" class="subtitle-link"> here </a>
				and if you would like to take a look at the code check the following
				<a
					href="https://github.com/kariyum/ant_colony_optimization.git"
					target="_blank"
					class="subtitle-link"
				>
					github repo
				</a>
				.
			</p>
			<div>
				<ul class="tool-list">
					<li title="Development duration is 2 weeks.">⏱️ - <span class="tool">2 weeks</span></li>
					<li title="Start date">
						📅 - <span class="tool">2022 - Just after ending 2nd year of my engineering school</span
						>
					</li>
					<li title="Tools">⚙️ - <span class="tool">Javascript</span></li>
				</ul>
			</div>
		</dir>

		<dir>
			<HoverPeek videoPath={drone_vid}>
				<h1>
					<div>
						<span>##</span>
						Neural Drone
					</div>
				</h1>
			</HoverPeek>
			<Tag>heuristics</Tag>
			<Tag>genetic-algorithm</Tag>
			<Tag>neural network</Tag>
			<p>Neural Networks ✖️ Genetic Algorithm</p>
			<p>
				A simple neural network learning to control a Drone and avoid crushing (keep the drone
				within the screen) for as long as possible using genetic algorithm as the neural network
				optimizer.
			</p>
			<p>
				Find more here <a href="https://github.com/kariyum/neural_drone" class="subtitle-link"
					>github repo</a
				>.
			</p>
			<div>
				<ul class="tool-list">
					<li title="Development time is 1 month">⏱️ - <span class="tool">1 month</span></li>
					<li title="Start date at mid december of 2022">
						📅 - <span class="tool">December 2022 - January of 2023</span>
					</li>
					<li title="Made with">
						⚙️ -
						<span class="tool">Python</span>
						-
						<span class="tool">Pygame</span>
					</li>
				</ul>
			</div>
		</dir>

		<dir>
			<h1>
				<div>
					<span>##</span>
					Single Machine Scheduling Problem
				</div>
			</h1>
			<Tag>heuristics</Tag>
			<Tag>genetic-algorithm</Tag>
			<Tag>branch&bound</Tag>
			<Tag>ant-colony-optimization</Tag>
			<p>
				Leveraging different heuristics and meta-heuristics approaches to solve the NP-HARD problem.
				Comparing their speed and best found solution.
			</p>
			<p>
				Find more here <a
					href="https://github.com/kariyum/single_machine_scheduling_problem"
					class="subtitle-link">github repo</a
				>.
			</p>
			<div>
				<ul class="tool-list">
					<li title="Development duration">⏱️ - <span class="tool">1 month</span></li>
					<li title="Start date">📅 - <span class="tool">January of 2023</span></li>
					<li title="Tools">⚙️ - <span class="tool">Python - Matplotlib</span></li>
				</ul>
			</div>
		</dir>

		<dir>
			<HoverPeek videoPath={maze}>
				<h1>
					<div>
						<span>##</span>
						Maze solver
					</div>
				</h1>
			</HoverPeek>
			<Tag>heuristics</Tag>
			<Tag>maze</Tag>
			<p>
				This program is used to compare different heuristics and visualizing them while trying to
				find a path between a starting point and a random point.
			</p>
			<p>
				Find more here <a href="https://github.com/kariyum/maze-solver" class="subtitle-link"
					>github repo</a
				>.
			</p>
			<ul class="tool-list">
				<li title="Development duration is 2 weeks.">⏱️ - <span class="tool">2 weeks</span></li>
				<li title="Start date is at April of 2022">
					📅 - <span class="tool">April of 2022</span>
				</li>
				<li title="Made with">⚙️ - <span class="tool">Python</span></li>
			</ul>
		</dir>
	</div>
	<div class="introduction">
		<h1>
			<div>
				<span>#</span>
				Suiting my needs
			</div>
		</h1>
		<p>Here's a list of some apps that I have implmented to fill some need</p>
		<dir>
			<h1>
				<div>
					<span>##</span>
					Program Insights
				</div>
			</h1>
			<Tag>web-app</Tag>
			<Tag>benchmark</Tag>
			<Tag>analysis</Tag>
			<p>
				A web app that accepts metrics streaming and neatly displays them in a sorted table adding
				in some valuable information such as the min, max, average and cpu_usage.
			</p>
			<p>I felt the need of such an app to effectively find bottlenecks in a webservice at work.</p>
			<p>
				Find more here <a href="https://github.com/kariyum/program-insights" class="subtitle-link"
					>github repo</a
				>.
			</p>
			<ul class="tool-list">
				<li title="Development time is 2 weeks.">⏱️ - <span class="tool">2 weeks</span></li>
				<li title="Start date is at mounth April of 2024">
					📅 - <span class="tool">April of 2024</span>
				</li>
				<li title="Tools">⚙️ - <span class="tool">Svelte</span></li>
			</ul>
		</dir>
		<dir>
			<h1>
				<div>
					<span>##</span>
					Expense Tracker
				</div>
			</h1>
			<Tag>mobile-app</Tag>
			<Tag>tracking</Tag>
			<p>
				Mobile app useful to track one's day to day expenses, extract some valuable information with
				some aggregations and graphs.
			</p>
			<p>
				Find more here <a href="https://github.com/kariyum/wallet" class="subtitle-link"
					>github repo</a
				>.
			</p>
			<ul class="tool-list">
				<li title="Start date is June of 2023">📅 - <span class="tool">June of 2023</span></li>
				<li title="Made with">⚙️ - <span class="tool">Flutter</span></li>
			</ul>
		</dir>
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
			I made this game back in december 2020 when covid-19 was everywhere and we had to be isolated
			at home.
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
</section>

<style>
	.tool-list {
		list-style: none;
		margin: 0;
		padding-left: 0%;
	}
	.tool {
		/* color: #3198fc; */
		/* font-weight: bold; */
		font-style: italic;
		/* background-color: var(--tool-blue); */
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
	dir {
		height: fit-content;
		padding-bottom: 2%;
		margin: 0;
		margin-top: 2%;
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

	.link {
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

	button {
		padding: 0.5em;
		/* background-color: var(--orange); */
		border: 2px solid var(--blue);
		border-radius: 5px;
		font-size: medium;
	}

	button:hover {
		cursor: pointer;
	}
</style>
