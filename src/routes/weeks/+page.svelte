<script>
  import { weeksLoad } from "$lib/stores.js";
  import Week from "$lib/Week.svelte";

  const weeks = $weeksLoad;
  const year = new Date().getFullYear();

  function sortByDate(weeks) {
    return weeks.sort((a, b) => a.dates.departure - b.dates.departure);
  }
</script>

<svelte:head>
  <title>Equisud riding {year} - Tour Operator</title>
</svelte:head>

<h1>Equisud riding {year} - Tour Operator</h1>
<h2>Future weeks</h2>
<section class="future-weeks">
  {#each weeks as week}
    {#if week.title && week.title.toLowerCase() !== 'transhumance' && !week.old}
      <Week {week} />
    {/if}
  {/each}
</section>
<h2>Past weeks</h2>
<section class="past-weeks">
  {#each weeks as week}
    {#if week.title && week.title.toLowerCase() !== 'transhumance' && week.old}
      <Week {week} />
    {/if}
  {/each}
</section>
