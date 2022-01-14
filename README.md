## Unite180 Emulated Booking API

This is just a very simple and minimal API to emulate the [Service Booking](https://unite180.com/church_bookings/booking.php) backend.

## API Routes

| API Route | HTTP Verb | Return Type |
| --------- | --------- | ----------- |
| /         | get       | String      |
| /booking  | post      | String      |

<details><summary>/booking return values</summary>
<p>

        Success - Submit
        Error - Submit
        Error - Empty Submit
        Error - Form
        Error - Fully Booked
        Error - uKids Fully Booked
        Error - Booking Exist
        Error - Insert

</p>
</details>

## Installation

- Download the source code.
- Execute the `npm install` command inside the folder where `index.js` is located.

## Usage

- Once all the packages are installed run `node index`
- Open http://localhost:180 in your browser to see the result.

## Example Output

![Output]()

###### This is purely for educational purposes.
