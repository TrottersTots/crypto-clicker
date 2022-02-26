<script>
  import Container from "./Components/Container.svelte";

	import Cookie from "./Components/Cookie.svelte";
	import Clicker from "./Components/Clicker.svelte";
	import Upgrade from "./Components/Upgrade.svelte";

	import { score } from "./Components/stores.js";

	let cookie;
	let clickers = Array(0);

	const addClicker = () => {
		clickers += [0];
	}

</script>


<div class="title">
  <h1>Crypto Clicker</h1>
</div>

<div class="content">
  <Container title="info" grow={1} />
  <Container title="main" grow={2}>
    <Cookie bind:this={cookie}/>
	  <h2>{$score.toFixed(5)} : BTC</h2>
	
    <button on:click={addClicker}>
      Add Clicker
    </button>
    {#each clickers as clicker}
      <Clicker/>
    {/each}
  </Container>
  <Container title="upgrade" grow={1}>
    <Upgrade target={cookie}/>
  </Container>
</div>

<div class='footer'>
  <h4>Nathan Inbar && Justin Stitt</h4>
</div>

<!-- end content -->
<style>
  .title {
    margin: var(--global_margin);
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
