import { useState } from "react";
import useCartContext from "../../context/CartContext";
import { getFirestore } from "../../firebase/firebase";
import Swal from "sweetalert2";
import { Container, Form, Col } from "react-bootstrap";
import Button from "../../componentes/button/Button";
import "./CheckoutContainer.css";
import { useRef } from "react";

const CheckoutContainer = () => {
  const { products, getGrandTotal } = useCartContext();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const addressRef = useRef("");
  const cityRef = useRef("");
  const zipCodeRef = useRef("");

  const db = getFirestore();
  const orders = db.collection("orders");
  const Compra = () => {
    let precioTotal = getGrandTotal(products);
    // let nombre = document.querySelector("#fname").value
    // let email = document.querySelector("#email").value
    // let address = document.querySelector("#address").value
    // let city = document.querySelector("#city").value
    // let zipCode = document.querySelector("#zipCode").value
    debugger;
    let nombre = nameRef.current.value;
    let email = emailRef.current.value;
    let address = addressRef.current.value;
    let city = cityRef.current.value;
    let zipCode = zipCodeRef.current.value;

    const newOrder = {
      buyer: nombre,
      emial: email,
      address: address,
      city: city,
      zipCode: zipCode,
      items: products,
      precioTotal: precioTotal,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Compra Finalizada, pronto te llegara confirmación, ${id}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container id="checkcontainer">
        <h2>Checkout</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter email"
                id={"email"}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                ref={nameRef}
                placeholder="Nombre y Apellido"
                id={"fname"}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              ref={addressRef}
              id={"address"}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control id={"city"} ref={cityRef} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control id={"zipCode"} ref={zipCodeRef} />
            </Form.Group>
          </Form.Row>
        </Form>
        <h3>Resumen de Compra</h3>
        <div className={"checkoutProduct"}>
          <h4>Producto</h4>
          <h4>Cantidad</h4>
          <h4>Precio</h4>
        </div>
        {products.map((product) => {
          return (
            <div key={product.id} className={"checkoutProduct"}>
              <h4>{product.nombre}</h4>
              <h4>{product.cantidad}</h4>
              <h4>${product.precio}</h4>
            </div>
          );
        })}
        <div id={"checkOutTotal"}>
          <h4>Total</h4>
          <h4>${getGrandTotal()}</h4>
        </div>
        <div id={"checkoutButton"}>
          <Button contenido={"Finalizar Compra"} callback={() => Compra()} />
        </div>
      </Container>
    </>
  );
};
export default CheckoutContainer;
