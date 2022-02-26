<script>
	import Cookie from "./Components/Cookie.svelte";
	import Clicker from "./Components/Clicker.svelte";
	import Upgrade from "./Components/Upgrade.svelte";

	import { score } from "./Components/stores.js";

	let cookie;
	let clickers = Array(0);

	const addClicker = () => {
		clickers += [0];
	}

</script>

<main>
	<h1>Crypto Clicker</h1>
	<h2>{$score.toFixed(5)} : BTC</h2>
	<Cookie bind:this={cookie}/>
	<Upgrade target={cookie}/>
	<button on:click={addClicker}>
		Add Clicker
	</button>
	{#each clickers as clicker}
		<Clicker/>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>