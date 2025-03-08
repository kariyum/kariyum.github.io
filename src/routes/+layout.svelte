<script>
	import Header from './Header.svelte';
	import NavBar from './NavBar.svelte';
	import './styles.css';
</script>

<div class="app">
	<div class="header">
		<Header />
	</div>
	<main>
		<div class="content">
			<div class="main-page">
				<slot />
			</div>
			<div class="navbar">
				<NavBar />
			</div>
		</div>
	</main>

	<!-- <footer>
		<p>Karim Ben Amara</p>
	</footer> -->
</div>

<style>
	@media (min-width: 1600px) {

		.content {
			margin: 0 5%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.navbar {
			position: sticky;
			display: inline;
			top: 5%;
			height: fit-content;
			margin-top: 26rem;
			/* margin-right: auto; */
			padding-left: 2em;
			/* padding-right: 10em; */
			font-weight: 500;
			font-size: 16px;
		}

		.header {
			z-index: -1;
			height: 100%;
			margin: 0;
			padding: 0;
		}
	}

	@media (max-width: 1600px) {
		.content {
			margin: 0 5%;
		}

		.navbar {
			display: None;
		}

		.header {
			display: None;
		}
	}
</style>
