<script>
    import { score } from './stores.js';
    import { onMount } from 'svelte';


    export let target = {name: 'none', getUpgradeCost: () => {'hi'}};
    export let name = 'b';
    let too_expensive = false;
    let not_defined = false;
    let target_cost;
    const upgrade = () => {
        target.buyUpgrade();
        target_cost = target.getUpgradeCost();
    }

    $: {
        not_defined = target.name == 'none'
    }

    $: {
        target_cost = target.getUpgradeCost();
        too_expensive = target_cost > $score;
    }
</script>

<!--html-->
{#if !not_defined}
<button on:click={upgrade} class:tooExpensive={too_expensive} class:not_defined={not_defined}>
    Buy {name} Upgrade {target_cost === undefined ? target_cost : target_cost.toFixed(5)}
    <slot></slot>
</button>
{/if}
<!--end-html-->

<style>
    .not_defined, .tooExpensive {
        background-color: grey;
        pointer-events: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently*/
    }
</style>
