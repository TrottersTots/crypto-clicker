<script>
  export let title;
  export let grow;
</script>

<div style={`flex-grow: ${grow}`}>
  <h1>{title} container</h1>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(46, 77, 72, 0.6);
    margin: var(--global_margin);
  }
  div > h1 {
  }
</style>
