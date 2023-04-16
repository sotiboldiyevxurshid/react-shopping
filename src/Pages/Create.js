import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Create() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState();
  const [sale, setSale] = useState();
  const [img, setImg] = useState("");
  
  const handleCreate = (e) => {
    const empData = {title, location, price, img, sale};
    e.preventDefault();
    fetch("https://xurshidbek-server.onrender.com/data",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(empData)
    })
    .then((res) => {
      alert("You can see your cart 'Simple ecart' page")

    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div>
      <Container>
        <Row
          style={{ marginTop: "50px" }}
          className="justify-content-center mt-5"
        >
          <Col xs={7}>
            <Form style={{ color: "white", marginTop: "50px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => setTitle(e.target.value)}
                />
                {title?.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  onChange={(e) => setLocation(e.target.value)}
                />
                {location.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                />
            
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Sale</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="sale"
                  onChange={(e) => setSale(e.target.value)}
                />
          
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image"
                  onChange={(e) => setImg(e.target.value)}
                />
                {img.length < 1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>

              {title.length < 1 ? (
                <Button onClick={handleCreate} style={{ width: "100%" }} variant="primary">
                  Submit
                </Button>
              ) : (
                <Button onClick={handleCreate} style={{ width: "100%" }} variant="primary">
                  Submit
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Create;
