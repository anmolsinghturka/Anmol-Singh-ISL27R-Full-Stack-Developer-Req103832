// getProducts function to fetch products data from the API
import axios from "axios";
import sortBy from "lodash/sortBy";

export const getProducts = async (
  debouncedQuery,
  selectedColumn,
  sortStatus,
  setRecords,
  setFetching,
) => {
  try {
    // Set fetching to true to indicate that data is being fetched
    setFetching(true);
    
    // Make a GET request to the API to retrieve products data
    const response = await axios.get("/api/product/");

    // Filter the data based on the search query and selected column
    const productsData = response.data.filter((product) => {
      const searchValue = product[selectedColumn]?.toString().toLowerCase() || "";

      if (debouncedQuery === "") return true;

      const searchTerms = debouncedQuery
        .trim()
        .toLowerCase()
        .split(",")
        .map((term) => term.trim());

      return searchTerms.every((term) => searchValue.includes(term));
    });

    // Sort the data based on the sort status
    const sortedData = sortBy(productsData, sortStatus.columnAccessor);
    const sortedProducts = sortStatus.direction === "desc" ? sortedData.reverse() : sortedData;

    console.log(sortedProducts)
    // Set the sorted data as the records
    setRecords(sortedProducts);

    // Set fetching to false after a short delay to indicate that data fetching is complete
    setTimeout(() => {
      setFetching(false);
    }, 500);
  } catch (error) {
    console.error(error);
    // Set fetching to false if an error occurs
    setFetching(false);
  }
};
