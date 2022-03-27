<script>
	import Treck from '$lib/Treck.svelte';

	const treck = {
		period: '14/05 au 21/05',
		title: 'Haute-Ariège',
		riders: [
			{
				firstname: 'Zohre',
				horse: 'Zuhal',
				diet: 'sans'
			},
			{
				firstname: 'Chanya',
				horse: 'Quirin',
				diet: 'sans'
			},
			{
				firstname: 'Keona',
				horse: 'Timéa',
				diet: 'veggie'
			},
			{
				firstname: 'Mariska',
				horse: 'Tahys',
				diet: 'sans'
			},
			{
				firstname: 'Anne-Bérangère',
				horse: 'Naïka',
				diet: 'sans'
			}
		]
	};
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
