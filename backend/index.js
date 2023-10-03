const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Import the routers
const productsRouter = require("./src/routes/products");
const healthRouter = require("./src/routes/health");
const landingRouter = require("./src/routes/landing");

// Import the Swagger documentation and add it to the app
const swagger = require("./src/swagger/swagger");
swagger(app);

// Use bodyParser middleware to parse JSON request bodies
app.use(bodyParser.json());

// File path to db.json
const dataFilePath = path.resolve(__dirname, "./src/data/db.json");

// Function to get the highest contactId
const getHighestcontactId = (products) => {
    // If the products list is empty, start with contactId 1
    if (products.length === 0) return 0;

    return products.reduce((maxId, product) => Math.max(maxId, product.contactId), 0);
};

// Fetching data from API and saving to db.json when the application starts
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        const users = response.data;

        // Read the existing products from the data file
        const products = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

        let highestcontactId = getHighestcontactId(products);

        const transformedData = users.map(user => {
            highestcontactId++;  // Increment the contactId for each user
            return {
                contactId: highestcontactId,  // Assign the incremented contactId
                name: user.name,
                email: user.email,
                website: user.website,
                phone: user.phone,
                companyName: user.company.name
            };
        });

        // Append the transformedData to the products array
        products.push(...transformedData);

        // Write the updated products data back to the data file
        fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));
    })
    .catch(error => console.error('Error fetching data from API:', error));

// Mount the routers onto the appropriate URL paths
app.use("/api/product", productsRouter);
app.use("/api/health", healthRouter);
app.use("/", landingRouter);

// Start the server and listen on port 3000
app.listen(3000, () => console.log("Server started on port 3000"));
