<script>
	export let videoPath;

	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	/**
	 * @type {HTMLVideoElement}
	 */
	let videoTag;
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

	const min = (/** @type {number} */ a, /** @type {number} */ b) => (a < b ? a : b);
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
		size.subscribe(({ width }) => {
			if (videoTag) videoTag.width = width;
			if (!showPopup) popupSize.set({ width: width });
		});
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
	 * @type {HTMLDivElement | null}
	 */
	let hover_container;

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
		x = event.pageX + 10;
		y = event.pageY + 10 - max(0, videoTag.offsetHeight + y - (clientHeight || 0) + 10);
		videoTag.play();
		if (src && hover_container) {
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
			coords.subscribe(({ x, y }) => {
				size.set({ width: min((clientWidth || 0) * 0.4, (clientWidth || 0) - 20 - x) });
				if (hover_container) {
					hover_container.style.top = `${$coords.y}px`;
					hover_container.style.left = `${$coords.x}px`;
				}
				console.log({ x, y });
			});
			initialized = true;
		}
		coords.set({
			x: x,
			y: y
		});
	}
	const max = (/** @type {number} */ a, /** @type {number} */ b) => (a < b ? b : a);
	/**
	 * @param {{ pageX: number; pageY: number; }} event
	 */
	function mouseMove(event) {
		x = event.pageX + 10;
		y = event.pageY + 10;
		console.log(x, y);
		coords.set({
			x: event.pageX + 10,
			y: event.pageY + 10 - max(0, videoTag.offsetHeight + y - (clientHeight || 0) + 10)
		});
	}

	function mouseLeave() {
		isHovered = false;
		initialized = false;
		if (hover_container && hover_container.firstChild && !showPopup) {
			hover_container.removeChild(videoTag);
		}
	}
	function switchToPopup() {
		showPopup = true;
		if (src && videoTag) {
			videoTag.controls = true;
			popupSize.set({ width: ((clientWidth || 1920) * 1000) / 1920 }, {duration: 700});
			size.set({ width: ((clientWidth || 1920) * 1000) / 1920 });
			coords.set({
				x: Math.round(window.innerWidth / 2 - ((clientWidth || 1920) * 1000) / 1920 / 2),
				y: Math.round(
					window.innerHeight / 2 +
						window.scrollY -
						((((clientWidth || 1920) * 1000) / 1920) * 9) / 16 / 2
				)
			}, {
				duration: 700
			});
		}
	}

	function closePopup() {
		showPopup = false;
		videoTag.controls = false;
		if (hover_container && hover_container.firstChild) {
			hover_container.removeChild(videoTag);
		}
		size.set({ width: min((clientWidth || 0) * 0.4, (clientWidth || 0) - 20 - x) });
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
		let element = document.getElementById('hover_container');
		if (!element) {
			hover_container = document.createElement('div');
			hover_container.id = 'hover_container';
			hover_container.style.position = 'absolute';
			hover_container.style.border = '1px solid #ddd';
			hover_container.style.boxShadow = '1px 1px 1px #ddd';
			hover_container.style.background = 'white';
			hover_container.style.borderRadius = '4px';
			hover_container.style.padding = '4px';
			hover_container.style.width = 'fit-content';
			hover_container.style.zIndex = '3';
			document.body.appendChild(hover_container);
		} else {
			if (element instanceof HTMLDivElement) {
				hover_container = element;
			}
		}
	});
	size.subscribe(({ width }) => {
		if (videoTag) videoTag.width = width;
		if (!showPopup) popupSize.set({ width: width });
	});
	$: {
		if (videoTag && !showPopup && !isHovered) {
			videoTag.pause();
		} else if (videoTag && showPopup) {
			videoTag.width = $popupSize.width;
		}
	}

	/**
	 * @param { KeyboardEvent } keyboardEvent
	 */
	function onKeyDown(keyboardEvent) {
		switch (keyboardEvent.key) {
			case 'Escape':
				if (showPopup) {
					closePopup();
				}
				break;

			default:
				break;
		}
	}
	$: {
		if (hover_container) {
			hover_container.style.display = isHovered || showPopup ? 'block' : 'none';
			hover_container.style.pointerEvents = showPopup ? 'all' : 'none';
		}
	}
</script>

<!-- 
<svelte:window on:wheel|nonpassive={e => {
    if(showPopup)
        e.preventDefault()
}} /> 
 -->
<svelte:window on:keydown={onKeyDown} on:scroll={() => {
	if (videoTag && showPopup) {
				coords.set({
					x: Math.round(window.innerWidth / 2 - ((clientWidth || 1920) * 1000) / 1920 / 2),
					y: Math.round(
						window.innerHeight / 2 +
							window.scrollY -
							((((clientWidth || 1920) * 1000) / 1920) * 9) / 16 / 2
					)
				});
			}
}}/>
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
	<div class="container outer-container" on:click={closePopup} in:fade={{ duration: 200 }}></div>
{/if}

<!-- <div
	style="
		top: {$coords.y}px; 
		left: {$coords.x}px; 
		display:{isHovered || showPopup ? 'block' : 'none'}; 
		pointer-events: {showPopup ? 'all' : 'showPopup'};
		"
	class="tooltip default-cursor"
	bind:this={hover_container}
></div> -->

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
</style>
