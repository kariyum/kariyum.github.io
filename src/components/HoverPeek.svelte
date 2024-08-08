<script>
	export let videoPath;

	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let coords = tweened(
		{ x: undefined || 0, y: undefined || 0 },
		{
			duration: 400,
			easing: cubicOut
		}
	);
	let initialized = false;
	let isHovered = false;
	let showPopup = false;
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
		const min = (/** @type {number} */ a, /** @type {number} */ b) => a < b ? a : b;
		videoTag.width = min(document.body.clientWidth * 0.4, ((document.body.clientWidth - 20) - x));
	}
	
	function mouseLeave() {
		console.log('mouse leave!');
		isHovered = false;
		if (hover_container.firstChild) {
			hover_container.removeChild(videoTag);
		}
	}
	function openPopup() {
		showPopup = true;
		if (src && videoTag) {
			popup_container.appendChild(videoTag);
			videoTag.controls = true;
			videoTag.width = 1000;
		}
	}

	function closePopup() {
		showPopup = false;
		popup_container.removeChild(videoTag);
		videoTag.controls = false;
		videoTag.width = window.screen.availWidth * 0.4;
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
		videoTag.width = window.screen.availWidth * 0.4;
	});
	$: {
		if (!showPopup && !isHovered && videoTag) {
			videoTag.pause();
		}
	}
</script>

<button
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	class="outer-container"
	on:click={openPopup}
	on:focus={() => (isHovered = true)}
	style="width:100%;"
>
<slot/>
</button>

<button class="container" style="display: {showPopup ? 'block' : 'None'};" on:click={closePopup}>
	<button
		class="slot"
		on:click={(event) => {
			event.stopPropagation();
		}}
	>
		<div bind:this={popup_container} class="default-cursor"></div>
	</button>
</button>
<div
	style="top: {$coords.y}px; left: {$coords.x}px; display:{isHovered ? 'block' : 'none'};"
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
		pointer-events:none;
		display: None;
		border: 1px solid #ddd;
		box-shadow: 1px 1px 1px #ddd;
		background: white;
		border-radius: 4px;
		padding: 4px;
		position: absolute;
		width: fit-content;
		z-index: 1;
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
