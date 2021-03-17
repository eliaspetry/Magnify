import * as React from 'react';
import { Row, Col, Accordion, Card} from "react-bootstrap";
import { questions } from "../components/FAQContent";

interface IFAQProps {
    question : string;
    answer : string;
    eventKey: string;
}

const FAQ: React.FunctionComponent<IFAQProps> = (props) => {
    return (
    <>
        <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
            <div className="circles-to-rhombuses-spinner">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            </div>
            {props.question}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.eventKey}>
            <Card.Body>
                {props.answer}
            </Card.Body>
        </Accordion.Collapse>
    </>
    );
};


interface IFAQPanelProps {
}

const FAQPanel: React.FunctionComponent<IFAQPanelProps> = (props) => {
    return (
    <Row>
        <Col>
            <Accordion defaultActiveKey="0" className="faq-panel centered">
                <Card>
                    {questions.map((question, index) => <FAQ question={question[0]} answer={question[1]} eventKey={`${index + 1}`}></FAQ>)}
                </Card>
            </Accordion>
        </Col>
    </Row>
    );
};


export { FAQPanel };
