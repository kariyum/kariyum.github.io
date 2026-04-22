<script lang="ts">
	import { MoveRight } from '@lucide/svelte';
	import type { Project } from '../../routes/+layout.server';
	import ProjectDetails from './ProjectDetails.svelte';
	import { scrollOnExpand } from '../../attachments/scrollOnExpand.svelte';

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
		wanted more of FP and less of OOP. Same goes for svelte, I liked how it transforms the code into
		plain Javascript and how easy it is to learn + sveltekit is a all in one solution where you can
		enable SSR, remote function calls... so this is my first getting exposed to Rust and Svelte.
	</p>

	<p>
		2024 was my lucky year to start the project. One requirement I have setup for myself was to
		depend on minimal dependencies, whether be it frontend or backend, which is a bad decision and
		unintuitive if the goal is to deliver fast but a good one if you're not limited by time and you
		are willing to learn every bit of everything. Backend logic and CRUD operations are implemented
		fully in Rust, Sveltekit will fetch resources and render them, no db connections and no state.
	</p>

	<details {@attach scrollOnExpand}>
		<summary> Using monads in Typescript. </summary>

		<p>
			I wanted to handle exceptions and errors gracefully having the type system signal that an
			operation can fail and what kind of exceptions can occur. Started with implementing the
			equivalent of <code>Result</code> monad of Rust in typescript, with the <code>Ok</code> and
			<code>Err</code> variants, <code>Result</code> is an abstract class and the variants are subclasses.
		</p>

		<p>
			Also added a <code>FetchOk</code> and <code>FetchErr</code> monad for fetch operations.
		</p>
	</details>

	<details {@attach scrollOnExpand}>
		<summary> Working against Sveltekit</summary>

		<p>
			Fetch operations can fail for multiple reasons but we mostly care about the success path. The
			question is, how to handle API failures? Should we display "Please refresh the page" kind of
			message or should we ignore the error and fallback to the default value but then the content
			will be misleading... Given that I model the fetching operation in <code>FetchOk</code>
			and <code>FetchErr</code> variants (two objects I used to model fetch operations), Sveltekit
			doesn't render the error page because all expections are caught. To overcome that, I had to
			implement a generic component that accepts an object of fetch operations, if all operations
			are <code>FetchOk</code> then we render the component otherwise we fallback to the error component.
			And let me tell you, maintainability went down the drain. Code became unreadable and basically ugly.
		</p>

		<p>
			Little did I know, Sveltekit doesn't just render an error page, it renders the closest
			+error.svelte file relative in place of the component that depends on the fetched content,
			assuming the project hierarchy is suitable for this.
		</p>

		<p>
			After going through the sveltekit documentation again and again, I have realized that
			sveltekit offered what I needed out of the box. At least, the +error.svelte component can
			match on different types of <code>FetchErr</code> holds and render the corresponding content.
		</p>
	</details>

	<details {@attach scrollOnExpand}>
		<summary>Google SSO state</summary>
		<p>
			When it comes to adding SSO, since the operation happens in multiple steps (from your app <MoveRight
				size="14px"
			/>
			auth providers login page <MoveRight size="14px" /> your app), one needs to keep track of the state
			to mitigate CSRF attacks; ensuring that the authentication response was triggered from your app
			and not an attacker trying to inject their credentials. I personally did not want to bother with
			maintaining the state value in a persistent and shared storage (because otherwise the server will
			no longer be stateless). Instead we instruct the browser to send this state value within a cookie
			when the user gets redirected back to our app.
		</p>
	</details>
</ProjectDetails>

<style>
	p {
		margin: 1rem 0;
	}
</style>
