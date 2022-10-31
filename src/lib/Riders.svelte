<script>
    export let riders
</script>

<section class="riders">
<strong>Details</strong>
    <article>
        {#each riders as rider}
            {rider.firstname || '?'} - ({rider.country || '?'})
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
        {/each}
    </article>
</section>
