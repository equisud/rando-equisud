<script>
  import { getCountrySummary, countBooked, countOption } from "../db";
  import Riders from "$lib/Riders.svelte";
  export let treck;
</script>

<style>
  h3 {
    color: gray;
    text-decoration: underline;
  }
</style>

<article>
  <header
    class={treck.title && treck.title.includes('No trail') ? 'no-trail' : ''}>
    <h4>{treck.period || '?'}</h4>
    <h4>{treck.title || '?'}</h4>
  </header>

  <body>
    {#if treck.riders}
      <h3>Riders</h3>
      <strong>Booked</strong>
      <ul>
        <li>Booked: {countBooked(treck.riders)}</li>
        <li>Option: {countOption(treck.riders)}</li>
        <li>
          <strong>
            Available: {8 - (countOption(treck.riders) + countBooked(treck.riders))}
          </strong>
        </li>
      </ul>
      <strong>Origin</strong>
      <ul>
        {#each getCountrySummary(treck.riders) as country}
          <li>{country[0]}: {country[1]}</li>
        {/each}
      </ul>
    {/if}
    {#if treck.stationaries}
      <h3>Stationaries</h3>
    {/if}
  </body>
</article>
