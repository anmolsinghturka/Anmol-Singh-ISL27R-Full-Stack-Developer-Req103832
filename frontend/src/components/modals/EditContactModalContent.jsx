import React, { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { handleInputChange } from "../helpers/handleInputChange";
import { handleEditSubmit } from "../helpers/handleEditSubmit";

const EditContactModalContent = ({
  initialProduct, // the initial product object being edited
  onClose, // function to close the modal
  onProductEdited, // function to call after product edited
}) => {
  // state variables for form inputs
  const [name, setName] = useState(initialProduct.name);
  const [email, setEmail] = useState(initialProduct.email);
  const [phone, setPhone] = useState(initialProduct.phone);
  const [website, setWebsite] = useState(initialProduct.website);
  const [companyName, setCompanyName] = useState(initialProduct.companyName);

  // notification for successful product edit
  const editNotification = () => {
    notifications.show({
      icon: <IconCheck />,
      message: "Contact Successfully Edited!",
    });
  };

  return (
    <>
      {/* form inputs for editing contact details */}
      <TextInput
        label="Name"
        placeholder="Full Name"
        value={name}
        onChange={(e) => handleInputChange(e, setName)}
      />
      <TextInput
        label="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => handleInputChange(e, setEmail)}
      />
      <TextInput
        label="Phone"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => handleInputChange(e, setPhone)}
      />
      <TextInput
        placeholder="Website"
        label="Website"
        value={website}
        onChange={(e) => handleInputChange(e, setWebsite)}
      />
      <TextInput
        placeholder="Company Name"
        label="Company Name"
        value={companyName}
        onChange={(e) => handleInputChange(e, setCompanyName)}
      />

      <Button
        mt="xl"
        fullWidth={true}
        variant="outline"
        type="submit"
        onClick={() => {
          handleEditSubmit(
            initialProduct.contactId,
            name,
            email,
            phone,
            website,
            companyName,
            onClose,
            editNotification,
            onProductEdited,
          );
        }}
      >
        Save Changes
      </Button>
    </>
  );
};

export default EditContactModalContent;
