import { tick } from 'svelte';
import { on } from 'svelte/events';

export function scrollOnExpand(node: HTMLDetailsElement) {
	const off = on(node, 'toggle', async () => {
		if (node.open) {
			await tick();
			node.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});

	return () => {
		off();
	};
}
