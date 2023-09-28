import React, { useState } from "react";
import axios from "axios";
import "./Users.css";

const UsersUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("/users-upload", formData)
      .then((response) => {
        console.log(response.data);
        alert(
          "Utilisateurs ajoutés avec succès! Relogin pour voir les changement "
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form>
        <input type="file" placeholder="Importer une liste des users"  id="json" accept=".json" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </form>
    </>
  );
};

export default UsersUpload;
