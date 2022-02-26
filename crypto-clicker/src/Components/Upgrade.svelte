<script>
    export let target = {name: 'none'};

    const upgrade = () => {
        console.log(target)
        target.buyUpgrade();
    }

</script>

<!--html-->
<button on:click={upgrade}>
    Buy {target.name} Upgrade 
    <slot></slot>
</button>
<!--end-html-->

<style>

</style>
