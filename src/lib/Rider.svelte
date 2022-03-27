<script>
	export let riders;
</script>

<h5>Riders</h5>
<table>
	<thead>
		<tr>
			<td>Name</td>
			<td>Diet</td>
			<td>Horse</td>
		</tr>
	</thead>
	<tbody>
		{#each riders as rider}
			<tr>
				<td>{rider.firstname}</td>
				<td>{rider.diet}</td>
				<td>{rider.horse}</td>
			</tr>
		{/each}
	</tbody>
</table>
