import { readable, writable } from "svelte/store";

export let score = writable(0.0);

/* UPGRADES */

export let cost_multiplier = writable(1.10);

export let multipliers = writable(
    {'Clicker': 1.06,
    'Robot01': 1.11,
    'Robot02': 1.13,
    'Cookie': 1.4,
    'GPU': 1.09,
},);

export let costs = writable(
    {'Clicker': 0.0002,
    'Robot01': 0.0350,
    'Robot02': 0.1150,
    'Cookie': 0.0005,
    'GPU': 0.0155,
},);

export let upgrade_costs = writable(
    {'Cookie': 0.00025,
    'Robot01': 0.0150,
    'Robot02': 0.0450,
    'Clicker': 0.0015,
    'GPU': 0.0075,
},);

export let increments = writable(
    {'Cookie': 0.00001,
    'Clicker': 0.00002,
    'Robot01': 0.00025,
    'Robot02': 0.00200,
    'GPU': 0.00012,
},);

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
  