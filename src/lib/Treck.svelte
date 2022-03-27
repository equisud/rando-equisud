<script>
	import Rider from '$lib/Rider.svelte';
	export let treck;
</script>

<article>
	<header>
		<h4>{treck.period}</h4>
		<h6>{treck.title}</h6>
	</header>
	<Rider riders={treck.riders} />
</article>
