<script>
  import WeekDetails from "$lib/WeekDetails.svelte"
  export let data;
  const week = data.post.week
</script>

<h1>Equisud - Treck board</h1>

<WeekDetails {week} />
