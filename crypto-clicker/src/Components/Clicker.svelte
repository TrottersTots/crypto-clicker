<script>
    import { onMount } from 'svelte';
    import { score } from './stores.js';
    import { clicker_multiplier } from './stores.js';
    import { clicker_upgrade_cost } from './stores.js';
    import { update_clicker_upgrade_cost } from './stores.js';

    export let increment = 0.00001;
    export let speed = 1;
    export const name = 'Clicker'
    // export let img_path= '';

    let clicker; // to bind
    let mounted = false;

    const action = () => {
        $score += increment;
        setTimeout(action, 1000/speed);
    }

    export const buyUpgrade = () => {
        if ($score < $clicker_upgrade_cost) {
            return;
        }
        $score -= $clicker_upgrade_cost;
        increment *= $clicker_multiplier;
        update_clicker_upgrade_cost();
    }

    onMount( () => {action(); mounted = true;} );

    export const getUpgradeCost = () => {
        return $clicker_upgrade_cost;
    }

</script>

<!--html-->
<div style='background-color: red'>
C
</div>
<!--end-html-->

<style>
</style>
