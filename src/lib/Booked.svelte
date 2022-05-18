<script>
  import { countBooked, countOption } from "../db";
  export let customers;
</script>

<ul>
  <li>Booked: {countBooked(customers)}</li>
  <li>Option: {countOption(customers)}</li>
  <li>
    <strong>
      Available: {8 - (countOption(customers) + countBooked(customers))}
    </strong>
  </li>
</ul>
