<script>
  export let info_map = [];
</script>

<div>
  {#each info_map as juicer}
    {#each Object.keys(juicer) as key}
      <h4>{key}: {juicer[key]}</h4>
    {/each}
  {/each}
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: black;
    border: 2px solid magenta;
    margin-bottom: 20px;
  }
  h4 {
    margin: 5px 0 5px 0;
  }
</style>
