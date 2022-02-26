import { readable, writable } from 'svelte/store';

export let score = writable(0.0);


/* UPGRADES */
export let cookie_multiplier = writable(1.05); // makes 5% better
export let cookie_upgrade_cost = writable(0.00050); // costs (0.00050 BTC to upgrade)
let cookie_upgrade_cost_growth_rate = 1.1;
export const update_cookie_upgrade_cost = () => {
    cookie_upgrade_cost.update(n=>n*cookie_upgrade_cost_growth_rate);
}

export let clicker_multiplier = writable(1.05); // makes 5% better
