<script>
  import Riders from "$lib/Riders.svelte"
  import Synthesis from "$lib/Synthesis.svelte"

  export let riders, title, locations, period

  const ridersForceArray = Array.isArray(riders) ? riders : [];

</script>
<section class="treck">
  <article>
    <header
      class="treck-banner {title && title.includes('No trail') ? 'no-way' : ''}">
      {title || '?'} - {period || '?'}
    </header>
    <body>
      {#if locations}
          <ul class="locations">
          <strong class="locations-title">Accommodation : </strong>
            {#each locations as location}
              <li class="location">{location}</li>
            {/each}
        </ul>
      {/if}
      {#if ridersForceArray.length}
        <Synthesis riders={ridersForceArray} />
        <Riders riders={ridersForceArray} />
      {/if}
    </body>
  </article>
</section>
