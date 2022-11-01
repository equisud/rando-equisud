<script>
  import WeekDetails from "$lib/WeekDetails.svelte"
  export let data;
  const treck = data.post.content
  console.log("old", treck.old)
</script>

<h1>Equisud - Treck board</h1>

<WeekDetails riders={treck.riders} title={treck.title} locations={treck.locations} period={treck.period} />
