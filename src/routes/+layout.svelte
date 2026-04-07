<script lang="ts">
	import NavBar from './NavBar.svelte';
	import './styles.css';

	let { children } = $props();
</script>

<div class="app-container">
	<div class="bg-pattern" aria-hidden="true"></div>

	<NavBar />

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

	.bg-pattern {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(var(--border-light) 1px, transparent 1px);
		background-size: 40px 40px;
		mask-image: radial-gradient(circle at 2px 2px, white, transparent);
		opacity: 0.3;
		pointer-events: none;
		z-index: -1;
	}

	.content {
		flex: 1;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		padding: 1.5rem 1.5rem 3rem;
	}

	.footer {
		padding: 1.5rem 1.5rem;
		border-top: 1px solid var(--border-light);
		background: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(8px);
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease;
	}

	:global([data-theme='dark']) .footer {
		background: #0f172a;
		border-top: 1px solid var(--border-light);
	}

	.footer-content {
		max-width: 1000px;
		margin: 0 auto;
		text-align: center;
		font-size: 0.875rem;
		color: var(--text-secondary);
	}
</style>
