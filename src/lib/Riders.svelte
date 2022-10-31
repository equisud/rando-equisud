<script>
    export let riders
</script>

<section class="riders">
    <strong class="riders-title">Riders :</strong>        
    {#each riders as rider}
    <article class="rider"  >
        <header class="rider-banner">
            {rider.firstname || '?'} - ({rider.country || '?'})
        </header>
        
        <body>
            <ul>
                <li>
                <i>Status</i>
                : {rider.status || '?'}
                </li>
                <li>
                <i>Diet</i>
                : {rider.diet || '?'}
                </li>
                <li>
                <i>Age</i>
                : {rider.age || '?'}
                </li>
                <li>
                <i>Weight</i>
                : {rider.weight || '?'}
                </li>
                <li>
                <i>Height</i>
                : {rider.height || '?'}
                </li>
                <li>
                <i>Bed</i>
                : {rider.bed || 'single'}
                </li>
                <li>
                <i>Horse</i>
                : {rider.horse || '?'}
                </li>
            </ul>
            <p>
                <i>Arrival</i>
                : {rider.arrival || '?'}
            </p>
            <p>
                <i>Notes</i>
                : {rider.notes || '?'}
            </p>
        </body>
    </article>
    {/each}
</section>
