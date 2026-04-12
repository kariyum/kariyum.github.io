<script lang="ts">
	import type { Project } from '../../routes/+layout.server';
	import ProjectDetails from './ProjectDetails.svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<ProjectDetails {project} title="Ant Colony Optimization for the Traveling Salesman Problem">
	<p>
		Back when I was studying in 2022, I had a class where we studied Polynomial and Nondeterminisic
		Polynomial problems (P and NP problems). After going through the heuristic approaches, it was
		about time when we reached Ant Colony Optimization and it's one of the few approaches that
		caught my interest, as well as the Genetic Algorithm, both being based on nature and biology.
	</p>
	<p>
		Forward to summer, I had 2 weeks before starting my summer internship and all I was thinking
		about is making a visualization / simulation for the said approach. Other goal of mine to share
		this visualization with the class to spark discussions and ideas.. given these goals I chose to
		go with the Canvas html element as it's API is convenient and is on the web! easier to host and
		share!
	</p>
	<p>
		Ant Colony Optimization algorithms always intrigued me. They are loosely based in biology and
		the real protocols ants use to communicate and plan routes. They do this by coordinating through
		small pheromone messages: chemical trails they leave as they move forward, signaling for other
		ants to follow them. Even though each ant is not especially smart, and they follow simple rules
		individually, collectively they can converge to complex behaviors as a system, and amazing
		properties emerge.
	</p>

	<p>
		Travel Salesman Problem is defined as follows: <i
			>Given a complete graph G with weighted edges, find the minimum weight Hamiltonian cycle. That
			is, a cycle that passes through each node exactly once and minimizes the total weight sum.</i
		>
		In other words, the salesman wants to visit every home once and get back to where it started. Each
		edge joining two houses has a numeric label, representing the travel time between them in minutes.
		The salesman is a busy man, and would prefer to take as little time as possible in visiting all the
		houses. What would be the most efficient route?
	</p>

	<p>
		In this <a href="https://kariyum.github.io/ant_colony_optimization/index.html"
			>simulation link</a
		>, at first you will go through 'Understanding the algorithm' and then you'll be able to
		parameterize and visualize the algorithm performing!
	</p>
</ProjectDetails>

<style>
	p {
		margin: 1rem 0;
	}
</style>
