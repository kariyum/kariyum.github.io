<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status}: {page.error?.message}</title>
</svelte:head>

<section class="error-container">
	<div class="section-header">
		<span class="section-label">ERROR {page.status}</span>
		<h1 class="section-title">{page.error?.message || 'Something went wrong'}</h1>
	</div>

	<p class="section-desc">
		It seems like you've reached a page that doesn't exist or encountered an unexpected error.
	</p>

	<div class="actions">
		<a href={resolve('/')} class="link-branded">Return Home</a>
	</div>
</section>

<style>
	.error-container {
		margin: 4rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 40vh;
	}

	.section-header {
		margin-bottom: 2rem;
	}

	.section-label {
		font-family: 'Fira Mono', monospace;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		color: var(--accent-orange);
		opacity: 0.8;
	}

	.section-title {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		margin-top: 0.5rem;
		line-height: 1.1;
	}

	.section-desc {
		color: var(--text-secondary);
		margin-bottom: 2.5rem;
		max-width: 600px;
		font-size: 1.25rem;
	}

	.actions {
		display: flex;
		gap: 1.5rem;
	}
</style>
