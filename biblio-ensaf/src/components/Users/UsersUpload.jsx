import React, { useState } from "react";
import axios from "axios";

const UsersUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post("/uploadUsers", formData)
        .then((response) => {
          console.log(response.data.message);
          // Effectuer d'autres actions après l'upload réussi
        })
        .catch((error) => {
          console.error(error);
          // Gérer les erreurs lors de l'upload
        });
    }
  };

  return (
    <>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
    </>
  );
};

export default UsersUpload;
