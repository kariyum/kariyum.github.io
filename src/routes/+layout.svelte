<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	

	<main>
		<div class="header">
			<Header />
		</div>
		<slot />
	</main>

	<footer>
		<p>Karim Ben Amara</p>
	</footer>
</div>

<style>
	main {
		display: flex;
		flex-direction: row-reverse;
	}
	.header {
		width: 30%;
	}
</style>
