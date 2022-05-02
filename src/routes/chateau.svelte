<script>
  import { getTrecks } from "../stores";
  import Treck from "$lib/Treck.svelte";

  let trecks = getTrecks();

  const year = new Date().getFullYear();
</script>

<style>
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }
</style>

<svelte:head>
  <title>Equisud riding {year}</title>
</svelte:head>
<a href="/">home</a>
<h1>Equisud riding {year}</h1>

<section>
  <div class="grid">
    {#each $trecks as treck}
      <Treck {treck} />
    {/each}
  </div>
</section>
