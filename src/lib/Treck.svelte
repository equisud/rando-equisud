<script>
  import { getGenderSummary, getDietSummary } from "../db";
  import Riders from "$lib/Riders.svelte";
  export let treck;
</script>

<article>
  <header>
    <h4>{treck.period || '?'}</h4>
    <h6>{treck.title || '?'}</h6>
  </header>
  {#if treck.riders}
    <strong>Genders</strong>
    <ul>
      {#each getGenderSummary(treck.riders) as gender}
        <li>{gender[0]}: {gender[1]}</li>
      {/each}
    </ul>
    <strong>Diets</strong>
    <ul>
      {#each getDietSummary(treck.riders) as diet}
        <li>{diet[0]}: {diet[1]}</li>
      {/each}
    </ul>
  {/if}
  <Riders riders={treck.riders} />
</article>
