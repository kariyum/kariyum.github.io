<script lang="ts">
	import './styles.css';

	let { children } = $props();
</script>

<div class="app-container">
	<main class="content">
		{@render children?.()}
	</main>
</div>

<style>
	.app-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		position: relative;
		overflow-x: hidden;
	}

	.content {
		flex: 1;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		padding: 1.5rem 1.5rem 3rem;
	}
</style>
