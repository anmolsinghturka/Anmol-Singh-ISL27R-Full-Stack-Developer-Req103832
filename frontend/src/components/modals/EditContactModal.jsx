import React from "react";
import { modals } from "@mantine/modals";
import EditContactModalContent from "./EditContactModalContent";

// This component is a helper function that creates and opens an edit contact modal
export const EditContactModal = ({ initialProduct, onProductEdited }) => {
  // This function is called when the modal is closed
  const onClose = () => {
    modals.closeAll();
  };

  modals.open({
    title: "Edit Contact",
    children: (
      <EditContactModalContent // The content of the modal
        onProductEdited={onProductEdited} // A function to call when a contact is edited
        initialProduct={initialProduct} // The initial contact data to display in the modal
        onClose={onClose} // The function to call when the modal is closed
      />
    ),
  });
};

export default EditContactModal;
