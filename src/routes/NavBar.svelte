<script>
	import { page } from '$app/state';
	import linkedin from '$lib/images/linkedin.svg';
	import github from '$lib/images/github.svg';
	import { base } from '$app/paths';
	import karim_ben_amara_resume from '$lib/karim_ben_amara_resume.pdf';
	import ThemeToggle from '../components/ThemeToggle.svelte';
</script>

<nav class="navbar">
	<div class="nav-content">
		<div class="brand">
			<a href="{base}/" class="logo">KBA<span>.</span></a>
		</div>
		<ul class="nav-links">
			<li>
				<a href="{base}/" class:active={page.url.pathname === '/'}>Home</a>
			</li>
			<li>
				<a href="#blogs">Readings</a>
			</li>
			<li>
				<a target="_blank" href={karim_ben_amara_resume}>Resume</a>
			</li>
			<li class="social-icons">
				<a href="https://github.com/kariyum" target="_blank" aria-label="Github">
					<img src={github} alt="Github" />
				</a>
				<a href="https://www.linkedin.com/in/karim-ben-amara-01282a1ba/" target="_blank" aria-label="LinkedIn">
					<img src={linkedin} alt="LinkedIn" />
				</a>
			</li>
			<li class="theme-toggle-li">
				<ThemeToggle />
			</li>
		</ul>
	</div>
</nav>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 1000;
		background: rgba(252, 252, 252, 0.8);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border-light);
		padding: 0.75rem 0;
		width: 100%;
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	:global([data-theme="dark"]) .navbar {
		background: rgba(15, 23, 42, 0.9);
		border-bottom: 1px solid var(--border-light);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	:global([data-theme="dark"]) .nav-links a {
		color: #94a3b8;
	}

	:global([data-theme="dark"]) .nav-links a:hover, 
	:global([data-theme="dark"]) .nav-links a.active {
		color: #f8fafc;
	}

	.nav-content {
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1.5rem;
	}

	.brand .logo {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--text-primary);
		letter-spacing: -0.025em;
	}

	.brand .logo span {
		color: var(--accent-orange);
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav-links a {
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--text-secondary);
		transition: color 0.2s ease;
	}

	.nav-links a:hover, .nav-links a.active {
		color: var(--text-primary);
	}

	.social-icons {
		display: flex;
		gap: 1rem;
		align-items: center;
		border-left: 1px solid var(--border-light);
		padding-left: 1rem;
	}

	.social-icons img {
		width: 1.25rem;
		height: 1.25rem;
		opacity: 0.7;
		transition: opacity 0.2s ease, filter 0.3s ease;
	}

	:global([data-theme="dark"]) .social-icons img {
		filter: invert(1) brightness(0.9);
	}

	.social-icons a:hover img {
		opacity: 1;
	}

	.theme-toggle-li {
		display: flex;
		align-items: center;
	}

	@media (max-width: 640px) {
		.nav-links {
			gap: 1rem;
		}
		.social-icons {
			display: none;
		}
		.nav-links a {
			font-size: 0.875rem;
		}
	}
</style>