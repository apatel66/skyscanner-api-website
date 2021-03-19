# Website Link
https://apatel66.github.io/skyscanner-api-website/

## Run Locally
  1. Download this repository
  2. Navigate to it on the command line
  3. Make sure nvm/npm is installed on your computer
  4. If it is not, check out [this link](https://github.com/nvm-sh/nvm/blob/v0.35.3/install.sh)
  5. Enter the command `npm start`, and the website should open up
  6. For the best experience, please use Google Chrome

## Write-Up
This was my very first project where I worked with HTML/CSS/JavaScript or anything Web related, so there was definitely a learning curve involved. I began with some of the aesthetics, including the header, footer, and background. I thought and old treasure map would be fitting because it has the connotation of adventure and discovery, which are two of the best qualities of traveling. 

I then began creating the input fields for the airports, dates, and currency. I originally had the date input as yyyy-mm-dd, but that forced the users to input a specific day, when it is not required by the API. I decided to give the user some flexibility and let them input a day if they choose.  Looking at the demo code Kristen provided was very beneficial in figuring out how the Javascript functions are put together. 

Building the string for the API request was tricky because I kept getting the string wrong and there were many more parameters. I used console.log() often to make sure the data ended up where I expected it.  I noticed that when the API returned a quote for a flight, it only gave an ID for the carriers, while a separate array contained carriers and their ID.  To circumvent this, I put the carriers and ID into a map, so I could perform a simple lookup (by ID) when it came time to display the flight data. I did the same process for the "Place" values as well.  

Originally, I wanted to give the user the option to sort the list, but I lacked the expertise and time to do so. Luckily, the API returned the data from the cheapest to most expensive flight, which is likely the most popular ordering anyways.  Regardless, I displayed the cheapest quote in a different color to easily differentiate it from other flights. 

For some reason, the API only returned data for a one-way flight even if I included a return date. So I duplicated my original API call but switched the departure and destination, changed the date and called my table function again to print a list of returning flights as well. 

Finally, I made a small description about how to use the website, then made some changed to the style by rounding corners, adding shadows, and modifying the color-scheme. I originally included a lot of green, however, I read online that good websites should have colorblind-friendly colors to allow for greater accessibility, and a good contrasting/accessible color combination was blue and gold (https://davidmathlogic.com/col...). With this information, I changed the table color and the color that the cheapest flight was displayed in. Now, the colors of the website have a blueish and tan/gold theme, which I believe looks nice.

### Features
- Colorblind-friendly color scheme

- Allows users choose if they want to put the day of the month

- Includes an external link to search for IATA airport codes

- User cannot make the departure month earlier than the current month and they cannot make the returning month earlier than the departure month

- If no flights show up,  a "No Results" message should appear

### Bugs/Things to Improve
- Let the user input a city or airport code (with autocomplete)

- Better input checking with the dates

- List sorting

- Background image does not scale well on screens with different dimensions

- The prices seem to be very low (but that appears to be the API's fault)

- Does not look as nice on other browsers (Chrome works the best)
