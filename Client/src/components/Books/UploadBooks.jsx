import React, { useState } from "react";
import axios from "axios";

const UploadBooks = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const BooksData = new FormData();
    BooksData.append("file", selectedFile);

    axios
      .post("/Books-upload", BooksData)
      .then((response) => {
        console.log(response.data);
        alert(
          "Books ajoutés avec succès! Relogin pour voir les changement "
        );
      })
      .catch((error) => {
        console.error.log(error);
      });
  };

  return (
    <>
      <form>
        <input type="file" placeholder="Importer une liste des Books"  id="json" accept=".json" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </form>
    </>
  );
};

export default UploadBooks;
