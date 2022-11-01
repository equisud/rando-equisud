<script>
  import Riders from "$lib/Riders.svelte"
  import Synthesis from "$lib/Synthesis.svelte"

  export let week
  console.log("week", week.old)

  const ridersForceArray = Array.isArray(week.riders) ? week.riders : [];

</script>
<section class="treck { week.old && 'past-week'}">
  <article>
    <header
      class="week-detail-banner {week.title && week.title.includes('No trail') ? 'no-way' : ''}">
      {week.title || '?'} - {week.period || '?'}
    </header>
    <body>
      {#if week.locations}
          <ul class="locations">
          <strong class="locations-title">Accommodation : </strong>
            {#each week.locations as location}
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
