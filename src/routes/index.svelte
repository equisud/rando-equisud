<script context="module">
  export async function load() {
    try {
      const Post = await import(
        /* @vite-ignore */ "$lib/_data/2022/1-week.json"
      );
      return {
        props: {
          treck: Post.default
        }
      };
    } catch (e) {
      return {
        props: {
          treck: {
            headling: "404",
            content: "Page not found"
          }
        }
      };
    }
  }
</script>

<script>
  import Treck from "$lib/Treck.svelte";
  export let treck;
</script>

<svelte:head>
  <title>Equisud riding 2022</title>
</svelte:head>

<h1>Equisud riding 2022</h1>

<section>
  <div class="grid">
    <Treck {treck} />
    <Treck {treck} />
    <Treck {treck} />
  </div>
  <div class="grid">
    <Treck {treck} />
    <Treck {treck} />
    <Treck {treck} />
  </div>
</section>
