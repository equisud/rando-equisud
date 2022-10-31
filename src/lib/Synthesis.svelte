<script>
  import { getGenderSummary, getDietSummary, getDoubleBeds } from "$lib/db"

  export let riders

  const dietSummary = getDietSummary(riders)
  const doubleBeds = getDoubleBeds(riders)
  const genderSummary = getGenderSummary(riders)
</script>

<ul>
  {#each genderSummary as gender}
    <li>{gender[0]}: {gender[1]}</li>
  {/each}
</ul>
{#if doubleBeds}
  <strong>Hosting</strong>
  <ul>
    <li>Double beds: {doubleBeds}</li>
  </ul>
{/if}
{#if dietSummary.length}
  <strong>Diets</strong>
  <ul>
    {#each dietSummary as diet}
      <li>{diet[0]}: {diet[1]}</li>
    {/each}
  </ul>
{/if}