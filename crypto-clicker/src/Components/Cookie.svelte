<script>
  import { score } from "./stores.js";
  import { cookie_multiplier } from "./stores.js";
  import { cookie_upgrade_cost } from "./stores.js";
  import { update_cookie_upgrade_cost } from "./stores.js";

  export const name = "Cookie";

    let increment = .00001;
    let img_path = '/assets/btc_01.png'
    
    export const buyUpgrade = () => {
        if ($score < $cookie_upgrade_cost) {
            return;
        }
        $score -= $cookie_upgrade_cost;
        increment *= $cookie_multiplier;
        update_cookie_upgrade_cost();
    }

    export const getUpgradeCost = () => {
        return $cookie_upgrade_cost;
    }
    $score -= $cookie_upgrade_cost;
    increment *= $cookie_multiplier;
    update_cookie_upgrade_cost();
  };

  export const getUpgradeCost = () => {
    return $cookie_upgrade_cost;
  };
</script>

<!--html-->
<button
  on:click={() => {
    $score += increment;
  }}
>
  <img class="ominous-hover" alt="btc" src={img_path} draggable="false" />
</button>
<h2>Current Clicker Increment: {increment}</h2>
<!-- <button on:click={buyUpgrade}>Clicker Upgrade {$cookie_upgrade_cost}</button> -->

<!--end-html-->
<style>
  button {
    background: none;
    border: none;
  }

  button:hover {
    transform: scale(1.08);
  }

  button:active {
    transform: scale(1.2);

    background: none;
    border: none;

    filter: drop-shadow(0 0 20px #424242) hue-rotate(12deg) contrast(110%);
    /* invert(75%); */
  }

  .ominous-hover {
    animation: float 4s ease-in-out infinite;
    /* text-shadow: 4px 4px #5c1515; */
    text-shadow: 0px 1px aliceblue, 5px 5px 5px rgba(140, 148, 160, 0.479);
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) rotateZ(-1deg);
    }
    25% {
      transform: translate(0, 5px) rotateZ(0);
    }
    50% {
      transform: translate(0, 0) rotateZ(1deg);
    }
    75% {
      transform: translate(0, 5px) rotateZ(0);
    }
    100% {
      transform: translate(0, 0) rotateZ(-1deg);
    }
  }
</style>
