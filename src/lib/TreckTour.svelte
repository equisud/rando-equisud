<script>
  import { getCountrySummary, countBooking, countOption } from "../db";
  import Riders from "$lib/Riders.svelte";
  export let treck;
</script>

{#if treck.title.toLowerCase() !== 'transhumance'}
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
{/if}
