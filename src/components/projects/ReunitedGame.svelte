<script lang="ts">
	import type { Project } from '../../routes/+layout.server';
	import ProjectDetails from './ProjectDetails.svelte';

	let { project }: { project: Project } = $props();
</script>

<ProjectDetails {project}>
	<p>
		I have been curious about game development for a long time and given that I have been studying
		physics, I find myself wanting to simulate velocity, acceleration, friction.. forces basically.
		I have only known a bit of python when I have started this project. Started with following
		Youtube channels about Unity and googling stuff.. I found myself spending so much time consuming
		content feeling like I'm learning but I'm practically not. That's when I knew that one better
		start with a mediocre version and iterate frequently better than wanting to write the perfect
		implementation from the get go. It was a fun little challenge when we had to be isolated at home
		back during Covid19 in December 2020.
	</p>
</ProjectDetails>
