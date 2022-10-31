<script>
  import Icon from '@iconify/svelte';
</script>

<style>
    .nav {
        margin: 1em 0;
    }
</style>

<nav class="nav">
  <a href="/"><Icon icon="mdi-light:home" /></a>
</nav>

<slot></slot>