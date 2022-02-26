<script>
  export let name;
</script>

<main>
  <div class="content">
    <div class="info__container">
      <h1>info container</h1>
    </div>
    <div class="main__container">
      <h1>main container</h1>
    </div>
    <div class="upgrade__container">
      <h1>upgrade container</h1>
    </div>
  </div>
  <!-- end content -->
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
