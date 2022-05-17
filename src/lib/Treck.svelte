<script>
  import Riders from "$lib/Riders.svelte";
  import Stationaries from "$lib/Stationaries.svelte";
  export let treck;
</script>

<article>
  <header
    class={treck.title && treck.title.includes('No trail') ? 'no-trail' : ''}>
    <h4>{treck.period || '?'}</h4>
    <h4>{treck.title || '?'}</h4>
  </header>
  <body>
    {#if treck.locations}
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
    {/if}
    <Riders riders={treck.riders} />
    <Stationaries stationaries={treck.stationaries} />
  </body>
</article>
