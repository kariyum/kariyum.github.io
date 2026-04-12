<script lang="ts">
	import type { Project } from '../../routes/+layout.server';
	import ProjectDetails from './ProjectDetails.svelte';

	let { project }: { project: Project } = $props();
</script>

<ProjectDetails {project}>
	<p>
		This is a freelancing platform where recruiters posts projects and freelancers can apply and on
		work them.
	</p>

	<p>
		This project started as a learning project, after graduation in 2023 I wanted to learn Rust and
		Svelte. I have heard a lot about Rust, replacing garbage collector with the borrow checker,
		replaces OOP with functional style trait and impls, out of the box of monads, no nulls,
		granularity to go low level as well to code at high level without losing runtime performance for
		the added abstractions... it sparked my interest to say the least. And coming from Scala, I
		wanted moreo of FP and less of OOP. Same goes for svelte, I liked how it transforms the code
		into plain Javascript and how easy it is to learn + sveltekit is a all in one solution where you
		can enable SSR, remote function calls... so this is my first getting exposed to Rust and Svelte.
	</p>

	<p>
		2024 was my lucky year to start the project. One requirement I have setup for myself was to
		depend on minimal dependencies, whether be it frontend or backend, which is a bad decision and
		unintuitive if the goal is to deliver fast but a good one if you're not limited by time and you
		are willing to learn every bit of everything. Backend logic and CRUD operations are implemented
		fully in Rust, Sveltekit will fetch resources and render them, no db connections and no state.
	</p>

	<h3>Mistakes I have made</h3>
	<ul>
		<li>Enforcing modes in typesciprt.</li>
		<p>
			Basically, I wanted to handle exceptions and errors gracefully and I wanted the type system to
			signal that an operation can fail and what kind of exceptions can occur.
		</p>
		<li>Hm?</li>
	</ul>

	<h3>Difficulties I have encountered</h3>

	<h3>Features I have implemented</h3>
</ProjectDetails>
