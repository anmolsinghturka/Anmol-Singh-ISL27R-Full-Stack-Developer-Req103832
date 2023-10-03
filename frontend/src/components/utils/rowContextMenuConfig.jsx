import { IconEdit, IconTrash } from "@tabler/icons-react";
import { DeleteContactModal } from "../modals/DeleteContactModal";
import { EditContactModal } from "../modals/EditContactModal";

// Define the rowContextMenuConfig function
export const rowContextMenuConfig = (onDeleteProduct, onProductEdited) => {
  // Function to check if the user is logged in
  const isUserLoggedIn = () => {
    return localStorage.getItem('username') != null;
  };

  // Return an object with properties that configure the row context menu
  return {
    shadow: "xl",
    borderRadius: "sm",
    items: (row) => {
      // If the user is not logged in, return an empty array
      if (!isUserLoggedIn()) return [];

      // If the user is logged in, return the edit and delete options
      return [
        {
          // Configure the "Edit" menu item
          key: "edit",
          color: "blue",
          icon: <IconEdit size={16} />,
          title: `Edit ${row.name}`,
          onClick: () =>
            EditContactModal({ initialProduct: row, onProductEdited }),
        },
        {
          // Configure the "Delete" menu item
          key: "delete",
          color: "red",
          icon: <IconTrash size={16} />,
          onClick: () =>
            DeleteContactModal({ contactId: row.contactId, onDeleteProduct }),
        },
      ];
    },
  };
};
