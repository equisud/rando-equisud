<script>
  import PersonsDetails from "$lib/PersonsDetails.svelte"
  import Synthesis from "$lib/Synthesis.svelte"

  export let riders, locations, title
</script>

<article>
    <header class="banner treck-detail-banner {title && title.includes('No trail') ? 'no-way' : ''}">
        Treck: {title || '?'}
    </header>
    <body>
        {#if locations}
            <section class="section locations">
            <strong class="title locations-title">Accommodation : </strong>
            <ul>
                {#each locations as location}
                    <li class="location">{location}</li>
                {/each}
            </ul>
            </section>
        {/if}
        {#if riders.length}
            <Synthesis persons={riders} />
            <PersonsDetails persons={riders} title="Riders" />
        {/if}
    </body>
</article>
