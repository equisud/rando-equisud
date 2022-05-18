<script>
  import Riders from "$lib/Riders.svelte";
  import Stationaries from "$lib/Stationaries.svelte";
  export let treck;
</script>

<article class="week">
  <header class="week-banner">
    <h3>{treck.period || '?'}</h3>
  </header>
  <body>
    <Riders
      riders={treck.riders}
      title={treck.title}
      locations={treck.locations} />
    <Stationaries stationaries={treck.stationaries} title={treck.title} />
  </body>
</article>
