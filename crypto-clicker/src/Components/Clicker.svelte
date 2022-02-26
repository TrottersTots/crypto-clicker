<script>
    import { onMount } from 'svelte';
    import { score } from './stores.js';


    export let increment = 0.00001;
    export let speed = 1;
    // export let img_path= '';

    let clicker; // to bind
    let mounted = false;

    const action = () => {
        $score += increment;
        setTimeout(action, 1000/speed);
    }

    onMount( () => {action(); mounted = true;} );

</script>

<!--html-->
<div style='background-color: red'>
C
</div>
<!--end-html-->

<style>

</style>
