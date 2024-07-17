<script>
	import { page } from '$app/stores';
	import linkedin from '$lib/images/linkedin.svg';
	import github from '$lib/images/github.svg';
	import lefthand from '$lib/images/lefthand.webp';
	import righthand from '$lib/images/righthand.webp';
	import { base } from '$app/paths';
	
</script>

<img class="righthand" src={righthand} alt="">
<img class="lefthand" src={lefthand} alt="">
<header>
	<nav>
		<ul>
			<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">⚙️ Favorite Projects</a>
			</li> -->
			<li>
				<a href="{base}/">🏠 Home</a>
			</li>
			<li>
				<a href="#blogs">📝 Blogs</a>
			</li>
			<li>
				<img src={github} alt="">
				<a href="https://github.com/kariyum" target="_blank">
					Github
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<img src={linkedin} alt="">
				<a href="https://www.linkedin.com/in/karim-ben-amara-01282a1ba/" target="_blank">
					LinkedIn
				</a>
			</li>
			<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">📑 Resume</a>
			</li> -->
		</ul>
		
	</nav>

</header>

<style>
	.righthand {
		position: absolute;
		right: 0;
		bottom: 0.1%;
		width: 200px;
	}

	.lefthand {
		position: absolute;
		left: 0;
		width: 120px;
	}
	header {
		position: sticky;
		top: 4%;
		/* float: right; */
		margin: auto;
		width: 40%;
		margin-top: 75%;
		font-weight: 500;
		font-size: 16px;
	}


	li > img {
		/* width: 1.5em; */
		width: 1.4em;
		margin-right: 7px;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		width: 100%;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: start;
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
		border: 2px solid transparent;
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
