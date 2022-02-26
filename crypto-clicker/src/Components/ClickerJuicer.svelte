<script>
    import { createEventDispatcher } from 'svelte';
    import { costs } from "./stores.js";

    const dispatch = createEventDispatcher()

    import { slide } from "svelte/transition"
    export let name = 'Name';
    export let description = 'Lorem ipsum dolor sit amet...';
    export let img = '/assets/robot_1.gif'
    let cost = 0.0;
    let me;

    const buy = () => {
        dispatch('buy', {
            'name': name,
            'amount': 1,
        })
    }
    $: cost = $costs[name]
</script>

<!--html-->
<button on:click={buy}>
    <div class='container' transition:slide>
        <img class='gif' alt={name} src={img} draggable='false'/>
        <div class='text'>
            <p class='name'>
                {name}
            </p>
            <p class='description'>
                {description}
            </p>
        </div>
        <div class='btc'>
            <div class="cost">
                <h3>-{cost}₿</h3>
            </div>
            <div class="income">
                <h3>+0.004₿/s</h3>
            </div>
        </div>
    </div>
</button>
<!--end-html-->

<style>
    .container {
        background-color: rgb(24, 22, 22);
        border-radius: 10px;
        border: 2px solid aliceblue;
        display: flex;
        flex-direction: row;
        min-width: 300px;
        max-height: 100px;
        max-width: 300px;
        max-height: 100px;
        margin-left: 5px;
        margin-right: 5px;
    }

    .btc {
        font-size: 8px;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
    }

    .income {
        color: green;
        margin-left: 25px;
        text-align: left;

    }
    
    .cost {
        color: red;
        margin-left: 25px;
        margin-top: 10px;
        text-align: center;

    }

    .gif {
        max-width: 100px;
        max-height: 100px;
        transform: scale(.65);
    }


    .container:hover {
        box-shadow: 5px 5px 10px 5px rgb(35, 36, 35);
    }

    .container:active {
        box-shadow: 5px 5px 13px 6px rgb(20, 20, 20);
    }

    .text {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: 8px;
    }

    .name {
        color: aliceblue;
        font-weight: 600;
        text-align: left;
        margin-bottom: 0;
    }

    .description {
        color: rgb(171, 174, 177);
        font-weight: 200;
        text-align: left;
        margin-top: 3px;
        font-size: 10px;
    }

    button {
        background: none;
        border-radius: 25px;
        border: none;
    }

    button:hover {
        transform: scale(1.03) translateX(-2px) translateY(-2px);
    }

    button:active {
        transform: scale(1.06) translateX(-5px) translateY(-5px);
    }
</style>
