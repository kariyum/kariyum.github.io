<script>
	export let videoPath;

	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	
	let coords = tweened(
		{ x: undefined || 0, y: undefined || 0 },
		{
			duration: 400,
			easing: cubicOut
		}
	);
	let size = tweened(
		{ width: undefined || 0 },
		{
			duration: 0,
			easing: cubicOut
		}
	);
	let popupSize = tweened(
		{ width: undefined || 0 },
		{
			duration: 400,
			easing: cubicOut
		}
	);
	function initTweens() {
		initialized = false;
		coords = tweened(
			{ x: undefined || 0, y: undefined || 0 },
			{
				duration: 400,
				easing: cubicOut
			}
		);
		size = tweened(
			{ width: undefined || 0 },
			{
				duration: 0,
				easing: cubicOut
			}
		);
		popupSize = tweened(
			{ width: undefined || 0 },
			{
				duration: 400,
				easing: cubicOut
			}
		);
	}
	let initialized = false;
	let isHovered = false;
	let showPopup = false;
	/**
	 * @type {number | null}
	 */
	let clientWidth = null;
	/**
	 * @type {number | null}
	 */
	let clientHeight = null;
	/**
	 * @type {HTMLSourceElement | null}
	 */
	let src = null;
	/**
	 * @type {HTMLDivElement}
	 */
	let popup_container;
	/**
	 * @type {HTMLDivElement}
	 */
	let hover_container;

	/**
	 * @type {HTMLVideoElement}
	 */
	let videoTag;

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
		console.log('mouse over!');
		isHovered = true;
		x = event.pageX + 10;
		y = event.pageY + 10;
		videoTag.play();
		if (src) {
			hover_container.appendChild(videoTag);
		}
		if (!initialized) {
			coords = tweened(
				{ x: x, y: y },
				{
					duration: 400,
					easing: cubicOut
				}
			);
			initialized = true;
		}
	}

	/**
	 * @param {{ pageX: number; pageY: number; }} event
	 */
	function mouseMove(event) {
		x = event.pageX + 10;
		y = event.pageY + 10;
		coords.set({ x: event.pageX + 10, y: event.pageY + 10 });
	}

	function mouseLeave() {
		isHovered = false;
		if (hover_container.firstChild && !showPopup) {
			hover_container.removeChild(videoTag);
		}
	}
	function switchToPopup() {
		showPopup = true;
		if (src && videoTag) {
			videoTag.controls = true;
			popupSize.set({ width: 1000 });
		}
	}

	function closePopup() {
		showPopup = false;
		videoTag.controls = false;
		if (hover_container.firstChild) {
			hover_container.removeChild(videoTag);
		}
		initTweens();
	}

	onMount(() => {
		/**
		 * @type {HTMLSourceElement}
		 */
		src = document.createElement('source');
		src.src = videoPath;
		videoTag = document.createElement('video');
		videoTag.appendChild(src);
		videoTag.autoplay = true;
		videoTag.preload = 'none';
		videoTag.muted = true;
		videoTag.width = document.body.clientWidth * 0.4;
		clientWidth = document.body.clientWidth;
		clientHeight = document.body.clientHeight;
	});
	$: {
		if (!showPopup && !isHovered && videoTag) {
			videoTag.pause();
		}
	}
	const min = (/** @type {number} */ a, /** @type {number} */ b) => (a < b ? a : b);
	$: {
		// use subscribe methods on tweened for all of these.
		if (clientWidth && !showPopup)
			size.set({ width: min(clientWidth * 0.4, clientWidth - 20 - $coords.x) });
		if (videoTag && !showPopup) videoTag.width = $size.width;
		if (!showPopup) popupSize.set({ width: $size.width });
		if (videoTag && showPopup) {
			videoTag.width = $popupSize.width;
			if (clientHeight) {
				coords.set({
					x: Math.round(window.innerWidth / 2 - videoTag.width / 2),
					y: Math.round(window.innerHeight / 2 + window.scrollY - videoTag.offsetHeight / 2)
				});
			}
		}
	}
</script>

<button
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	class="outer-container"
	on:click={switchToPopup}
	on:focus={() => (isHovered = true)}
	style="width:100%;"
>
	<slot />
</button>
{#if showPopup}
	<div class="container outer-container" on:click={closePopup} transition:fade={{ duration: 200 }}></div>
{/if}

<div
	style="top: {$coords.y}px; left: {$coords.x}px; display:{isHovered || showPopup
		? 'block'
		: 'none'}; pointer-events: {showPopup ? 'all' : 'showPopup'}; 
		pointer-events: {showPopup ? 'all;' : 'none'};"
	class="tooltip default-cursor"
	bind:this={hover_container}
></div>

<style>
	.default-cursor {
		cursor: default;
	}
	button {
		display: block;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.outer-container {
		cursor: pointer;
	}

	.tooltip {
		
		display: None;
		border: 1px solid #ddd;
		box-shadow: 1px 1px 1px #ddd;
		background: white;
		border-radius: 4px;
		padding: 4px;
		position: absolute;
		width: fit-content;
		z-index: 3;
	}

	.container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(2px);
		z-index: 1;
	}

	.slot {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.video-styles {
		width: 40%;
	}
</style>
