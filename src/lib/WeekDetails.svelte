<script>
  import Riders from "$lib/Riders.svelte"
  import Synthesis from "$lib/Synthesis.svelte"

  export let week

  const ridersForceArray = Array.isArray(week.riders) ? week.riders : [];

</script>
<section class="section week-detail { week.old && 'past-week'}">
  <article>
    <header
      class="week-detail-banner {week.title && week.title.includes('No trail') ? 'no-way' : ''}">
      {week.title || '?'} - {week.period || '?'}
    </header>
    <body>
      {#if week.locations}
      <section class="section locations">
        <strong class="title locations-title">Accommodation : </strong>
        <ul>
            {#each week.locations as location}
              <li class="location">{location}</li>
            {/each}
        </ul>
        </section>
      {/if}
      {#if ridersForceArray.length}
        <Synthesis riders={ridersForceArray} />
        <Riders riders={ridersForceArray} />
      {/if}
    </body>
  </article>
</section>
