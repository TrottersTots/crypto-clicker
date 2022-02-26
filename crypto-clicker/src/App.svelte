<script>
  import Container from "./Components/Container.svelte";

  import Cookie from "./Components/Cookie.svelte";
  import Clicker from "./Components/Clicker.svelte";
  import ClickerJuicer from "./Components/ClickerJuicer.svelte";

  import Upgrade from "./Components/Upgrade.svelte";

  import { score, costs, increments } from "./Components/stores.js";

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

  // [`Cookie Increment: ${$cookie_increment}`, ]
  let info_map = [
    {
      "Cookie Increment": $increments['Cookie'],
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
      <div class="space">
        <div class=" space_content space__dust" />
        <div class="space_content space__stars" />
        <div class="space_content space__planet" />
      </div>
    </InfoJuicer>
  </Container>
  <Container title="main" grow={2} >
  <h2 class='score ominous-hover-no-rotate per-click' style='font-size: 40px'>{$score.toFixed(5)} ₿</h2>
    <Cookie bind:this={cookie} />
    <h3 class='per-click ominous-hover-no-rotate'>{$increments['Cookie'].toFixed(5)} ₿/click</h3>
    <button on:click={addClicker}> Add Clicker </button>
    {#each clickers as _clicker}
      <Clicker bind:this={clicker} />
    {/each}
  </Container>
  <Container title="Miners" grow={1}>
    <ClickerJuicer 
      len={clickers.length}
      on:buy={add}
      name='Clicker' 
      description='An extra mouse to click for you'
      img='/assets/btc_w_cursor.png'
    />
    <ClickerJuicer 
    len={robot01s.length}
    on:buy={add} 
    name='Robot01' 
    description='This Bitcoin mining robot will harvest Bitcoin for you'/>
    <ClickerJuicer 
    len={robot02s.length}
    on:buy={add} 
    name='Robot02' 
    description='This Bitcoin mining robot02 will harvest Bitcoin for you'/>
    
    <h1>Upgrades</h1>
    <div class='upgrades'>
      <Upgrade name={'Cookie'} img='/assets/btc_w_cursor_plus.png'/>
      <Upgrade name={'Clicker'} img='/assets/btc_w_cursor_plus.png'/>
      <Upgrade name={'Robot01'} img='/assets/btc_w_cursor_plus.png'/>
      <Upgrade name={'Robot02'} img='/assets/btc_w_cursor_plus.png'/>
    </div>
  </Container>
</div>

<div class="footer">
  <h4>Nathan Inbar && Justin Stitt</h4>
</div>

<!-- end content -->
<style>
  .score {
    margin-bottom: 0px;
    margin-top: 5px;
  }
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

  .per-click {
    color: antiquewhite;
    text-shadow: 2px 2px #000;
  }

  .space {
    width: 180px;
    height: 180px;
    background-color: aqua;
  }
  .space_content {
    position: absolute;
    width: inherit;
    height: inherit;
  }
  .space__dust {
    background-image: url("/assets/dust/1.png");
  }
  .space__stars {
    background-image: url("/assets/stars/stars_1_1.png");
  }
  .space__planet {
    background-image: url("/assets/planets/1.gif");
    background-repeat: no-repeat;
    background-size: auto;
    position: relative;
    translate: 40px 40px;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    align-items: left;
    margin-bottom: 20px;
  }

</style>
