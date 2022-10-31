<script>
  import Treck from "$lib/Treck.svelte"
  export let data;
  const treck = data.post.content
</script>

<h1>Equisud - Treck board</h1>

<Treck riders={treck.riders} title={treck.title} locations={treck.locations} period={treck.period} />
