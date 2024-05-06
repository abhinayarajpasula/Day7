// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the API endpoint URL
var url = "https://restcountries.com/v3.1/all";

// Open a new GET request
xhr.open("GET", url, true);

// Send the request
xhr.send();

// Event listener to handle the response
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Parse the JSON response
        var countries = JSON.parse(xhr.responseText);
        console.log("countries: ", countries);

        // Get all the countries from Asia continent/region using Filter method
        var asiaCountries = countries.filter(country => country.region === "Asia");

        // Get all the countries with a population of less than 2 lakhs using Filter method
        var smallPopulationCountries = countries.filter(country => country.population < 200000);

        // Print the details of countries using forEach method
        countries.forEach(country => {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital[0]);
            console.log("Flag:", country.flags.svg);
        });

        // Print the total population of countries using reduce method
        var totalPopulation = countries.reduce((total, country) => total + country.population, 0);
        console.log("Total Population:", totalPopulation);

        // Print the country that uses US dollars as currency
        var usDollarCountries = countries.filter(country => country.currencies.hasOwnProperty("USD"));
        console.log("Countries using US dollars:", usDollarCountries.map(country => country.name.common));
    }
};