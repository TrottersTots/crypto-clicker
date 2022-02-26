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
    background-color: rgba(54, 212, 191, 0.8);
    margin: var(--global_margin);
  }
  div > h1 {
  }
</style>
