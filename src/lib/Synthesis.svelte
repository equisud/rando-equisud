<script>
  import { getGenderSummary, getDietSummary, getDoubleBeds } from "$lib/db"

  export let riders

  const dietSummary = getDietSummary(riders)
  const doubleBeds = getDoubleBeds(riders)
  const genderSummary = getGenderSummary(riders)
</script>
<section class="section synthesis">
  <strong class="title synthesis-title">Synthesis :</strong>
  <em>Gender :</em> 
  <ul>
    {#each genderSummary as gender}
      <li>{gender[0]}: {gender[1]}</li>
    {/each}
  </ul>
{#if doubleBeds}
  <em>Hosting :</em>
  <ul>
    <li>Double beds: {doubleBeds}</li>
  </ul>
{/if}
{#if dietSummary.length}
  <em>Diets :</em>
  <ul>
    {#each dietSummary as diet}
      <li>{diet[0]}: {diet[1]}</li>
    {/each}
  </ul>
{/if}
</section>