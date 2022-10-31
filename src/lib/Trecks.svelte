<script>
  import { getCountrySummary } from "$lib/db"
  import Booked from "$lib/Booked.svelte"
  import Icon from '@iconify/svelte';

  export let treck;
  
  const isStationaries = !(
    treck.title && treck.title.includes("No stationary")
  )
  const githubEditLink = `https://github.com/equisud/rando-equisud/edit/main/src/lib/_data/2022/${treck.file}`
</script>

<article class="week">
  <header class="week-banner">
    <h3>{treck.period || '?'}</h3>
    <a href="{githubEditLink}"><Icon icon="mdi-light:pencil" /></a> - 
    <a href="/treck/{treck.file}"><Icon icon="mdi-light:eye" /></a>
  </header>
  <body>
    <article class="week-rider">
      <header
        class="{treck.title && treck.title.includes('No trail') ? 'no-way' : ''}
        rider-banner">
        {treck.title || '?'}
      </header>
      <body>
        {#if treck.riders}
          <Booked customers={treck.riders} />
          {#if getCountrySummary(treck.riders).length}
            <ul>
              {#each getCountrySummary(treck.riders) as country}
                <li>{country[0]}: {country[1]}</li>
              {/each}
            </ul>
          {/if}
        {/if}
      </body>
    </article>
    <article class="week-stationary">
      <header
        class="stationary-banner {treck.title && treck.title.includes('No stationary') ? 'no-way' : ''}">
        {isStationaries ? 'Stationaries' : 'No stationary'}
      </header>
      {#if isStationaries && treck.stationaries}
        <body>
          <Booked customers={treck.stationaries} />
          {#if getCountrySummary(treck.stationaries).length}
            <strong>Origin</strong>
            <ul>
              {#each getCountrySummary(treck.stationaries) as country}
                <li>{country[0]}: {country[1]}</li>
              {/each}
            </ul>
          {/if}
        </body>
      {/if}
    </article>
  </body>
</article>
