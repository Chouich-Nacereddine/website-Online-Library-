import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import UploadBooks from "./UploadBooks";
import axios from "axios";
import "./Books.css";

const Books = () => {
  const [key, setKey] = useState("home");
  const [BooksDB, setBooksDB] = useState([]);

  useEffect(() => {
    // Appeler l'API pour récupérer les Books
    axios
      .get("/BooksData")
      .then((response) => {
        setBooksDB(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "beige", position: "relative" }}>
      <UploadBooks />
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 "
        >
          <Tab eventKey="home" title="IT">
            <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Informatique") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </Tab>
          <Tab eventKey="Electronique" title="Electronique">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Electronique") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>
          <Tab eventKey="mathematics" title="Mathematics">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Mathématique") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>
          <Tab eventKey="phisics" title="Phisics">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Physique") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>
          <Tab eventKey="mechanics" title="Mechanics">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Génie mécanique") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>
          <Tab eventKey="robotics" title="Robotics">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Robotique") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>
          <Tab eventKey="automatic" title="Automatic">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Automatique") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>{" "}
          <Tab eventKey="industrial " title="Industrial ">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Génie industriel") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>{" "}
          <Tab eventKey="energetics" title="Energetics">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Energetique") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>
          <Tab eventKey="management" title="Management">
          <div className="books_container">
              {BooksDB.map((Book) => {
                if (Book.Matiere === "Management") {
                  return (
                    <div key={Book._id}>
                      <div className="book">
                        <div className="book_info">
                          <p>
                            {" "}
                            <center>
                              {" "}
                              <b>Auteur: </b> <br /> {Book.Auteur}{" "}
                            </center>
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Editeur: </b> <br /> {Book.Editeur}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>Qte: </b> <br />
                              {Book.Qte}{" "}
                            </center>{" "}
                          </p>
                          <p>
                            {" "}
                            <center>
                              <b>N° Inventaire: </b> <br /> {Book.N_INV}{" "}
                            </center>{" "}
                          </p>
                        </div>
                        <div className="cover">
                          <p>{Book.Titre}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else return null; 
              })}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
