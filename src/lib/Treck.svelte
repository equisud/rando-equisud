<script>
  import Riders from "$lib/Riders.svelte"
  import { getGenderSummary, getDietSummary, getDoubleBeds } from "$lib/db"
  export let riders, title, locations, period

  const ridersForceArray = Array.isArray(riders) ? riders : [];
  const dietSummary = getDietSummary(ridersForceArray)
  const doubleBeds = getDoubleBeds(ridersForceArray)
  const genderSummary = getGenderSummary(ridersForceArray)
</script>
<section class="treck">
  <article>
    <header
      class="treck-banner {title && title.includes('No trail') ? 'no-way' : ''}">
      {title || '?'}- {period || '?'}
    </header>
    <body>
      {#if locations}
            <strong>Accommodation</strong>
          <ul>
            {#each locations as location}
              <li>{location}</li>
            {/each}
          </ul>
      {/if}
      {#if ridersForceArray.length}
        <ul>
          {#each genderSummary as gender}
            <li>{gender[0]}: {gender[1]}</li>
          {/each}
        </ul>
        {#if doubleBeds}
          <strong>Hosting</strong>
          <ul>
            <li>Double beds: {doubleBeds}</li>
          </ul>
        {/if}
        {#if dietSummary.length}
          <strong>Diets</strong>
          <ul>
            {#each dietSummary as diet}
              <li>{diet[0]}: {diet[1]}</li>
            {/each}
          </ul>
        {/if}
        <Riders riders={ridersForceArray} />
      {/if}
    </body>
  </article>
</section>
