import React, { useState } from "react";
import { Button, Modal, TextInput, rem } from "@mantine/core";
import { handleInputChange } from "../helpers/handleInputChange";
import { handleAddSubmit } from "../helpers/handleAddSubmit";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { IconAlertTriangle } from '@tabler/icons-react';

const AddContactModal = ({ opened, onClose, onProductCreated }) => {
  // State variables for the form inputs
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone]       = useState("");
  const [website, setWebsite]   = useState("");
  const [companyName, setCompanyName]   = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);

  // Function to reset the form inputs
  const resetForm = () => {
    setName("");
    setEmail("");
    setWebsite("");
    setPhone("");
    setCompanyName("");
  };

  // Function to show a notification after product is added
  const showNotification = () => {
    notifications.show({
      icon: <IconCheck />,
      color: "green",
      message: "Contact Successfully Added!",
    });
  };

  return (
    // Modal component to display the form
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={true}
      title="Create New Contact"
      size="md"
      padding="md"
    >
      {/* Contact Name Input */}
      <TextInput
        label="Name"
        placeholder="Full Name"
        withAsterisk
        required
        value={name}
        onChange={(e) => handleInputChange(e, setName)}
        error={!allFieldsFilled && name.trim() === ""}
      />
      {/* Email Input */}
      <TextInput
        label="Email"
        placeholder="Email"
        withAsterisk
        required
        value={email}
        onChange={(e) => handleInputChange(e, setEmail)}
        error={!allFieldsFilled && email.trim() === ""}
      />
      {/* Phone Input */}
      <TextInput
        label="Phone"
        placeholder="Phone Number"
        withAsterisk
        required
        value={phone}
        onChange={(e) => handleInputChange(e, setPhone)}
        error={!allFieldsFilled && phone.trim() === ""}
      />
      {/* Website Input */}
      <TextInput
        label="Website"
        placeholder="Website"
        withAsterisk
        required
        value={website}
        onChange={(e) => handleInputChange(e, setWebsite)}
        error={!allFieldsFilled && website.trim() === ""}
      />
      {/* Company Name Input */}
      <TextInput
        label="Company Name"
        placeholder="Company Name"
        withAsterisk
        required
        value={companyName}
        onChange={(e) => handleInputChange(e,setCompanyName)}
        error={!allFieldsFilled && companyName.trim() === ""}
      />
      {/* Submit Button */}
      <Button
        mt="xl"
        fullWidth={true}
        variant="outline"
        type="submit"
        onClick={async () =>
          await handleAddSubmit(
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
          )
        }
      >
        Create
      </Button>
    </Modal>
  );
};

export default AddContactModal;
