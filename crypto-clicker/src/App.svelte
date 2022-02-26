<script>
  import Container from "./Components/Container.svelte";

  export let name;
</script>

<div class="title">
  <h1>Crypto Clicker</h1>
  <h4>Nathan Inbar && Justin Stitt</h4>
</div>
<div class="content">
  <Container title="info" grow={1} />
  <Container title="main" grow={2} />
  <Container title="upgrade" grow={1} />
</div>

<!-- end content -->
<style>
  .title {
    margin: var(--global_margin);
    color: antiquewhite;
  }

  .title > h1 {
    font-family: "Blade Runner Movie Font";
    margin-bottom: -20px;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
