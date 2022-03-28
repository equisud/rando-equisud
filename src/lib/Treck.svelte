<script>
  import Riders from "$lib/Riders.svelte";
  export let treck;
</script>

<article>
  <header>
    <h4>{treck.period || '?'}</h4>
    <h6>{treck.title || '?'}</h6>
  </header>

  <Riders riders={treck.riders} />
</article>
