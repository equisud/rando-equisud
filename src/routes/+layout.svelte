<script>
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';

  const isAdmin = $page.url.search === "?admin"
</script>

<style>
    .nav {
        margin: 1em 0;
    }
</style>

<nav class="nav">
  {#if isAdmin} 
    <a href="/?admin"><Icon icon="mdi-light:home" /></a>
  {:else}
    <a href="/"><Icon icon="mdi-light:home" /></a>
  {/if}
</nav>

<slot></slot>