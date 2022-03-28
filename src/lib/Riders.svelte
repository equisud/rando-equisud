<script>
  export let riders;
  const ridersForceArray = Array.isArray(riders) ? riders : [];
</script>

{#if ridersForceArray.length}
  <h5>Riders</h5>
  <table>
    <thead>
      <tr>
        <td>Name</td>
        <td>Diet</td>
        <td>Horse</td>
      </tr>
    </thead>
    <tbody>
      {#each ridersForceArray as rider}
        <tr>
          <td>{rider.firstname || '?'}</td>
          <td>{rider.diet || '?'}</td>
          <td>{rider.horse || '?'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
