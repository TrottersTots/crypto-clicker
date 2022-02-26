<script>
    import { score, costs, increments, multipliers, upgrade_costs, cost_multiplier } from './stores.js';

    export let name = 'none';
    export let img;
    let too_expensive = false;
    let not_defined = false;

    const upgrade = () => {
        $increments[name] *= $multipliers[name];
        $score -= $costs[name]
        $upgrade_costs[name] *= $cost_multiplier;
    }

    $: {
        not_defined = name == 'none'
    }

    $: too_expensive = $costs[name] > $score

    $: target_cost = $upgrade_costs[name]
</script>

<!--html-->
{#if !not_defined}
<button on:click={upgrade} class:tooExpensive={too_expensive} class:not_defined={not_defined}>
    <img src={img} alt='upgrade' class:scaleUp={name=='Robot02'}/>
    <h3 class='cost'>{target_cost.toFixed(5)}</h3>
    <!-- Buy {name} Upgrade {target_cost === undefined ? target_cost : target_cost.toFixed(5)} -->
</button>
{/if}
<!--end-html-->

<style>
    img {
        transform: scale(.8);
        max-width: 50px;
        max-height: 50px;
        min-width: 50px;
        min-height: 50px;
        margin-left: 0px;
    }
    .cost {
        font-size: 10px;
        position: absolute;
        transform: translate(50px, -10px);
        color: red;
    }
    button {
        background-color: rgb(24, 22, 22);;
        border: 1px solid aliceblue;
        border-radius: 9px;
        display: flex;
        max-width: 300px;
        min-width: 100px;
        max-height: 50px;
        justify-content: left;
        align-items: center;
    }

    button:hover {
    transform: scale(1.08);
  }

  button:active {
    background-color: rgb(24, 22, 22);;

    transform: scale(1.2);

    filter: drop-shadow(0 0 20px #424242) hue-rotate(12deg) contrast(110%);
    /* invert(75%); */
  }

    .not_defined, .tooExpensive {
        filter: opacity(0.2);
        pointer-events: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently*/
    }

    .scaleUp{
        transform: scaleX(1.2) translateY(5px) translateX(-3px);
    }
</style>
