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
  // -
  let planet = 0;
  let dust = 0;
  let stars = 0;

  let info_map = [
    {
      Stage: "Planet",
      "C02 Emissions": "500T lbs/s",
      Atmosphere: "Normal",
      "Flora/Fauna": "Normal",
      Civilization: "Functional",
    },
  ];

  const setDust = () => {
    dust = Math.floor(Math.random() * 3);
    setTimeout(setDust, 20000);
  };
  const setStars = () => {
    stars = Math.floor(Math.random() * 8);
    setTimeout(setStars, 11000);
  };

  const updateSpaceScene = (score) => {
    //update planet based on score
    switch (true) {
      case score >= 10000:
        planet = 8;
        break;
      case score >= 5000:
        planet = 7;
        break;
      case score >= 2500:
        planet = 6;
        break;
      case score >= 1250:
        planet = 5;
        break;
      case score >= 625:
        planet = 4;
        break;
      case score >= 312:
        planet = 3;
        break;
      case score >= 156:
        planet = 2;
        break;
      case score >= 75:
        planet = 1;
        break;
      default:
        planet = 0;
    }
  };

  $: {
    updateSpaceScene($score);
  }

  const addClicker = () => {
    clickers += [0];
  };
  setDust();
  setStars();
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
        <div
          class=" space_content space__dust"
          style={`background-image: url("/assets/dust/${dust}.png")`}
        />
        <div
          class="space_content space__stars"
          style={`background-image: url("/assets/stars/${stars}.png")`}
        />
        <div
          class="space_content space__planet"
          style={`background-image: url("/assets/planets/${planet}.gif")`}
        />
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
    background-color: black;
  }
  .space_content {
    position: absolute;
    width: inherit;
    height: inherit;
  }
  .space__dust {
    background-repeat: no-repeat;
    background-size: contain;
  }
  .space__stars {
  }
  .space__planet {
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
