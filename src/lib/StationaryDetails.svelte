<script>
  import PersonsDetails from "$lib/PersonsDetails.svelte"
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
            <PersonsDetails persons={stationaries} title="Stationaries" />
        {/if}
    </body>
</article>
