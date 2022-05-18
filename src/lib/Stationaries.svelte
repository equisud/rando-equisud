<script>
  import { getGenderSummary, getDietSummary, getDoubleBeds } from "../db";
  export let stationaries, title;
  const stationariesForceArray = Array.isArray(stationaries)
    ? stationaries
    : [];

  const dietSummary = getDietSummary(stationariesForceArray);
  const isStationaries = !(title && title.includes("No stationary"));
</script>

<article class="stationary">
  <header class="{isStationaries ? '' : 'no-way'} stationary-banner">
    {isStationaries ? 'Stationaries' : 'No stationary'}
  </header>
  {#if isStationaries}
    <body>
      {#if dietSummary.length}
        <strong>Diets</strong>
        <ul>
          {#each dietSummary as diet}
            <li>{diet[0]}: {diet[1]}</li>
          {/each}
        </ul>
      {/if}
      {#if stationariesForceArray.length}
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
    </body>
  {/if}
</article>
