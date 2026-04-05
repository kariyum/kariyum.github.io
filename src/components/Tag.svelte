<script>
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>


<div>
    {@render children?.()}
</div>

<style>
    div {
        margin: 0.25rem 0.25rem 0 0;
        padding: 0.125rem 0.75rem;
        background-color: var(--tag-bg, #f3f4f6);
        color: var(--tag-text, #374151);
        display: inline-block;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid var(--border-light, #e5e7eb);
        line-height: 1.5;
    }

    div::before {
        content: "#";
        margin-right: 0.125rem;
        opacity: 0.5;
    }
</style>