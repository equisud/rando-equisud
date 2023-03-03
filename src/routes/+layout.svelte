<script>
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  const isAdmin = $page.url.search === "?admin";
</script>

<style>
  .nav {
    margin: 1em 0;
  }
</style>

<nav class="nav">
  {#if isAdmin}
    <a href="/?admin">
      <Icon icon="mdi-light:home" />
    </a>
    <a href="/weeks?admin">
      <Icon icon="mdi-light:file-multiple" />
    </a>
  {:else}
    <a href="/">
      <Icon icon="mdi-light:home" />
    </a>
    <a href="/weeks">
      <Icon icon="mdi-light:file-multiple" />
    </a>
  {/if}
  <a href="/weeks?admin">.</a>
</nav>

<slot />
