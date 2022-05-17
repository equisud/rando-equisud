<script>
  import { getGenderSummary, getDietSummary, getDoubleBeds } from "../db";
  export let riders;
  const ridersForceArray = Array.isArray(riders) ? riders : [];

  const dietSummary = getDietSummary(ridersForceArray);
  const doubleBeds = getDoubleBeds(ridersForceArray);
  const genderSummary = getGenderSummary(ridersForceArray);
</script>

<style>
  h3 {
    color: gray;
    text-decoration: underline;
  }
</style>

{#if ridersForceArray.length}
  <h3>Riders</h3>
  <strong>Genders</strong>
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
  <details>
    <summary>
      <strong>Details</strong>
    </summary>
    {#each ridersForceArray as rider}
      <details>
        <summary>{rider.firstname || '?'} - ({rider.country || '?'})</summary>
        <ul>
          <li>
            <i>Status</i>
            : {rider.status || '?'}
          </li>
          <li>
            <i>Diet</i>
            : {rider.diet || '?'}
          </li>
          <li>
            <i>Age</i>
            : {rider.age || '?'}
          </li>
          <li>
            <i>Weight</i>
            : {rider.weight || '?'}
          </li>
          <li>
            <i>Height</i>
            : {rider.height || '?'}
          </li>
          <li>
            <i>Bed</i>
            : {rider.bed || 'single'}
          </li>
          <li>
            <i>Horse</i>
            : {rider.horse || '?'}
          </li>
        </ul>
        <p>
          <i>Arrival</i>
          : {rider.arrival || '?'}
        </p>
        <p>
          <i>Notes</i>
          : {rider.notes || '?'}
        </p>
      </details>
    {/each}
  </details>
{/if}
