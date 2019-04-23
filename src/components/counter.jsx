import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

export default class Counter extends Component {
  state = {
    number: 1,
    harga: 10000,
    biaya: 10000
  };

  Tambah = () => {
    this.setState(({ number, harga, biaya }) => ({
      number: number + 1,
      harga: harga + biaya
    }));
  };
  Kurang = () => {
    var number = this.state.number;
    if (number > 0)
      this.setState(({ number, harga, biaya }) => ({
        number: number - 1,
        harga: harga - biaya
      }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "10px" }}>
        <Card style={{ width: "50%" }}>
          <CardImg
            top
            width="35px"
            src={this.props.gambar}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>
              {this.props.menu}
            </CardTitle>
            <p>Pesan Berapa</p>
            <p>harga:{this.state.harga}</p>
            <h1>{this.state.number} </h1>
            <Button onClick={this.Tambah} className="btn btn-success m-2">
              +
            </Button>
            <Button onClick={this.Kurang} className="btn btn-danger m-2">
              -
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
