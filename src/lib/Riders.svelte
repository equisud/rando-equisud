<script>
  export let riders;
  const ridersForceArray = Array.isArray(riders) ? riders : [];
</script>

{#if ridersForceArray.length}
  <details>
    <summary>
      <strong>Riders</strong>
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
            <i>Relationship</i>
            : {rider.relationship || '?'}
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
