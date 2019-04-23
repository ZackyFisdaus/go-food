import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Counter from "./components/counter";
import { Row, Col } from "reactstrap";

class App extends Component {
  state = {
    makanan: [
      {
        nama: "Bakso",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/2/28/Bakso_mi_bihun.jpg"
      },
      {
        nama: "Pizza",
        img:
          "http://niaga.binadarma.ac.id/asset/images/iklan/893501658d0d42e78c449f8ae693d371.jpg"
      },
      {
        nama: "Ayam Bakar",
        img:
          "http://sahabatdapur.com/wp-content/uploads/2016/08/ragam-ayam-bakar-nusantara.jpg"
      }
    ]
  };

  render() {
    return (
      <div>
        <Header namaheader="header2" />
        <Row>
          {this.state.makanan.map(item => (
            <Col xs="3">
              <Counter gambar={item.img} menu={item.nama} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
