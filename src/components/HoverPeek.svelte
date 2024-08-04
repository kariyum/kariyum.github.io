<script>
	import ants_poster from '$lib/project_assets/simulation/ants.png';
	import ants from '$lib/project_assets/simulation/ants.mp4';
	import Popup from './Popup.svelte';
	import { onMount } from 'svelte';
	export let video;
	let isHovered = false;
	let showPopup = false;

	/**
	 * @type {number}
	 */
	let x;
	/**
	 * @type {number}
	 */
	let y;

	/**
	 * @param {{ pageX: number; pageY: number; }} event
	 */
	function mouseOver(event) {
		isHovered = true;
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	/**
	 * @param {{ pageX: number; pageY: number; }} event
	 */
	function mouseMove(event) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
		// showPopup = false;
	}

	function onClick() {
		showPopup = true;
	}

</script>

<div
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	class="outer-container"
>
	<slot />
</div>

{#if showPopup}
	<div class="container">
		<div class="slot">
			<video muted autoplay preload="none" style="width:100%;">
				<source src={video} />
			</video>
		</div>
	</div>
{:else}
	<div style="top: {y}px; left: {x}px; display:{isHovered ? 'block' : 'none'};" class="tooltip">
		<video muted autoplay preload="none" style="width:100%;">
			<source src={video} />
		</video>
	</div>
{/if}

<style>
	/* .outer-container {
		cursor: pointer;
	} */
	.tooltip {
		display: None;
		border: 1px solid #ddd;
		box-shadow: 1px 1px 1px #ddd;
		background: white;
		border-radius: 4px;
		padding: 4px;
		position: absolute;
		max-width: 40%;
		width: fit-content;
	}

	.container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(2px);
		z-index: 1;
	}

	.slot {
		padding: 1%;
		background-color: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%); /* Yep! */
	}
</style>
