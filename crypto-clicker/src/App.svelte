<script>
  import Container from "./Components/Container.svelte";

  import Cookie from "./Components/Cookie.svelte";
  import Clicker from "./Components/Clicker.svelte";
  import ClickerJuicer from "./Components/ClickerJuicer.svelte";

  import Upgrade from "./Components/Upgrade.svelte";

  import { score, costs } from "./Components/stores.js";
  import { cookie_increment } from "./Components/stores.js";

  import InfoJuicer from "./Components/InfoJuicer.svelte";

  let cookie;
  let clicker;
	let clickers = Array(0);
	let robot01s = Array(0);
	let robot02s = Array(0);


  const add = (event) => {
    var n = event.detail.name;
    if ($costs[n] > $score) {
      console.log($costs[n], ' ', $score)
      return;
    }
    $score -= $costs[n];
    if (n == 'Clicker') {
      addClicker()
    }
    else if (n == 'Robot01') {
      addRobot01()
    }
    else if (n == 'Robot02') {
      addRobot02()
    }
  }

  console.log($cookie_increment);
  // [`Cookie Increment: ${$cookie_increment}`, ]
  let info_map = [
    {
      "Cookie Increment": $cookie_increment,
      "Current Clickers": 0,
      "BTC per second": 0,
    },
  ];

  const addClicker = () => {
    clickers += [0];
  };

  const addRobot01 = () => {
    robot01s += [0];
  };

  const addRobot02 = () => {
    robot02s += [0];
  };

</script>

<div class="title">
  <h1 class="glitchy">Crypto Clicker</h1>
  <h1 class="glitchy">Crypto Clicker</h1>
  <h1 class="glitchy">Crypto Clicker</h1>
</div>

<div class="content">
  <Container title="data" grow={1}>
    <InfoJuicer {info_map} />
    <InfoJuicer>
      <h4>hello world</h4>
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
  <Container title="Miners" grow={1}>
    <ClickerJuicer 
      on:buy={add}
      name='Clicker' 
      description='An extra mouse to click for you'
      img='/assets/btc_w_cursor.png'
    />
    <ClickerJuicer on:buy={add} name='Robot01' description='This Bitcoin mining robot will harvest Bitcoin for you'/>
    <ClickerJuicer on:buy={add} name='Robot02' description='This Bitcoin mining robot02 will harvest Bitcoin for you'/>
    
    <h1>Upgrades</h1>
    <div class='upgrades'>
      <Upgrade target={cookie} name={'Cookie'}/>
      <Upgrade target={clicker} name={'Clicker'}/>
    </div>
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
  .footer {
    color: antiquewhite;
    margin-top: -20px;
    margin-left: var(--global_margin);
  }

  @media only screen and (max-width: 600px) {
    .content {
      flex-direction: column;
    }
    .title {
      text-align: center;
    }
    .footer {
      font-size: 10px;
      margin-top: 3px;
    }
  }

  .upgrades{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
  }

</style>
