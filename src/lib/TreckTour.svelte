<script>
  import Riders from "$lib/Riders.svelte";
  export let treck;

  function getCountrySummary(riders) {
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

  const countBooking = riders =>
    +riders.filter(rider => rider.status === "booking").length;

  const countOption = riders =>
    +riders.filter(rider => rider.status === "option").length;
</script>

<article>
  <header>
    <h4>{treck.period || '?'}</h4>
    <h6>{treck.title || '?'}</h6>
  </header>
  {#if treck.riders}
    <strong>Booking</strong>
    <ul>
      <li>Booking: {countBooking(treck.riders)}</li>
      <li>Option: {countOption(treck.riders)}</li>
      <li>
        Free: {8 - (countOption(treck.riders) + countBooking(treck.riders))}
      </li>
    </ul>
    <strong>Countries</strong>
    <ul>
      {#each getCountrySummary(treck.riders) as country}
        <li>{country[0]}: {country[1]}</li>
      {/each}
    </ul>
  {/if}
</article>
