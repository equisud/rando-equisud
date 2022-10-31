<script>
  import { getTreck, getTrecks } from "$lib/stores";
  import Trecks from "$lib/Trecks.svelte";

  let trecks = getTrecks();
  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>Equisud riding {year} - Tour Operator</title>
</svelte:head>

<h1>Equisud riding {year} - Tour Operator</h1>
<h2>Future trecks</h2>
<section class="weeks">
  {#each $trecks as treck}
    {#if treck.title && treck.title.toLowerCase() !== 'transhumance' && !treck.old}
      <Trecks {treck} />
    {/if}
  {/each}
</section>
<h2>Past trecks</h2>
<section class="past-treck">
  {#each $trecks as treck}
    {#if treck.title && treck.title.toLowerCase() !== 'transhumance' && treck.old}
      <Trecks {treck} />
    {/if}
  {/each}
</section>
