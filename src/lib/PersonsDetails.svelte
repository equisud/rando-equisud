<script>
    export let persons;
    export let title;

    const constantFields = ['firstname', 'gender', 'country', 'status', 'arrival', 'notes'];
</script>

<section class="section persons">
    <strong class="title persons-title">{title} :</strong>        
    {#each persons as person}
    <article class="person">
        <header class="person-banner">
            {person.firstname || '?'} - ({person.country || '?'})
        </header>
        <body>
            <ul>
                <li><i>Status</i>: {person.status || '?'}</li>
                {#each Object.entries(person) as [key, value]}
                    {#if !constantFields.includes(key) && value}
                        <li><i>{key.charAt(0).toUpperCase() + key.slice(1)}</i>: {value}</li>
                    {/if}
                {/each}
            </ul>
            <p><i>Arrival</i>: {person.arrival || '?'}</p>
            <p><i>Notes</i>: {person.notes || '?'}</p>
        </body>
    </article>
    {/each}
</section>
