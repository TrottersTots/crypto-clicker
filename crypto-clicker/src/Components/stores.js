import { readable, writable } from "svelte/store";

export let score = writable(74.9);

/* UPGRADES */



export let cost_multiplier = writable(1.8);

export let multipliers = writable(
    {'Clicker': 1.50,
    'Robot01': 2.50,
    'Robot02': 3.50,
    'Cookie': 1.50,
},);

export let costs = writable(
    {'Clicker': 0.0002,
    'Robot01': 0.0050,
    'Robot02': 0.0150,
    'Cookie': 0.0005,
},);

export let upgrade_costs = writable(
    {'Clicker': 0.0025,
    'Robot01': 0.0150,
    'Robot02': 0.0450,
    'Cookie': 0.0015,
},);

export let increments = writable(
    {'Clicker': 0.00001,
    'Robot01': 0.00010,
    'Robot02': 0.00100,
    'Cookie': 0.00001,
},);
