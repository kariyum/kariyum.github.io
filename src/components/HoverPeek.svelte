<script>
	import ants_poster from '$lib/project_assets/simulation/ants.png';
    import ants from '$lib/project_assets/simulation/ants.mp4';
    export let video;
	let isHovered = false;
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
	}
</script>

<div on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>
    <slot />
</div>

<div style="top: {y}px; left: {x}px; display:{isHovered? "block" : "none"};" class="tooltip">
    <video muted autoplay preload="none" style="width:100%;">
        <source src={video} />
    </video>
</div>

<style>
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
</style>
