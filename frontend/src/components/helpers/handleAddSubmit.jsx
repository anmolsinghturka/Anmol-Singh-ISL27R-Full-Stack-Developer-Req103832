import { checkFieldsFilled } from "./checkFieldsFilled";
import { postProducts } from "./http/postProducts";

// handleAddSubmit function to add a new product
export const handleAddSubmit = async (
  name,
  email,
  website,
  phone,
  companyName,
  onClose,
  setAllFieldsFilled,
  onProductCreated,
  resetForm,
  showNotification,
) => {

  // Array of fields to check if they are filled
  const fields = [
    name,
    email,
    website,
    phone,
    companyName,
  ];

  // Check if all the fields are filled
  const fieldsFilled = checkFieldsFilled(fields);

  if (fieldsFilled) {
    // Create an object with the product data
    const productData = {
      name,
      email,
      website,
      phone,
      companyName,
    };

    try {
      // Call the postProducts function to create the product
      const createdProduct = await postProducts(productData);

      // Call the onProductCreated function to update the product list
      onProductCreated(createdProduct);

      // Reset the form
      resetForm();

      // Close the modal
      onClose();

      // Show a notification indicating that the product was successfully created
      showNotification();
    } catch (error) {
      console.error(error);
    }
  } else {
    // If all the fields are not filled, set the allFieldsFilled to false
    setAllFieldsFilled(false);
  }
};
