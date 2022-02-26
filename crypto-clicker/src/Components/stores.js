import { readable, writable } from "svelte/store";

export let score = writable(74.9999);

/* UPGRADES */
// Cookie
export let cookie_increment = writable(0.00001);
export let cookie_multiplier = writable(2.0); // makes 20% better
export let cookie_upgrade_cost = writable(0.0005); // costs (0.00050 BTC to upgrade)
let cookie_upgrade_cost_growth_rate = 2.5;
export const update_cookie_upgrade_cost = () => {
  cookie_upgrade_cost.update((n) => n * cookie_upgrade_cost_growth_rate);
};
export let total_cookies = writable(1);

// Clickers
export let clicker_cost = writable(0.0005); // cost to buy a clicker
export let clicker_multiplier = writable(1.5); // makes 50% better
export let clicker_upgrade_cost = writable(0.0005); // costs (0.00050 BTC to upgrade)
let clicker_upgrade_cost_growth_rate = 2.0;
export const update_clicker_upgrade_cost = () => {
  clicker_upgrade_cost.update((n) => n * clicker_upgrade_cost_growth_rate);
};
export let total_clickers = writable(0);

export let cost_multiplier = writable(1.8);

export let multipliers = writable({
  Clicker: 1.5,
  Robot01: 2.5,
  Robot02: 3.5,
  Cookie: 1.5,
});

export let costs = writable({
  Clicker: 0.0002,
  Robot01: 0.005,
  Robot02: 0.015,
  Cookie: 0.0005,
});

export let upgrade_costs = writable({
  Clicker: 0.0025,
  Robot01: 0.015,
  Robot02: 0.045,
  Cookie: 0.0015,
});

export let increments = writable({
  Clicker: 0.00001,
  Robot01: 0.0001,
  Robot02: 0.001,
  Cookie: 0.00001,
});

// info
export let info_map = writable([
  {
    Stage: "Planet",
    "C02 Emissions": "543 lbs/sec",
    Atmosphere: "Normal",
    "Flora/Fauna": "Normal",
    Civilization: "Functional",
  },
]);
