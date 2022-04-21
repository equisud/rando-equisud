<script>
  import Riders from "$lib/Riders.svelte";
  export let treck;

  const countrySummary = getCountrySummary(treck.riders);

  function getCountrySummary(riders) {
    if (!riders) return [];

    const summary = {};

    for (const rider of riders.map(rider => rider.country)) {
      if (summary[rider]) {
        summary[rider] += 1;
      } else {
        summary[rider] = 1;
      }
    }

    return Object.entries(summary);
  }
</script>

<article>
  <header>
    <h4>{treck.period || '?'}</h4>
    <h6>{treck.title || '?'}</h6>
  </header>
  <h6>Countries</h6>
  <ul>
    {#each countrySummary as country}
      <li>{country[0]}: {country[1]}</li>
    {/each}
  </ul>
</article>
