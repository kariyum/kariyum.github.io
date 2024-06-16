<script>
	import { page } from '$app/stores';
	import linkedin from '$lib/images/linkedin.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<!-- <div class="name">
		<h3>Karim</h3>
		<h3>Ben Amara</h3>
	</div> -->
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">⚙️ Favorite Projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">📝 Blogs</a>
			</li>
			<li>
				<img src={github} alt="">
				<a href="/about">
					Github
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<img src={linkedin} alt="">
				<a href="/about">
					LinkedIn
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">📑 Resume</a>
			</li>
		</ul>
		
	</nav>

</header>

<style>
	header {
		margin: auto;
		width: 40%;
		margin-top: 5%;
		font-weight: 500;
		font-size: 16px;
	}


	img {
		/* width: 1.5em; */
		width: 1.4em;
		margin-right: 7px;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		list-style: none;
	}

	li {
		padding: 1%;
		display: flex;
		flex-direction: row;
		align-items: start;
		transition: 
			background-color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95), 
			border-bottom 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		border: 2px solid white;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text);
		/* text-transform: uppercase; */
		letter-spacing: 0.1em;
		text-decoration: none;

	}

	li:hover {
		cursor: pointer;
		border-bottom: 2px solid rgb(205, 221, 255);
		background-color: rgb(255, 246, 236);
	}
</style>
