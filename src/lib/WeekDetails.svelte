<script>
  import TreckDetails from "$lib/TreckDetails.svelte"
  import StationaryDetails from "$lib/StationaryDetails.svelte"
  export let week

  const ridersForceArray = Array.isArray(week.riders) ? week.riders : [];
  const stationariesForceArray = Array.isArray(week.stationaries) ? week.stationaries : [];

</script>

<section class="section week-detail { week.old && 'past-week'}">
  <header
    class="week-detail-banner"> {week.period || '?'}
  </header>
  <TreckDetails locations={week.locations} riders={ridersForceArray} title={week.title} />
  <StationaryDetails stationaries={stationariesForceArray} />
</section>
