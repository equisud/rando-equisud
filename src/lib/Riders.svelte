<script>
  export let riders;
  const ridersForceArray = Array.isArray(riders) ? riders : [];
</script>

{#if ridersForceArray.length}
  <h5>Riders</h5>
  {#each ridersForceArray as rider}
    <details>
      <summary>{rider.firstname || '?'} - ({rider.country || '?'})</summary>
      <ul>
        <li>Status: {rider.status || '?'}</li>
        <li>Diet: {rider.diet || '?'}</li>
        <li>Age: {rider.age || '?'}</li>
        <li>Weight: {rider.weight || '?'}</li>
        <li>Height: {rider.height || '?'}</li>
        <li>Relationship: {rider.relationship || '?'}</li>
        <li>Horse: {rider.horse || '?'}</li>
      </ul>
    </details>
  {/each}
{/if}
