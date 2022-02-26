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
  let gpus = Array(0);


  const add = (event) => {
    var n = event.detail.name;
    if ($costs[n] > $score) {
      console.log($costs[n], " ", $score);
      return;
    }
    $score -= $costs[n];
    if (n == "Clicker") {
      addClicker();
    } else if (n == "Robot01") {
      addRobot01();
    } else if (n == "Robot02") {
      addRobot02();
    }
    else if (n == 'Robot02') {
      addRobot02()
    }
    else if (n == 'GPU') {
      addGPU()
    }
  }

  // [`Cookie Increment: ${$cookie_increment}`, ]
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
    const updatePlanet = (planetID) => {
      if (planet > planetID) {
        return;
      }
      planet = planetID;
    };
    switch (true) {
      case score >= 10000:
        updatePlanet(8);
        break;
      case score >= 5000:
        updatePlanet(7);
        break;
      case score >= 2500:
        updatePlanet(6);
        break;
      case score >= 1250:
        updatePlanet(5);
        break;
      case score >= 625:
        updatePlanet(4);
        break;
      case score >= 312:
        updatePlanet(3);
        break;
      case score >= 156:
        updatePlanet(2);
        break;
      case score >= 75:
        updatePlanet(1);
        break;
      default:
        updatePlanet(0);
    }
  };

  $: {
    updateSpaceScene($score);
  }

  const addClicker = () => {
    clickers = [...clickers, 0]
  };
  setDust();
  setStars();

  const addRobot01 = () => {
    robot01s = [...robot01s, 0];
  };

  const addRobot02 = () => {
    robot02s = [...robot02s, 0];
  };

  const addGPU = () => {
    gpus = [...gpus, 0];
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
    <Container title="main" grow={2} show_title={false} >
      <h2 class='score ominous-hover-no-rotate per-click' style='font-size: 40px'>{$score.toFixed(5)} ₿</h2>
      <Cookie bind:this={cookie} />
      <h3 class='per-click ominous-hover-no-rotate'>{$increments['Cookie'].toFixed(5)} ₿/click</h3>
    </Container>
  <Container title="[miners]" grow={1}>
    <div class='scroll'>
      <ClickerJuicer 
      len={clickers.length}
      on:buy={add}
      name='Clicker' 
      description='An extra mouse to click for you'
      img='/assets/btc_w_cursor.png'
      display_name={'Clicker'}
      />
      <ClickerJuicer 
      len={gpus.length}
      on:buy={add}
      name='GPU' 
      description='A NoVidia graphics card to mine Bitcoin'
      img='/assets/gpu.gif'
      display_name={'GPU'}
      />
      <ClickerJuicer 
      len={robot01s.length}
      on:buy={add} 
      name='Robot01' 
      description='This Bitcoin mining robot will harvest Bitcoin for you'
    img='/assets/robot_1.gif'
    display_name={'Crypto Bot'}
    />
    <ClickerJuicer 
    len={robot02s.length}
    on:buy={add} 
    name='Robot02' 
    description='This Bitcoin mining robot02 will harvest Bitcoin for you'
    img='/assets/robot_2.gif'
    display_name={'Crypto Drone'}
    />
    </div>
    
    <h1>[upgrades]</h1>
    <div class='upgrades'>
      <Upgrade name={'Cookie'} img='/assets/btc_w_cursor_plus.png'/>
      <Upgrade name={'Clicker'} img='/assets/cursor_plus.png'/>
      <Upgrade name={'Robot01'} img='/assets/robot1_plus.png'/>
      <Upgrade name={'Robot02'} img='/assets/robot2_plus.png'/>
    </div>
  </Container>
  {#each clickers as c}
    <Clicker name = {'Clicker'}/>
  {/each}
  {#each robot01s as c}
    <Clicker name = {'Robot01'} />
  {/each}
  {#each robot02s as c}
    <Clicker name = {'Robot02'}/>
  {/each}
  {#each gpus as c}
    <Clicker name = {'GPU'}/>
  {/each}
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

  .main {
    justify-self: center;
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

  .upgrades{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    align-items: left;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 620px) {
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
    .upgrades {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .upgrades {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: left;
    margin-bottom: 20px;
  }
  
  .scroll {
    max-width: 330px;
    min-height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    height:30%;
  }
</style>
