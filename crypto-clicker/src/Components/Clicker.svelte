<script>
    import { onMount } from 'svelte';
    import { score, increments, costs, multipliers } from './stores.js';
    export let speed = 1;
    export const name = 'Clicker'

    let clicker; // to bind
    let mounted = false;

    const action = () => {
        $score += increment
        setTimeout(action, 1000/speed);
    }

    onMount( () => {action(); mounted = true;} );

    $: increment = $increments[name];

</script>

<!--html-->
<div style='background-color: red'>
</div>
<!--end-html-->

<style>
</style>
