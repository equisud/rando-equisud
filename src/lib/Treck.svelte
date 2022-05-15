<script>
  import Riders from "$lib/Riders.svelte";
  import Stationaries from "$lib/Stationaries.svelte";
  export let treck;
</script>

<article>
  <header>
    <h4>{treck.period || '?'}</h4>
    <h6>{treck.title || '?'}</h6>
  </header>
  <body>
    <details>
      <summary>
        <strong>Locations</strong>
      </summary>
      <ul>
        {#each treck.locations as host}
          <li>{host}</li>
        {/each}
      </ul>
    </details>
    <Riders riders={treck.riders} />
    <Stationaries stationaries={treck.stationaries} />
  </body>
</article>
