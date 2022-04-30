<script>
  import { getGenderSummary, getDietSummary, getDoubleBeds } from "../db";
  export let riders;
  const ridersForceArray = Array.isArray(riders) ? riders : [];
</script>

{#if ridersForceArray.length}
  <h5>Riders</h5>
  <strong>Genders</strong>
  <ul>
    {#each getGenderSummary(ridersForceArray) as gender}
      <li>{gender[0]}: {gender[1]}</li>
    {/each}
  </ul>
  <strong>Hosting</strong>
  <ul>
    <li>Double beds: {getDoubleBeds(ridersForceArray)}</li>
  </ul>
  <strong>Diets</strong>
  <ul>
    {#each getDietSummary(ridersForceArray) as diet}
      <li>{diet[0]}: {diet[1]}</li>
    {/each}
  </ul>
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
      </details>
    {/each}
  </details>
{/if}
