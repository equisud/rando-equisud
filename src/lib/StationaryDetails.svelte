<script>
  import StationariesDetails from "$lib/StationariesDetails.svelte"
  import Synthesis from "$lib/Synthesis.svelte"

  export let stationaries
</script>

<article>
    <header class="banner treck-detail-banner">
        Stationary
    </header>
    <body>
        {#if stationaries.length}
            <Synthesis persons={stationaries} />
            <StationariesDetails {stationaries} />
        {/if}
    </body>
</article>
