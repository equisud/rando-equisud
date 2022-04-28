<script context="module">
  export async function load() {
    const jsonPath = {
      path: "../lib/_data/2022/",
      filenameSuffixe: "-week.json"
    };

    async function getTrecksData() {
      async function importData(path) {
        try {
          const Post = await import(/* @vite-ignore */ path);
          return Post.default;
        } catch (e) {
          return {
            headling: "404",
            content: "Page not found"
          };
        }
      }

      const weeksNumber = 35;
      const trecks = [];

      for (let i = 1; i <= weeksNumber; i++) {
        trecks.push(
          await importData(jsonPath.path + i + jsonPath.filenameSuffixe)
        );
      }

      return trecks;
    }

    return { props: { trecks: await getTrecksData() } };
  }
</script>

<script>
  import Treck from "$lib/Treck.svelte";
  export let trecks;
</script>

<style>
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }
</style>

<svelte:head>
  <title>Equisud riding 2022</title>
</svelte:head>
<a href="/">home</a>
<h1>Equisud riding 2022</h1>

<section>
  <div class="grid">
    {#each trecks as treck}
      <Treck {treck} />
    {/each}
  </div>
</section>
