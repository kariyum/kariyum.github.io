<script>
	import { onMount } from 'svelte';
	export let videoPath;

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
		isHovered = true;
		x = event.pageX + 5;
		y = event.pageY + 5;
		videoTag.play();
		if (src) {
			hover_container.appendChild(videoTag);
		}
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
		hover_container.removeChild(videoTag);
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
		videoTag.width = 800;
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
		videoTag.width = 800;
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
>
	<slot />
</button>

<button class="container" style="display: {showPopup ? 'block' : 'None'};" on:click={closePopup}>
	<div class="slot">
		<div bind:this={popup_container}></div>
	</div>
</button>
<div
	style="top: {y}px; left: {x}px; display:{isHovered ? 'block' : 'none'};"
	class="tooltip"
	bind:this={hover_container}
></div>

<style>
	button {
		display: block;
		width: 100%;
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
		z-index: 1;
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
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.video-styles {
		width: 40%;
	}
</style>
