import { putProducts } from "./http/putProducts";

// handleEditSubmit function to edit an existing product
export const handleEditSubmit = async (
  contactId,
  name,
  email,
  phone,
  website,
  companyName,
  onClose,
  editNotification,
  onProductEdited,
) => {

  // Create an object with the product data
  const productData = {
    name,
    email,
    website,
    phone,
    companyName,
  };

  try {
    // Call the putProducts function to update the product
    const editedProduct = await putProducts(contactId, productData);
    onClose();
    editNotification();
    onProductEdited(editedProduct);
  } catch (error) {
    console.error(error);
  }
};
