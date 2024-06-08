<script>
	// import welcome from '$lib/images/svelte-welcome.webp';
	import ants from '$lib/project_assets/simulation/ants.mp4'
</script>

<svelte:head>
	<title>Karim Ben Amara</title>
	<meta name="description" content="Karim Ben Amara portfolio" />
</svelte:head>

<section>
	<div class="introduction">
		<h1>👋 Hi.</h1>
		<!-- <h1>❓ Who</h1> -->
		<p>
			I'm Karim, a software engineer from North Africa, Tunisia.
			I strive for writing programs that does accomplish something useful in a beautiful way
			<!-- . (with a creative touch)
			I like exploring new concepts and using them as much as possible daily. <br> -->
			<dir></dir>
			I strive for efficiency ⌛<br> 
			I read and write blogs. <br>
			And I love cycling 🚴.
		</p>
	</div>

	<div class="introduction">
		<!-- <h1><span style="color:orange">#</span> I simulate</h1> -->
		<h1>🎨 I Visualize</h1>
		<p>
			During my time at the engineering school, I had been captivated with some of the concepts 
			in class and so I spared some time to create some visualizations for them, deepening my 
			understanding and sharing it with the class and upcoming generations.
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
			<button>Read more</button>
		</dir>

		<div>
			<h2>🐪 Neural Drone</h2>
			<p>
				A simple neural network learning to keep the Drone steady for as long as possible using genetic algorithm
				as the 
			</p>
		</div>
	</div>
</section>

<style>
.introduction {
	margin: 0 auto 0 auto;
	max-width: 600px;
	margin-top: 4em;
}
</style>
