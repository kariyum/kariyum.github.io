<script>
	// import welcome from '$lib/images/svelte-welcome.webp';
	import ants from '$lib/project_assets/simulation/ants.mp4'
	import maze from '$lib/project_assets/maze.mp4'
</script>

<svelte:head>
	<title>Karim Ben Amara</title>
	<meta name="description" content="Karim Ben Amara portfolio" />
</svelte:head>

<section>
	<div class="introduction">
		<h1>Hi there 👋</h1>
		<!-- <h1>❓ Who</h1> -->
		<p>
			I'm Karim, a freshly graduated software engineer, a gamer and a cyclist.
			I'm here to share my journey and my passion towards CS.
			<!-- . (with a creative touch)
			I like exploring new concepts and using them as much as possible daily. <br> -->
			<!-- <dir></dir>
			I strive for efficiency ⌛<br> 
			I read and write blogs. <br>
			And I love cycling 🚴. -->
		</p>
	</div>

	<div class="introduction">
		<!-- <h1><span style="color:orange">#</span> I simulate</h1> -->
		<h1>🎨 I visualize.</h1>
		<p>
			During my time at the engineering school, I had been captivated with some of the concepts 
			in class and so I spared some time to create some visualizations for them, deepening my 
			understanding and sharing it with the class and club members.
		</p>
		
		<dir>
			<h2>🐜 Ant Colony Optimizations (ACO)</h2>
			<p>
				Ant Colony Optimization is a metaheuristic approach that is well known as a solution approximator
				for the NP-HARD Travel Salesman Problem (TSP).
			</p>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls preload="none" style="width:100%">
				<source src={ants}>
			</video>
			<a href="/ant_colony_optimization/index.html"><button>Read more</button></a>
		</dir>

		<dir>
			<h2>🦋 Neural Drone</h2>
			<p>
				A simple neural network learning to keep the Drone steady for as long as possible using genetic algorithm
				as the neural network optimizer.
			</p>
		</dir>

		<dir>
			<h2>🪱 Maze solver</h2>
			<p>
				This program is used to compare different heuristics visualizing steps taken one at a time.
			</p>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls preload="none" style="width:100%">
				<source src={maze}>
			</video>
		</dir>
	</div>
	<div class="introduction">
		<h1>🧑‍💻 I code.</h1>
		<p>
			Here's the list of the apps that I have implmented to fill some need
		</p>
		<ul>
			<li>
				Metrics and benchmarks
			</li>
			<li>
				Expense tracker mobile app
			</li>
		</ul>
	</div>
	<div class="introduction">
		<h1>📖 I read.</h1>
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
</style>
