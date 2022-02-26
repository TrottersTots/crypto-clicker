import { readable, writable } from "svelte/store";

export let score = writable(74.9999);

/* UPGRADES */

export let cost_multiplier = writable(1.02);

export let multipliers = writable(
    {'Clicker': 1.05,
    'Robot01': 1.10,
    'Robot02': 1.12,
    'Cookie': 1.15,
    'GPU': 1.08,
},);

export let costs = writable(
    {'Clicker': 0.0002,
    'Robot01': 0.0350,
    'Robot02': 0.1150,
    'Cookie': 0.0005,
    'GPU': 0.0155,
},);

export let upgrade_costs = writable(
    {'Clicker': 0.0025,
    'Robot01': 0.0150,
    'Robot02': 0.0450,
    'Cookie': 0.0015,
    'GPU': 0.0075,
},);

export let increments = writable(
    {'Clicker': 0.00001,
    'Robot01': 0.00010,
    'Robot02': 0.00100,
    'Cookie': 0.00001,
    'GPU': 0.00006,
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
  