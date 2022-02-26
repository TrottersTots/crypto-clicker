<script>
  import Container from "./Components/Container.svelte";

  import Cookie from "./Components/Cookie.svelte";
  import Clicker from "./Components/Clicker.svelte";
  import Upgrade from "./Components/Upgrade.svelte";

  import { score } from "./Components/stores.js";
  import { cookie_increment } from "./Components/stores.js";

  import InfoJuicer from "./Components/InfoJuicer.svelte";

  let cookie;
  let clicker;
  let clickers = Array(0);

  let info_map = [
    {
      Stage: "Planet",
      Atmosphere: "Normal",
      "Flora/Fauna": "Normal",
      Civilization: "Functional",
    },
  ];

  const addClicker = () => {
    clickers += [0];
  };
</script>

<div class="title">
  <h1 class="glitchy">Crypto Clicker</h1>
  <h1 class="glitchy">Crypto Clicker</h1>
  <h1 class="glitchy">Crypto Clicker</h1>
</div>

<div class="content">
  <Container title="[eco footprint]" grow={1}>
    <InfoJuicer {info_map} padding={true} />
    <InfoJuicer>
      <div class="space">
        <div class=" space_content space__dust" />
        <div class="space_content space__stars" />
        <div class="space_content space__planet" />
      </div>
    </InfoJuicer>
  </Container>
  <Container title="main" grow={2}>
    <Cookie bind:this={cookie} />
    <h2>{$score.toFixed(5)} : BTC</h2>

    <button on:click={addClicker}> Add Clicker </button>
    {#each clickers as _clicker}
      <Clicker bind:this={clicker} />
    {/each}
  </Container>
  <Container title="upgrade" grow={1}>
    <Upgrade target={cookie} name={"Cookie"} />
    <Upgrade target={clicker} name={"Clicker"} />
  </Container>
</div>

<div class="footer">
  <h4>Nathan Inbar && Justin Stitt</h4>
</div>

<!-- end content -->
<style>
  .title {
    margin-top: 50px;
    margin-bottom: 15px;
    margin-left: var(--global-margin);
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .space {
    width: 300px;
    height: 300px;
    background-color: magenta;
  }
  .space_content {
    position: absolute;
    width: inherit;
    height: inherit;
  }
  .space__dust {
    background-image: url("/assets/dust/1.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
  .space__stars {
    background-image: url("/assets/stars/stars_1_1.png");
  }
  .space__planet {
    background-image: url("/assets/planets/0.gif");
    background-repeat: no-repeat;
    translate: 50% 50%;
    transform: scale(1.5);
  }

  .footer {
    color: antiquewhite;
    margin-top: -20px;
    margin-left: var(--global_margin);
  }
</style>
