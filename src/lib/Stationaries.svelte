<script>
  import { getGenderSummary, getDietSummary } from "../db";
  export let stationaries;
  const stationariesForceArray = Array.isArray(stationaries)
    ? stationaries
    : [];
</script>

{#if stationariesForceArray.length}
  <h5>Stationaries</h5>
  <strong>Genders</strong>
  <ul>
    {#each getGenderSummary(stationariesForceArray) as gender}
      <li>{gender[0]}: {gender[1]}</li>
    {/each}
  </ul>
  <strong>Diets</strong>
  <ul>
    {#each getDietSummary(stationariesForceArray) as diet}
      <li>{diet[0]}: {diet[1]}</li>
    {/each}
  </ul>
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
            <i>Relationship</i>
            : {stationary.relationship || '?'}
          </li>
        </ul>
        <p>
          <i>Arrival</i>
          : {stationary.arrival || '?'}
        </p>
      </details>
    {/each}
  </details>
{/if}
