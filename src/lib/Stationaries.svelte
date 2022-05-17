<script>
  import { getGenderSummary, getDietSummary, getDoubleBeds } from "../db";
  export let stationaries;
  const stationariesForceArray = Array.isArray(stationaries)
    ? stationaries
    : [];

  const dietSummary = getDietSummary(stationariesForceArray);
</script>

{#if stationariesForceArray.length}
  <h5>Stationaries</h5>
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
    {#each stationariesForceArray as stationary}
      <details>
        <summary>
          {stationary.firstname || '?'} - ({stationary.country || '?'})
        </summary>
        <ul>
          <li>
            <i>Status</i>
            : {stationary.status || '?'}
          </li>
          <li>
            <i>Diet</i>
            : {stationary.diet || '?'}
          </li>
          <li>
            <i>Age</i>
            : {stationary.age || '?'}
          </li>
          <li>
            <i>Weight</i>
            : {stationary.weight || '?'}
          </li>
          <li>
            <i>Height</i>
            : {stationary.height || '?'}
          </li>
          <li>
            <i>Horse</i>
            : {stationary.horse || '?'}
          </li>
        </ul>
        <p>
          <i>Arrival</i>
          : {stationary.arrival || '?'}
        </p>
        <p>
          <i>Notes</i>
          : {stationary.notes || '?'}
        </p>
      </details>
    {/each}
  </details>
{/if}
