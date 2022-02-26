<script>
  export let title;
  export let grow;
</script>

<div style={`flex-grow: ${grow}`}>
  <h1>{title} container</h1>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: moccasin;
    border: 1px solid brown;
    margin: var(--global_margin);
  }
</style>
