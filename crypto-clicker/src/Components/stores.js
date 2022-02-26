import { readable, writable } from "svelte/store";

export let score = writable(0.0);

/* UPGRADES */
// Cookie
export let cookie_increment = writable(0.00001);
export let cookie_multiplier = writable(2.0); // makes 100% better
export let cookie_upgrade_cost = writable(0.0005); // costs (0.00050 BTC to upgrade)
let cookie_upgrade_cost_growth_rate = 1.5;
export const update_cookie_upgrade_cost = () => {
  cookie_upgrade_cost.update((n) => n * cookie_upgrade_cost_growth_rate);
};

// Clicker
export let clicker_multiplier = writable(1.5); // makes 50% better
export let clicker_upgrade_cost = writable(0.0005); // costs (0.00050 BTC to upgrade)
let clicker_upgrade_cost_growth_rate = 1.5;
export const update_clicker_upgrade_cost = () => {
  clicker_upgrade_cost.update((n) => n * clicker_upgrade_cost_growth_rate);
};
