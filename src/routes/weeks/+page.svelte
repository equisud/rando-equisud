<script>
  import Week from "$lib/Week.svelte";
  export let data;

  const weeks = data.post.weeks;

  function sortByDate(weeks) {
    return weeks.sort((a, b) => a.dates.departure - b.dates.departure);
  }
</script>

<svelte:head>
  <title>Equisud riding 2026 - Tour Operator</title>
</svelte:head>

<h1>Equisud riding 2026 - Tour Operator</h1>
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
