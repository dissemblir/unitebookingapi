## Unite180 Emulated Booking API

This is just a very simple and minimal API to emulate the [Service Booking](https://unite180.com/church_bookings/booking.php) backend.

## API Routes

| API Route | HTTP Verb | Return Type |
| --------- | --------- | ----------- |
| /         | get       | String      |
| /booking  | post      | String      |

<details><summary>/booking return values</summary>
<p>

    ```
        Success - Submit
        Error - Submit
        Error - Empty Submit
        Error - Form
        Error - Fully Booked
        Error - uKids Fully Booked
        Error - Booking Exist
        Error - Insert
    ```

</p>
</details>

###### This is purely for educational purposes.
