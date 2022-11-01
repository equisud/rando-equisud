<script>
  import { getTreck, getTrecks } from "$lib/stores"
  import Week from "$lib/Week.svelte"

  let trecks = getTrecks();
  const year = new Date().getFullYear()
</script>

<svelte:head>
  <title>Equisud riding {year} - Tour Operator</title>
</svelte:head>

<h1>Equisud riding {year} - Tour Operator</h1>
<h2>Future weeks</h2>
<section class="future-weeks">
  {#each $trecks as treck}
    {#if treck.title && treck.title.toLowerCase() !== 'transhumance' && !treck.old}
      <Week {treck} />
    {/if}
  {/each}
</section>
<h2>Past weeks</h2>
<section class="past-weeks">
  {#each $trecks as treck}
    {#if treck.title && treck.title.toLowerCase() !== 'transhumance' && treck.old}
      <Week {treck} />
    {/if}
  {/each}
</section>
