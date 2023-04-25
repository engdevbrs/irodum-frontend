import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/TermsAndConditions.css';
import { useStepperContext } from '../contexts/StepperContext';
import { useStepperContextPyme } from '../contexts/StepperContextPyme.js'
import TermsAndConditions from '../layouts/TermsAndConditions';

const TermsConditionsAccept = () => {

    const [show, setShow] = useState(true);
    const { userData, setUserData } = useStepperContext();
    const { userDataPyme , setUserDataPyme } = useStepperContextPyme();
    const [disabledButton, setDisabledButton] = useState(true);
    const TermsConditions = document.getElementById('nextButton');
    TermsConditions.disabled = disabledButton;

    const handleChange = (e) => {
        if(userData === "" || userData === undefined){
            setUserDataPyme({ ...userDataPyme, ['agreeconditions']: e.target.checked });
            setUserDataPyme({ ...userDataPyme, ['type']: 1 });
        }else if(userDataPyme === "" || userDataPyme === undefined){
            setUserData({ ...userData, ['agreeconditions']: e.target.checked });
            setUserData({ ...userData, ['type']: 0 });
        }
        setDisabledButton(!disabledButton)
        TermsConditions.disabled = disabledButton;
    };

    const handleSubmit = (event) =>{
        Object.defineProperty(event, 'continue', {
            value: true,
            writable: true
        });
    }

    useEffect(() => {
        document.getElementById("menuHolder").scrollIntoView();      
        document.addEventListener(userData === "" || userData === undefined ? 'handleEventPyme' : 'handleEvent', handleSubmit);
        return () => {
            document.removeEventListener(userData === "" || userData === undefined ? 'handleEventPyme' : 'handleEvent', handleSubmit);
        }
    },[]);

    return (
        <>
        <Container className='contenedorTerms mt-5 mb-5 p-0'>
            <Row className='terms'>
            <Col>
                <Alert show={show} variant='warning' onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Hola, estamos agradecidos de que hayas llegado a este punto.</Alert.Heading>
                    <p>
                        Como <strong>Irodum.com</strong>, te deseamos lo mejor en este desafío y la mayor de las suertes,
                        esperamos poder ayudarte al menos una vez en encontrar trabajo, ya sea temporal o permanente.
                        Nuestro objetivo es que así sea :).
                    </p>
                    <hr />
                    <p className='mb-0'>
                        A continuación, <strong>te recomendamos leer los términos y condiciones.</strong>
                    </p>
                </Alert>
            </Col>
            <Col className='conditions'>
                <TermsAndConditions />
            </Col>
            <Col>
                <Form>
                    <div key='checkbox' className='mb-3 mt-3'>
                    <Form.Check 
                        type='checkbox'
                        id='checkbox'
                        name='agreeconditions'
                        onClick={(e) =>handleChange(e)}
                        label={<h6><strong>Acepto los términos y condiciones.</strong></h6>}
                    />
                    </div>
                </Form>
            </Col>
            </Row>
        </Container>
      </>
    )
}

export default TermsConditionsAccept
