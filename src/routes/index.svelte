<script>
  import { getTrecks } from "../stores";
  import TreckTour from "$lib/TreckTour.svelte";

  let trecks = getTrecks();

  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>Equisud riding {year} - Tour Operator</title>
</svelte:head>

<a href="/chateau">.</a>
<h1>Equisud riding {year} - Tour Operator</h1>
<h2>Future trecks</h2>
<section class="weeks">
  {#each $trecks as treck}
    {#if treck.title && treck.title.toLowerCase() !== 'transhumance' && !treck.old}
      <TreckTour {treck} />
    {/if}
  {/each}
</section>
<h2>Past trecks</h2>
<section class="past-treck">
  {#each $trecks as treck}
    {#if treck.title && treck.title.toLowerCase() !== 'transhumance' && treck.old}
      <TreckTour {treck} />
    {/if}
  {/each}
</section>
