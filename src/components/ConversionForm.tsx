import * as React from 'react';
import { useState, useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";
import megaphoneMan from "../static/megaphone-man.jpg";
import { SuccessPopup } from "../components/SuccessPopup";

const defaultFormQuote = "¡Pide ya una sesión de consultoría gratuita y sin compromiso!";
const conversionFormNameQuote = "¿Cómo te llamas? ¿Javier? ¿María? ¿Hulk? 🧐";
const conversionFormNameAbort = "¡Oh, vamos, no seas tímid@! 😄";
const conversionFormMailQuote = "¿A qué correo prefieres que te escribamos? 📧";
const conversionFormMailAbort = "No compartiremos tu dirección ni te bombardearemos a spam. Prometido. 🔒";
const conversionFormSubmitQuote = "¡Muy bien, ya casi lo tienes! 👊";
const conversionFormInvalid = "Vaya, parece que hay campos vacíos o con información inválida. 🕵️‍♂️"

interface IConversionFormProps {
}

const ConversionForm: React.FunctionComponent<IConversionFormProps> = (props) => {
  const [customerName, setCustomerName] = useState("");
  const [customerMail, setCustomerMail] = useState("");
  const [open, setOpen] = useState(false);

  const quoteContainer = useRef(document.createElement("div"));

  const invalidCls = "conversion-form-quote-invalid";

  const resetQuoteColor = () => {
    quoteContainer.current.classList.remove(invalidCls);
  };

  const changeQuote = (quote : string) => {
    resetQuoteColor();
    quoteContainer.current.innerHTML = quote;
  };

  const validateName = () => {
      return customerName.length > 1 && customerName.length <= 16 ? true : false;
  };

  const validateMail = () => {
    const pattern = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return pattern.test(customerMail);
  };

  const checkForm = () => {
    if (validateName() && validateMail()) {
      setOpen(true);
    } else {
      changeQuote(conversionFormInvalid);

      //Make font change to error color and remove past X ms.
      quoteContainer.current.classList.add(invalidCls);
      setTimeout(() => quoteContainer.current.classList.remove(invalidCls), 2000);
    }
  };

  const closePopup = () => {
    changeQuote(defaultFormQuote);
    setCustomerName("");
    setCustomerMail("");
    setOpen(false);
  }

  return (
    <>
      <Row className="conversion-form-panel m-3">
        <Col sm={12} md={4} className="conversion-form-image-container">
          <Row>
            <Col>
              <Image className="conversion-form-image" alt="conversion-form-image" src={megaphoneMan} />
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={8} className="conversion-form-cta-container">
          <Row className="m-3">
            <Col>
              <h3 className="conversion-form-emphasize" ref={quoteContainer}>{defaultFormQuote}</h3>
            </Col>
          </Row>
          <Row className="m-3">
            <Col>
              <input
              className="conversion-form-input" type="text" placeholder="Nombre"
              value={customerName}
              onChange={e => setCustomerName(e.target.value)}
              onFocus={() => changeQuote(conversionFormNameQuote)}
              onBlur={() => validateName() ? changeQuote(`¡El gusto es nuestro, ${customerName}! 🤟`) : changeQuote(conversionFormNameAbort)}
              ></input>
            </Col>
          </Row>
          <Row className="m-3">
            <Col>
              <input className="conversion-form-input" type="text" placeholder="Correo Electrónico"
              value={customerMail}
              onChange={e => setCustomerMail(e.target.value)}
              onFocus={() => changeQuote(conversionFormMailQuote)}
              onBlur={() => validateMail() ? changeQuote(conversionFormSubmitQuote) : changeQuote(conversionFormMailAbort)}
              ></input>
            </Col>
          </Row>
          <Row className="m-3">
            <Col>
              <button className="conversion-form-button" onClick={checkForm}>Solicitar</button>
              <SuccessPopup open={open} handleClose={closePopup} customerName={customerName} customerMail={customerMail}></SuccessPopup>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};


export { ConversionForm };