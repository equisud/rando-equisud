<script>
    export let stationaries
</script>

<section class="section stationaries">
    <strong class="title stationaries-title">Stationaries :</strong>        
    {#each stationaries as stationary}
    <article class="stationary"  >
        <header class="stationary-banner">
            {stationary.firstname || '?'} - ({stationary.country || '?'})
        </header>
        <body>
            <ul>
                <li>
                <i>Status</i>
                : {stationary.status || '?'}
                </li>
                <li>
                <i>Diet</i>
                : {stationary.diet || '?'}
                </li>
                <li>
                <i>Age</i>
                : {stationary.age || '?'}
                </li>
                <li>
                <i>Weight</i>
                : {stationary.weight || '?'}
                </li>
                <li>
                <i>Height</i>
                : {stationary.height || '?'}
                </li>
                <li>
                <i>Bed</i>
                : {stationary.bed || 'single'}
                </li>
            </ul>
            <p>
                <i>Arrival</i>
                : {stationary.arrival || '?'}
            </p>
            <p>
                <i>Notes</i>
                : {stationary.notes || '?'}
            </p>
        </body>
    </article>
    {/each}
</section>
