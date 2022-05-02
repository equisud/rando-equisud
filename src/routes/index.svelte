<script>
  import { getTrecks } from "../stores";
  import TreckTour from "$lib/TreckTour.svelte";

  let trecks = getTrecks();
</script>

<style>
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }
</style>

<svelte:head>
  <title>Equisud riding 2022 - Tour Operator</title>
</svelte:head>

<a href="/chateau">admin</a>

<h1>Equisud riding 2022 - Tour Operator</h1>

<section>
  <div class="grid">
    {#each $trecks as treck}
      <TreckTour {treck} />
    {/each}
  </div>
</section>
