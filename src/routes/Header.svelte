<script>
	import lefthand from '$lib/images/lefthand.webp';
	import righthand from '$lib/images/righthand.webp';
</script>

<img class="righthand" src={righthand} alt="" />
<img class="lefthand" src={lefthand} alt="" />

<style>
	.righthand {
		position: absolute;
		right: 0;
		bottom: 0.1%;
		width: 10vw;
	}

	.lefthand {
		position: absolute;
		left: 0;
		width: 8vw;
	}
</style>
