<script>
  import { getCountrySummary } from "$lib/db";
  import Booked from "$lib/Booked.svelte";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  const isAdmin = $page.url.search === "?admin";

  export let week;

  const isStationaries = !(week.title && week.title.includes("No stationary"));
  const githubEditLink = `https://github.com/equisud/rando-equisud/edit/main/src/lib/_data/2022/${week.file}`;
</script>

<article class="week">
  <header class="week-banner">
    <h3>{week.period || '?'}</h3>
    {#if isAdmin}
      <a href={githubEditLink}>
        <Icon icon="mdi-light:pencil" />
      </a>
      -
      <a href="/week/{week.file.replace(/\.[^/.]+$/, '')}?admin">
        <Icon icon="mdi-light:eye" />
      </a>
    {/if}
  </header>
  <body>
    <article class="week-rider">
      <header
        class="{week.title && week.title.includes('No trail') ? 'no-way' : ''}
        rider-banner">
        {week.title || '?'}
      </header>
      <body>
        {#if week.riders}
          <Booked customers={week.riders} />
          {#if getCountrySummary(week.riders).length}
            <ul>
              {#each getCountrySummary(week.riders) as country}
                <li>{country[0]}: {country[1]}</li>
              {/each}
            </ul>
          {/if}
        {/if}
      </body>
    </article>
    <article class="week-stationary">
      <header
        class="stationary-banner {week.title && week.title.includes('No stationary') ? 'no-way' : ''}">
        {isStationaries ? 'Stationaries' : 'No stationary'}
      </header>
      {#if isStationaries && week.stationaries}
        <body>
          <Booked customers={week.stationaries} />
          {#if getCountrySummary(week.stationaries).length}
            <strong>Origin</strong>
            <ul>
              {#each getCountrySummary(week.stationaries) as country}
                <li>{country[0]}: {country[1]}</li>
              {/each}
            </ul>
          {/if}
        </body>
      {/if}
    </article>
  </body>
</article>
