import * as React from 'react';
import { Dialog, DialogTitle } from "@material-ui/core";
import { Image } from "react-bootstrap";
import logo from "../static/logo.png";

interface ISuccessPopupProps {
    open: boolean;
    handleClose: () => void;
    customerName: string;
    customerMail: string;
}

const SuccessPopup: React.FunctionComponent<ISuccessPopupProps> = (props) => {


    return (
    <Dialog aria-labelledby="simple-dialog-title" className="success-popup" open={props.open} onClose={props.handleClose}>
        <DialogTitle id="simple-dialog-title" className="success-popup-title">¡Listo! <span className="success-popup-title-icon">👍</span></DialogTitle>
        <h3 className="success-popup-greeting">Gracias, <span className="success-popup-name">{props.customerName}</span>.</h3>
        <p className="success-popup-body">
            Hemos recibido correctamente tu solicitud. En breve te mandaremos un mensaje para acordar fecha y hora para tu sesión gratuita a través del correo que nos facilitaste: <span className="success-popup-mail">{props.customerMail}</span>.
            <br></br>
            <br></br>
            Mientras, si te queda alguna duda, te animamos a echar un vistazo a las preguntas frecuentes (abajo).
        </p>
        <h4 className="success-popup-closing">¡Seguimos en contacto!</h4>

        <div className="centered">
            <p className="success-popup-signature">El equipo de</p>
            <Image className="success-popup-signature-image" alt="signature" src={logo}></Image>
        </div>

        <p className="success-popup-famous-quote">"La esencia del impacto es decir las cosas de una forma en que otros nunca las han dicho." - William Bernbach.</p>
    </Dialog>
    );
};

export { SuccessPopup };
