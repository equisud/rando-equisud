<script>
  import { getTrecks } from "../stores";
  import TreckTour from "$lib/TreckTour.svelte";

  let trecks = getTrecks();

  const year = new Date().getFullYear();
</script>

<style>
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }
</style>

<svelte:head>
  <title>Equisud riding {year} - Tour Operator</title>
</svelte:head>

<a href="/chateau">.</a>

<h1>Equisud riding {year} - Tour Operator</h1>

<section>
  <div class="grid">
    {#each $trecks as treck}
      <TreckTour {treck} />
    {/each}
  </div>
</section>
