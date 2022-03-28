<script context="module">
  export async function load() {
    const jsonUrl = "../lib/_data/2022/";

    async function importData(url) {
      try {
        const Post = await import(/* @vite-ignore */ url);
        return Post.default;
      } catch (e) {
        return {
          headling: "404",
          content: "Page not found"
        };
      }
    }
    const trecks = [
      await importData(jsonUrl + "128-week.json"),
      await importData(jsonUrl + "2-week.json"),
      await importData(jsonUrl + "3-week.json")
    ];

    return { props: { trecks: trecks } };
  }
</script>

<script>
  import Treck from "$lib/Treck.svelte";
  export let trecks;
</script>

<svelte:head>
  <title>Equisud riding 2022</title>
</svelte:head>

<h1>Equisud riding 2022</h1>

<section>
  <div class="grid">
    {#each trecks as treck}
      <Treck {treck} />
    {/each}
  </div>
</section>
