<script>
  export let padding = false;
  import { info_map } from "./stores.js";
</script>

<div class:padded={padding}>
  {#if padding}
    {#each $info_map as juicer}
      {#each Object.keys(juicer) as key}
        <h4>> {key}: {juicer[key]}</h4>
      {/each}
    {/each}
  {/if}
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: black;
    border: 2px solid aliceblue;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  .padded {
    padding: 15px;
    background-color: rgb(18, 16, 16) !important;
  }
  h4 {
    margin: 5px 0 5px 0;
  }
</style>
