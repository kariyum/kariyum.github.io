<script>
	// import welcome from '$lib/images/svelte-welcome.webp';
	import ants from '$lib/project_assets/simulation/ants.mp4';
	import ants_poster from '$lib/project_assets/simulation/ants.png';
	import maze from '$lib/project_assets/maze/maze.mp4';
	import maze_poster from '$lib/project_assets/maze/maze_preview.png';
	import github from '$lib/images/github.svg';
	import drone_vid from '$lib/project_assets/drone/vid.mp4';
	import drone_poster from '$lib/project_assets/drone/drone_poster.png';
	import { base } from '$app/paths';
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
		<p>Basically, I'm a software engineer.</p>
	</div>

	<div class="introduction">
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
			<h1>
				<div>
					<span> ## </span>
					🐜 Ant Colony Optimizations (ACO)
				</div>
			</h1>

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
				</a>.
			</p>
		</dir>

		<dir>
			<h1>
				<div>
					<span>##</span>
					Neural Drone
				</div>
			</h1>
			Neural Networks ✖️ Genetic Algorithm
			<p>
				A simple neural network learning to control a Drone and avoid crushing (keep the drone
				within the screen) for as long as possible using genetic algorithm as the neural network
				optimizer.
			</p>
			<p>
				Find more here <a href="https://github.com/kariyum/neural_drone" class="subtitle-link"
					>github repo</a
				>
			</p>

			<!-- <video muted controls preload="none" style="width:100%" poster={drone_poster}>
			<source src={drone_vid} />
			</video> -->
		</dir>
		<dir>
			<h1>
				<div>
					<span>##</span>
					Single Machine Scheduling Problem
				</div>
			</h1>
			<p>
				Using different heuristics and meta-heuristics approaches to solve the NP-HARD problem. Comparing
				their speed and best found solution.
			</p>
			<p>
				Find more here <a href="https://github.com/kariyum/single_machine_scheduling_problem" class="subtitle-link"
					>github repo</a
				>
			</p>

			<!-- <video muted controls preload="none" style="width:100%" poster={drone_poster}>
			<source src={drone_vid} />
			</video> -->
		</dir>
		<dir>
			<h1>
				<div>
					<span>##</span>
					Maze solver
				</div>
			</h1>
			<p>
				This program is used to compare different heuristics and visualizing them while trying to
				find a path between a starting point and a random point.
			</p>
			<p>
				Find more here <a href="https://github.com/kariyum/maze-solver" class="subtitle-link"
					>github repo</a
				>
			</p>
			<!-- svelte-ignore a11y-media-has-caption -->
			<!-- <video controls preload="none" style="width:100%" poster={maze_poster}>
				<source src={maze} />
			</video> -->
		</dir>
	</div>
	<div class="introduction">
		<h1>
			<div>
				<span>#</span>
				Suiting my needs
			</div>
		</h1>
		<p>Here's the list of the apps that I have implmented to fill some need</p>
		<ul>
			<li>
				Metric Analysis
				<dir>
					A web app that accepts metrics streaming and neatly displays them in a sorted table adding
					in some valuable information such as the min, max, average and cpu_usage.
				</dir>
			</li>
			<li>
				Expense Tracker
				<dir> 
					Mobile app useful to track one's day to day expenses, extract some valuable information 
					with some aggregations and graphs.
				</dir>
			</li>
		</ul>
	</div>
	<div class="introduction" id="blogs">
		<h1>
			<div>
				<span>#</span>
				Favorite blogs
			</div>
		</h1>
		The following list contains my favorite blogs
		<ul>
			<li>Discord blog</li>
			<li><a href="https://samwho.dev/load-balancing/">Load balancing visualized</a></li>
		</ul>
	</div>
</section>

<style>

	.introduction {
		margin: 0 auto 0 auto;
		max-width: 800px;
		margin-top: 4em;
	}

	.slogan {
		display: inline;
		font-size: 72px;
		/* background-color: bisque; */
		/* translate: -20%; */
	}

	.highlight {
		display: inline;
		/* background: rgb(205, 221, 255); */
		text-decoration-line: underline;
		text-decoration-color: rgb(205, 221, 255);
		text-decoration-style: wavy;
	}
	dir {
		height: fit-content;
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
		color: black;
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
