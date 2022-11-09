import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import Axios  from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/Profile.css'
import { Alert, Button, Card, Container, Form, InputGroup, Modal, Nav, OverlayTrigger, Tab, Tabs, Tooltip } from 'react-bootstrap'
import Comments from './Comments'
import ViewClientProjects from './ViewClientProjects'
import solicitudbutton from '../assets/solicitud-button.png';
import rating from '../assets/rating.png';

const ViewClientProfile = () => {

    const { id } = useParams();
    const [ dataUser, setDataUser ] = useState([])
    const [ response, setResponse ] = useState([])
    const [show, setShow] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showModalComment, setShowModalComment] = useState(false);

    const [localidades, setLocalidades] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [comunas, setComunas] = useState([]);

    const [nombreValid, setNombreValid] = useState(false);
    const [apellidosValid, setApellidosValid] = useState(false);
    const [rutValid, setRutValid] = useState(false);
    const [cellphoneValid, setCellphoneValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [streetValid, setStreetValid] = useState(false);
    const [psjeValid, setPsjeValid] = useState(false);
    const [houseNumberValid, setHouseNumberValid] = useState(false);
    const [dptoDirValid, setDptoDirValid] = useState(false);
    const [dptoFloorValid, setDptoFloorValid] = useState(false);
    const [dptoNumberValid, setDptoNumberValid] = useState(false);
    const [regionValid, setRegionValid] = useState(false);
    const [cityValid, setCityValid] = useState(false);
    const [comunneValid, setComunneValid] = useState(false);
    const [descriptWorkValid, setDescriptWorkValid] = useState(false);
    const [noRanked, setNoRanked] = useState(false);

    const [nombreValidMsge, setNombreValidMsge] = useState([]);
    const [apellidosValidMsge, setApellidosValidMsge] = useState([]);
    const [cellphoneValidMsge, setCellphoneValidMsge] = useState([]);
    const [emailValidMsge, setEmailValidMsge] = useState([]);
    const [streetValidMsge, setStreetValidMsge] = useState([]);
    const [psjeValidMsge, setPsjeValidMsge] = useState([]);
    const [houseNumberValidMsge, setHouseNumberValidMsge] = useState([]);
    const [dptoDirValidMsge, setDptoDirValidMsge] = useState([]);
    const [dptoFloorValidMsge, setDptoFloorValidMsge] = useState([]);
    const [dptoNumberValidMsge, setDptoNumberValidMsge] = useState([]);
    const [customValidity, setCustomValidity] = useState([]);
    const [descriptWorkValidMsge, setDescriptWorkValidMsge] = useState([]);
    const [switchCharge, setSwitchCharge] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [ responseRequest, setResponseRequest ] = useState([])
    const [ratingScoreResp, setRatingScoreResp] = useState(0)
    const [ratingScoreHones, setRatingScoreHones] = useState(0)
    const [ratingScoreCuidad, setRatingScoreCuidad] = useState(0)
    const [ratingScorePunt, setRatingScorePunt] = useState(0)
    const [ratingScorePrecio, setRatingScorePrecio] = useState(0)


    const handleClose = () => {

        setShowModal(false)
        setShowAlert(false)
        clearForm()
    }
    const handleShow = () => setShowModal(true);

    const handleCloseComment = () => {

        setShowModalComment(false)
        setShowAlert(false)
        clearFormComment()
    }
    const handleShowComment = () => setShowModalComment(true);

    const clearForm = () => {

        document.getElementById('requestForm').reset()

        setNombreValid(false)
        setNombreValidMsge('')

        setApellidosValid(false)
        setApellidosValidMsge('')

        setRutValid(false)
        setCustomValidity('')

        setCellphoneValid(false)
        setCellphoneValidMsge('')

        setEmailValid(false)
        setEmailValidMsge('')

        setStreetValid(false)
        setStreetValidMsge('')

        setPsjeValid(false)
        setPsjeValidMsge('')

        setHouseNumberValid(false)
        setHouseNumberValidMsge('')

        setDptoDirValid(false)
        setDptoDirValidMsge('')

        setDptoFloorValid(false)
        setDptoFloorValidMsge('')

        setDptoNumberValid(false)
        setDptoNumberValidMsge('')

        setDescriptWorkValid(false)
        setDescriptWorkValidMsge('')

        setRegionValid(false)

        setCityValid(false)

        setComunneValid(false)

    }

    const clearFormComment = () => {

        document.getElementById('commentForm').reset()

        setNombreValid(false)
        setNombreValidMsge('')

        setApellidosValid(false)
        setApellidosValidMsge('')

        setEmailValid(false)
        setEmailValidMsge('')


        setDescriptWorkValid(false)
        setDescriptWorkValidMsge('')

        setRatingScoreCuidad(0)
        setRatingScoreResp(0)
        setRatingScorePunt(0)
        setRatingScoreHones(0)
        setRatingScorePrecio(0)

    }

    const handleChange = (e) => {
        if(e.target.name === 'clientName'){
            checkName(e.target.value)
        }else if(e.target.name === 'clientLastname'){
            checkLastName(e.target.value)
        }else if(e.target.name === 'clientRut'){
            checkRut(e.target)
        }else if(e.target.name === 'clientPhone'){
            checkCellphone(e.target.value)
        }else if(e.target.name === 'clientEmail'){
            checkEmail(e.target.value)
        }else if(e.target.name === 'deptoClient'){
            checkDeptoClient(e.target.value)
        }else if(e.target.name === 'floorNumber'){
            checkFloorNumber(e.target.value)
        }else if(e.target.name === 'deptoNumber'){
            checkDeptoClientNumber(e.target.value)
        }else if(e.target.name === 'streetClient'){
            checkStreet(e.target.value)
        }else if(e.target.name === 'pasajeClient'){
            checkPasajeClient(e.target.value)
        }else if(e.target.name === 'houseNumber'){
            checkHouseNumber(e.target.value)
        }else if(e.target.name === 'descriptWork'){
            checkDescriptWork(e.target.value)
        }else if(e.target.name === 'comunne'){
            if(e.target.value !== ''){
                setComunneValid(false)
            }else{
                setComunneValid(true)
            }
        }
    }

    const handleRegionChange = (e) => {
        const ciudadIndex = document.getElementById('region').value;
        ciudadIndex !== '' ? setRegionValid(false) : setRegionValid(true)
        if(ciudadIndex === ''){
            setCiudades([]);
            setComunas([]);
            return false
        }
        const ciudadesIndex = localidades.find(element => {
            return element.region === ciudadIndex;
        });
        setCiudades(ciudadesIndex.ciudad);
        setComunas([]);
    }

    const handleCityChange = (e) => {
        const cityName = document.getElementById('city').value;
        cityName !== '' ? setCityValid(false) : setCityValid(true)
        if(cityName === ''){
            setComunas([]);
            return false
        }
        const comunasData = ciudades.find(element => {
            return element[0] === cityName;
        });
        setComunas(comunasData[1].comunas);
    }

    const clearSwitchValues = (e) =>{

        if(switchCharge === false){

            setStreetValid(false)
            setStreetValidMsge('')
    
            setPsjeValid(false)
            setPsjeValidMsge('')
    
            setHouseNumberValid(false)
            setHouseNumberValidMsge('')

            document.getElementById('streetClient').value = ''
            document.getElementById('pasajeClient').value = ''
            document.getElementById('houseNumber').value = ''

        }else{
            
            setDptoDirValid(false)
            setDptoDirValidMsge('')
    
            setDptoFloorValid(false)
            setDptoFloorValidMsge('')
    
            setDptoNumberValid(false)
            setDptoNumberValidMsge('')

            document.getElementById('deptoClient').value = ''
            document.getElementById('floorNumber').value = ''
            document.getElementById('deptoNumber').value = ''
        }
    }

    const handleSubmit = () =>{

        let validation = null
        let arrayValues = [];
        const formValues = document.getElementsByClassName('requestForm')[0].elements;

        let checkNameValue = checkName(document.getElementById('clientName').value);
        let checkLastNameValue = checkLastName(document.getElementById('clientLastname').value);
        let checkRutValue = checkRut(document.getElementById('clientRut'));
        let checkCellphoneValue = checkCellphone(document.getElementById('clientPhone').value);
        let checkEmailValue = checkEmail(document.getElementById('clientEmail').value);

        let checkRegionValue = checkRegion(document.getElementById('region').value);
        let checkCityValue = checkCity(document.getElementById('city').value);
        let checkComunneValue = checkComunne(document.getElementById('comunne').value);
        let checkDescriptWorkValue = checkDescriptWork(document.getElementById('descriptWork').value);

        if(switchCharge){
            
            let checkDeptoClientValue = checkDeptoClient(document.getElementById('deptoClient').value)
            let checkFloorNumberValue = checkFloorNumber(document.getElementById('floorNumber').value)
            let checkDeptoClientNumberValue = checkDeptoClientNumber(document.getElementById('deptoNumber').value)

            validation = (checkNameValue === false && checkLastNameValue === false && checkRutValue === false
                && checkCellphoneValue === false && checkEmailValue === false && checkRegionValue === false && checkCityValue === false 
                && checkComunneValue === false && checkDeptoClientValue === false && checkFloorNumberValue === false && checkDeptoClientNumberValue === false
                && checkDescriptWorkValue === false)
        }else{

            let checkStreetValue = checkStreet(document.getElementById('streetClient').value)
            let checkPasajeClientValue = checkPasajeClient(document.getElementById('pasajeClient').value)
            let checkHouseNumberValue = checkHouseNumber(document.getElementById('houseNumber').value)

            validation = (checkNameValue === false && checkLastNameValue === false && checkRutValue === false
                && checkCellphoneValue === false && checkEmailValue === false && checkRegionValue === false && checkCityValue === false 
                && checkComunneValue === false && checkStreetValue === false && checkPasajeClientValue === false && checkHouseNumberValue === false && checkDescriptWorkValue === false);
        }
 
        if(validation){

            [...formValues].forEach((elements) =>{
                if(switchCharge){
                    if(elements.name !== 'streetClient' && elements.name !== 'pasajeClient' && elements.name !== 'houseNumber' ){
                        arrayValues.push(elements.name === 'switch' ? elements.checked : elements.value);
                    }
                }else{
                    if(elements.name !== 'deptoClient' && elements.name !== 'floorNumber' && elements.name !== 'deptoNumber' ){
                        arrayValues.push(elements.name === 'switch' ? elements.checked : elements.value);
                    }
                }
                
            })

            arrayValues.push(dataUser[0].email,dataUser[0].rutUser,dataUser[0].nameUser)

            Axios.post('http://54.174.104.208:3001/api/request-work',arrayValues)
            .then((result) => {
                if(result.status === 200){
                    setResponseRequest(result.status)
                    setShowAlert(true)
                    clearForm()
                    Axios.post('http://54.174.104.208:3001/api/requestEmail',arrayValues)
                    .then((result) => {
                        if(result.status === 200){
                            console.log(result);
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                }
            }).catch(error => {
                setResponseRequest(error.response.status)
                setShowAlert(true)
            });
        }
    }

    const handleSubmitComment = () =>{

        let arrayValues = [];

        let scoreObject = {
            responsabilidad: null,
            puntualidad: null,
            honestidad: null,
            cuidadoso: null,
            precio: null
        }

        const formValues = document.getElementsByClassName('commentForm')[0].elements;

        let checkNameValue = checkName(document.getElementById('clientName').value);
        let checkLastNameValue = checkLastName(document.getElementById('clientLastname').value);
        let checkEmailValue = checkEmail(document.getElementById('clientEmail').value);
        let checkDescriptWorkValue = checkDescriptWork(document.getElementById('descriptWork').value);

        let ratingValidation =  ratingScoreResp !== 0 && ratingScorePunt !== 0 && ratingScoreHones !== 0 && ratingScoreCuidad !== 0 
                                && ratingScorePrecio !== 0

        ratingValidation === true ? setNoRanked(false) : setNoRanked(true)

        let validation = (checkNameValue === false && checkLastNameValue === false && checkEmailValue === false && checkEmailValue === false 
            && checkDescriptWorkValue === false && ratingValidation === true);
        

        if(validation){

            [...formValues].forEach((elements) =>{
                arrayValues.push(elements.value)
            })

            scoreObject = {
                responsabilidad: ratingScoreResp,
                puntualidad: ratingScorePunt,
                honestidad: ratingScoreHones,
                cuidadoso: ratingScoreCuidad,
                precio: ratingScorePrecio
            }
            arrayValues.push(scoreObject)
            console.log(arrayValues);
            // Axios.post('http://54.174.104.208:3001/api/request-work',arrayValues)
            // .then((result) => {
            //     if(result.status === 200){
            //         setResponseRequest(result.status)
            //         setShowAlert(true)
            //         clearForm()
            //         Axios.post('http://54.174.104.208:3001/api/requestEmail',arrayValues)
            //         .then((result) => {
            //             if(result.status === 200){
            //                 console.log(result);
            //             }
            //         }).catch(error => {
            //             console.log(error);
            //         });
            //     }
            // }).catch(error => {
            //     setResponseRequest(error.response.status)
            //     setShowAlert(true)
            // });
        }
    }

    const checkName = (name) =>{
        const regName = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
        if(name.length > 0){
            if(!regName.test(name)){
                setNombreValidMsge('Por favor, sólo ingrese letras.')
                setNombreValid(true)
                return true
            }else{
                setNombreValidMsge('')
                setNombreValid(false)
                return false
            }
        }else{
            setNombreValidMsge('Por favor, ingrese su nombre.')
            setNombreValid(true)
            return true
        }
    }

    const checkLastName = (lastname) =>{
        const regLastname = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
        if(lastname.length > 0){
            if(!regLastname.test(lastname)){
                setApellidosValidMsge('Por favor, sólo ingrese letras.')
                setApellidosValid(true)
                return true
            }else{
                setApellidosValidMsge('')
                setApellidosValid(false)
                return false
            }
        }else{
            setApellidosValidMsge('Por favor, ingrese sus apellidos.')
            setApellidosValid(true)
            return true
        }
    }

    const checkRut = (rut) => {
        // Despejar Puntos
        var valor = rut.value.replace('.','');
        // Despejar Guión
        valor = valor.replace('-','');
        
        // Aislar Cuerpo y Dígito Verificador
        let cuerpo = valor.slice(0,-1);
        let dv = valor.slice(-1).toUpperCase();
        
        // Si no cumple con el mínimo ej. (n.nnn.nnn)
        if(cuerpo.length < 7 && valor.length !== 0){ 
            setRutValid(true)
            setCustomValidity("RUT Incompleto"); 
            return true
        }else if(valor.length === 0){
            setRutValid(true)
            setCustomValidity("Por favor, ingrese su RUT"); 
            return true
        }
        
        // Calcular Dígito Verificador
        let suma = 0;
        let multiplo = 2;
        
        // Para cada dígito del Cuerpo
        for(let i=1;i<=cuerpo.length;i++){
        
            // Obtener su Producto con el Múltiplo Correspondiente
            let index = multiplo * valor.charAt(cuerpo.length - i);
            
            // Sumar al Contador General
            suma = suma + index;
            
            // Consolidar Múltiplo dentro del rango [2,7]
            if(multiplo < 7){ 
                multiplo = multiplo + 1; 
            }else{ 
                multiplo = 2; 
            }
        }
        
        // Calcular Dígito Verificador en base al Módulo 11
        let dvEsperado = 11 - (suma % 11);
        
        // Casos Especiales (0 y K)
        dv = (dv === 'K') ? 10 : dv;
        dv = (parseInt(dv,10) === 0) ? 11 : dv;
        
        // Validar que el Cuerpo coincide con su Dígito Verificador
        if(dvEsperado !== parseInt(dv,10)){ 
            setRutValid(true)
            setCustomValidity("RUT Inválido"); 
            return true; 
        }
        
        // Si todo sale bien, eliminar errores (decretar que es válido)
        setRutValid(false)
        setCustomValidity("RUT válido");
        return false
    }

    const checkCellphone = (cell) =>{
        const regCell = new RegExp('^[0-9]+$');
        if(cell.length === 8 && regCell.test(cell)){
            setCellphoneValidMsge('')
            setCellphoneValid(false)
            return false
        }else if(cell.length < 8 && regCell.test(cell)){
            setCellphoneValidMsge('Ingrese los 8 números de su número de celular.')
            setCellphoneValid(true)
            return true
        }else if(cell.length <= 8 && !regCell.test(cell)){
            setCellphoneValidMsge('Número de celular no válido.')
            setCellphoneValid(true)
            return true
        }
    }

    const checkDeptoClient = (dptoClient) =>{
        const regdptoClient = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~´]/);
        if(dptoClient !== '' && dptoClient !== null && dptoClient !== undefined){
            if(!regdptoClient.test(dptoClient)){
                setDptoDirValid(false)
                setDptoDirValidMsge('')
                return false
            }else{
                setDptoDirValid(true)
                setDptoDirValidMsge('Por favor, ingrese sólo letras o números.')
                return true
            }
        }else{
            setDptoDirValid(true)
            setDptoDirValidMsge('Por favor, ingrese la dirección de su departamento.')
            return true
        }

    }

    const checkFloorNumber = (floor) =>{
        const regfloor = new RegExp('^[0-9]+$')
        if(floor !== '' && floor !== null && floor !== undefined){
            if(regfloor.test(floor)){
                setDptoFloorValid(false)
                setDptoFloorValidMsge('')
                return false
            }else{
                setDptoFloorValid(true)
                setDptoFloorValidMsge('Por favor, ingrese sólo números.')
                return true
            }
        }else{
            setDptoFloorValid(true)
            setDptoFloorValidMsge('Por favor, ingrese el número de su piso.')
            return true
        }

    }

    const checkDeptoClientNumber = (dptoClientNumber) =>{
        const regdptoClientNumber = new RegExp('^[0-9]+$');
        if(dptoClientNumber !== '' && dptoClientNumber !== null && dptoClientNumber !== undefined){
            if(regdptoClientNumber.test(dptoClientNumber)){
                setDptoNumberValid(false)
                setDptoNumberValidMsge('')
                return false
            }else{
                setDptoNumberValid(true)
                setDptoNumberValidMsge('Por favor, ingrese sólo números.')
                return true
            }
        }else{
            setDptoNumberValid(true)
            setDptoNumberValidMsge('Por favor, ingrese el número de departamento.')
            return true
        }
    }

    const checkStreet = (street) =>{
        const regStreet = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~´]/);
        if(street !== '' && street !== null && street !== undefined){
            if(!regStreet.test(street)){
                setStreetValid(false)
                setStreetValidMsge('')
                return false
            }else{
                setStreetValid(true)
                setStreetValidMsge('Por favor, ingrese sólo letras.')
                return true
            }
        }else{
            setStreetValid(true)
            setStreetValidMsge('Por favor, ingrese el nombre de su calle.')
            return true
        }
        
    }

    const checkPasajeClient = (psjeClient) =>{
        const regpsjeClient = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~´]/);
        if(psjeClient !== '' && psjeClient !== null && psjeClient !== undefined){
            if(!regpsjeClient.test(psjeClient)){
                setPsjeValid(false)
                setPsjeValidMsge('')
                return false
            }else{
                setPsjeValid(true)
                setPsjeValidMsge('Por favor, ingrese sólo números o letras.')
                return true
            }
        }else{
            setPsjeValid(false)
            setPsjeValidMsge('')
            return false
        }
    }

    const checkHouseNumber = (houseNumber) =>{
        const reghouseNumber = new RegExp('^[0-9]+$');
        if(houseNumber !== '' && houseNumber !== null && houseNumber !== undefined){
            if(reghouseNumber.test(houseNumber)){
                setHouseNumberValid(false)
                setHouseNumberValidMsge('')
                return false
            }else{
                setHouseNumberValid(true)
                setHouseNumberValidMsge('Por favor, ingrese sólo números.')
                return true
            }
        }else{
            setHouseNumberValid(true)
            setHouseNumberValidMsge('Por favor, ingrese su número de casa.')
            return true
        }
    }

    const checkDescriptWork = (descriptWork) =>{
        const regdescriptWork = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~´]/);
        if(descriptWork !== '' && descriptWork !== null && descriptWork !== undefined){
            if(!regdescriptWork.test(descriptWork)){
                setDescriptWorkValid(false)
                setDescriptWorkValidMsge('')
                return false
            }else{
                setDescriptWorkValid(true)
                setDescriptWorkValidMsge('Por favor, ingrese sólo letras o números.')
                return true
            }
        }else{
            setDescriptWorkValid(true)
            setDescriptWorkValidMsge('Por favor, ingrese una breve descripción del trabajo.')
            return true
        }
    }

    const checkEmail = (email) =>{
        const regEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if(email.length > 0){
            if(!regEmail.test(email)){
                setEmailValidMsge('Correo electrónico no válido.')
                setEmailValid(true)
                return true
            }else{
                setEmailValidMsge('')
                setEmailValid(false)
                return false
            }
        }else{
            setEmailValidMsge('Por favor, ingrese su correo electrónico.')
            setEmailValid(true)
            return true
        }
    }

    const checkRegion = (region) =>{
        if(region !== ''){
            setRegionValid(false)
            return false
        }else{
            setRegionValid(true)
            return true
        }
    }

    const checkCity = (city) =>{
        if(city !== ''){
            setCityValid(false)
            return false
        }else{
            setCityValid(true)
            return true
        }
    }

    const checkComunne = (comunne) =>{
        if(comunne !== ''){
            setComunneValid(false)
            return false
        }else{
            setComunneValid(true)
            return true
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} hidden={showModal}>
            Enviar solicitud
        </Tooltip>
      );

    const renderTooltip2 = (props) => (
        <Tooltip id="button-tooltip" {...props} hidden={showModalComment}>
          Calificar Trabajador
        </Tooltip>
      );

    const handleRatingResp = (rate) => {
        setRatingScoreResp(rate)
    }

    const handleRatingPunt = (rate) => {
        setRatingScorePunt(rate)
    }

    const handleRatingHones = (rate) => {
        setRatingScoreHones(rate)
    }

    const handleRatingCuidad = (rate) => {
        setRatingScoreCuidad(rate)
    }

    const handleRatingPrecio = (rate) => {
        setRatingScorePrecio(rate)
    }
    
    useEffect(() =>{
        Axios.get("http://54.174.104.208:3001/api/localidades").then((res)=>{
            setLocalidades(res.data);
        }); 
        Axios.get("http://54.174.104.208:3001/api/view/profile/" + id)
          .then((result) => {
              if(result.status === 200){
                    setDataUser(result.data)
              }
          }).catch(error => {
                setResponse(error.response.status)
          });
    },[switchCharge])

    return(
        <>
            <Col>
                <Nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to={'/'} >Inicio</Link></li>
                        <li className="breadcrumb-item"><Link to={'/trabajadores'} >Trabajadores</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Perfil de usuario</li>
                    </ol>
                </Nav>
            </Col>
            {
                dataUser.map((element,key) =>{
                    let dateFormatted = null
                    const todayDate = new Date()
                    if(element.bornDate){
                        dateFormatted = new Date(element.bornDate)
                    }
                    todayDate.setFullYear( todayDate.getFullYear() - dateFormatted.getFullYear())
                    return(
                        <>
                            <Container className='profile-container shadow-lg rounded-3 mt-3 mb-5 p-4'>
                            {
                                show === true ? <Row className='mt-3 mb-3'><Alert onClose={() => setShow(false)} style={{backgroundColor: '#202A34', color: 'white'}} closeVariant='white' dismissible>
                                <Alert.Heading style={{color: '#aebbdc'}}>Para su seguridad, le sugerimos lo siguiente:</Alert.Heading>
                                <p style={{color: '#dfe3ec'}}>
                                Cada vez que visites el perfil de un trabajador, procura buscar su información
                                y validar sus datos, tales cómo:<strong> Nombre, Rut y Comuna</strong>. <br/>Para hacer ésto, te recomendamos visitar el siguiente
                                sitio web <Alert.Link href="https://www.nombrerutyfirma.com/" style={{color: '#fe6b68'}} target='_blank' >Rutificador</Alert.Link>.
                                </p>
                                </Alert></Row> : <></>
                            }
                            <Row>
                                <Col lg={12} className='shadow-lg rounded-1 p-2'>
                                    <h5>Información Personal</h5>
                                    <Row md={1} lg={1} className='rounded-4 mt-3 mb-3'>
                                    <Col lg={6}>
                                        <Row>
                                        <Col sm={3}>
                                        <p className="mb-0">Nombre completo</p>
                                        </Col>
                                        <Col sm={9}>
                                        <p className="text-muted mb-0">{element.nameUser + " " + element.lastnamesUser}</p>
                                        </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Rut</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{element.rutUser}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Celular</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0"><strong>9 </strong>{element.cellphone}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Email</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{element.email}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                    </Col>
                                    <Col lg={6}>
                                    <Row>
                                        <Col sm={3}>
                                        <p className="mb-0">Día de Nacimiento</p>
                                        </Col>
                                        <Col sm={9}>
                                        <p className="text-muted mb-0">{dateFormatted.toLocaleDateString()}</p>
                                        </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Años</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{todayDate.getFullYear()}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Lugar de residencia</p>
                                            </Col>
                                            <Col sm={9}>
                                            <p className="text-muted mb-0">{element.regionUser + ", " + element.cityUser + ", " + element.communeUser}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Oficio</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{element.workareaUser}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                    </Col>
                                    </Row>
                                    <h5>Clasificación Laboral</h5>
                                    <Tabs defaultActiveKey="home" id="justify-tab-example">
                                        <Tab eventKey="home" title="Rating">
                                            <Card>
                                                <Card.Body>
                                                <p className="mb-1" >Responsabilidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" >Puntualidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'72%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" >Honestidad</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" >Cuidadoso</p>
                                                <div className="progress rounded" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-4 mb-1" >Precio justo</p>
                                                <div className="progress rounded mb-2" style={{height: '5px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width:'66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                </Card.Body>
                                                <Card.Footer>
                                                    Calificación total: 4.5
                                                </Card.Footer>
                                            </Card>
                                        </Tab> 
                                        <Tab eventKey="proyects" title="Proyectos">
                                        <Col className='projects m-0'>
                                            <ViewClientProjects id={id}/>
                                        </Col>
                                        </Tab>
                                        <Tab eventKey="comments" title="Comentarios">
                                        <Col className='projects m-0'>
                                            <Comments />
                                        </Col>
                                        </Tab> 
                                    </Tabs>
                                </Col>
                            </Row>
                            <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                            >
                                <img className='solicitudbutton' src={solicitudbutton} alt="solicitud img" onClick={handleShow}/>
                            </OverlayTrigger>
                            <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip2}
                            >
                                <img className='rating' src={rating} alt="rating img" onClick={handleShowComment}/>
                            </OverlayTrigger>
                            <Modal className='modalrequest' show={showModal} onHide={handleClose} size="lg" centered style={{padding: '0px'}}>
                                <Modal.Header closeButton>
                                <Modal.Title>Solicitud de Trabajo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form id='requestForm' className='requestForm'>
                                    <div className='form-floating'>
                                        <p>Ingrese sus datos personales para que <strong>{element.nameUser}</strong> pueda tomar contacto con usted.</p>
                                    </div>
                                    <Row>
                                        <div className='form-floating col-md-4 mb-3'>
                                            <input type='text' className='form-control' id='clientName' name='clientName' placeholder='Nombre' 
                                            onChange={handleChange} />
                                            <label htmlFor='clientName'>Nombre<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                nombreValid === true ? <Form.Text className='mb-1'>
                                                    <span className='mb-1' style={{color: 'red'}}>{nombreValidMsge}</span></Form.Text> : nombreValidMsge
                                            }
                                        </div>
                                        <div className='form-floating col-md-8 mb-3'>
                                            <input type='text' className='form-control' id='clientLastname' name='clientLastname' placeholder='Apellido1 Apellido2'
                                            onChange={handleChange}/>
                                            <label htmlFor='clientLastname'>Apellidos<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                apellidosValid === true ? <Form.Text className='mb-1'>
                                                    <span className='mb-1' style={{color: 'red'}}>{apellidosValidMsge}</span></Form.Text> : apellidosValidMsge
                                            }
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className='form-floating col-md-4 mb-3'>
                                            <input type='text' className='form-control' id='clientRut' name='clientRut' placeholder='Ej: 123456789'
                                            onChange={handleChange} maxLength='9'/>
                                            <label htmlFor='clientRut'>Rut<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                rutValid === false ? <Form.Text className='mb-1'><span className='mb-1' style={{color: '#5f738f'}}>
                                                    {customValidity === 'RUT válido' ? '' : 'Sin puntos ni guión'}</span></Form.Text> : 
                                                    <Form.Text className='mb-1'>
                                                    <span className='mb-1' style={{color: 'red'}}>{customValidity}</span></Form.Text>
                                            }
                                        </div>
                                        <div className='form-floating col-md-8 mb-3'>
                                            <input type='email' className='form-control' id='clientEmail' name='clientEmail' placeholder='correo@gmail.com'
                                            onChange={handleChange}/>
                                            <label htmlFor='clientEmail'>Correo electrónico<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                emailValid === true ? <Form.Text className='mb-1'>
                                                <span className='mb-1' style={{color: 'red'}}>{emailValidMsge}</span></Form.Text> : emailValidMsge
                                            }
                                        </div>
                                    </Row>
                                    <Row className='mb-3'>
                                    <Col className='col-md-6'>
                                        <label>Número de Whatsapp<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                        <InputGroup >
                                            <InputGroup.Text style={{backgroundColor: '#29A71A', color: '#eaeaea'}}>+569 </InputGroup.Text>
                                            <input type='text' className='wsp-input form-control form-control-lg' id='clientPhone' name='clientPhone' placeholder='Ej: 12345678'
                                                onChange={handleChange} maxLength='8'/>
                                        </InputGroup>
                                        {
                                            cellphoneValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{cellphoneValidMsge}</span></Form.Text> : cellphoneValidMsge
                                        }
                                    </Col>
                                    </Row>
                                    <Row className="row m-1">
                                        <Col className="form-check form-switch mb-3">
                                            <input className="form-check-input" type="checkbox" id='switch' name='switch'  
                                            onClick={(e) => {setSwitchCharge(!switchCharge); clearSwitchValues(e)}} />
                                            <label className="form-check-label">¿Vives en Departamento?</label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {
                                            switchCharge === true ? 
                                            <>
                                                <div className='form-floating col-md-8 mb-3'>
                                                    <input type='text' className='form-control' id='deptoClient' name='deptoClient' placeholder='Manuel Rodriguez'
                                                    onChange={handleChange}/>
                                                    <label htmlFor='deptoClient'>Dirección del Departamento<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                                    {
                                                        dptoDirValid === true ? <Form.Text className='mb-1'>
                                                        <span className='mb-1' style={{color: 'red'}}>{dptoDirValidMsge}</span></Form.Text> : dptoDirValidMsge
                                                    }
                                                </div>
                                                <div className='form-floating col-lg-6 col-md-6 col-md-6 mb-3'>
                                                    <input type='number' className='form-control' id='floorNumber' name='floorNumber' placeholder='7'
                                                    onChange={handleChange}/>
                                                    <label htmlFor='floorNumber'>Número de piso<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                                    {
                                                        dptoFloorValid === true ? <Form.Text className='mb-1'>
                                                        <span className='mb-1' style={{color: 'red'}}>{dptoFloorValidMsge}</span></Form.Text> : dptoFloorValidMsge
                                                    }
                                                </div>
                                                <div className='form-floating col-lg-6 col-md-6 col-md-6 mb-3'>
                                                    <input type='text' className='form-control' id='deptoNumber' name='deptoNumber' placeholder='45'
                                                    onChange={handleChange}/>
                                                    <label htmlFor='deptoNumber'>Número de Departamento<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                                    {
                                                        dptoNumberValid === true ? <Form.Text className='mb-1'>
                                                        <span className='mb-1' style={{color: 'red'}}>{dptoNumberValidMsge}</span></Form.Text> : dptoNumberValidMsge
                                                    }
                                                </div>
                                            </> 
                                            :
                                            <>
                                                <div className='form-floating col-md-8 mb-3'>
                                                    <input type='text' className='form-control' id='streetClient' name='streetClient' placeholder='calle 1, Florida'
                                                    onChange={handleChange}/>
                                                    <label htmlFor='streetClient'>Calle<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                                    {
                                                        streetValid === true ? <Form.Text className='mb-1'>
                                                        <span className='mb-1' style={{color: 'red'}}>{streetValidMsge}</span></Form.Text> : streetValidMsge
                                                    }
                                                </div>
                                                <div className='form-floating col-lg-6 col-md-6 col-md-6 mb-3'>
                                                    <input type='text' className='form-control' id='pasajeClient' name='pasajeClient' placeholder='pasaje 3'
                                                    onChange={handleChange}/>
                                                    <label htmlFor='pasajeClient'>Pasaje</label>
                                                    {
                                                        psjeValid === false ? <Form.Text style={{color: '#5f738f'}}>Éste campo es opcional</Form.Text> : <Form.Text className='mb-1'>
                                                        <span className='mb-1' style={{color: 'red'}}>{psjeValidMsge}</span></Form.Text>
                                                    }
                                                </div>
                                                <div className='form-floating col-lg-6 col-md-6 col-md-6 mb-3'>
                                                    <input type='text' className='form-control' id='houseNumber' name='houseNumber' placeholder='23'
                                                    onChange={handleChange}/>
                                                    <label htmlFor='houseNumber'>Número de casa<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                                    {
                                                        houseNumberValid === true ? <Form.Text className='mb-1'>
                                                        <span className='mb-1' style={{color: 'red'}}>{houseNumberValidMsge}</span></Form.Text> : houseNumberValidMsge
                                                    }
                                                </div>
                                            </>
                                        }
                                    </Row>
                                    <Row>
                                        <div className='form-floating col-md-4 mb-3'>
                                            <select id='region' className='form-select' name='region' 
                                            onChange={handleRegionChange}>
                                            <option selected="" value="">Seleccionar región</option>
                                            {
                                                localidades.map((locations,key) => {
                                                    return(
                                                        <>
                                                        <option key={key} value={locations.region}>{locations.region}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                            </select>
                                            <label htmlFor='region' className='form-label'>Región<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                regionValid === true ? <Form.Text className='mb-1'>
                                                <span className='mb-1' style={{color: 'red'}}>Por favor, seleccione una región.</span></Form.Text> : ''
                                            }
                                        </div>
                                        <div className='form-floating col-md-4 mb-3'>
                                            <select id='city' className='form-select' name='city' 
                                            onChange={handleCityChange}>
                                            <option selected="" value="">Seleccionar provincia</option>
                                            {
                                                ciudades.map((cities,key) => {
                                                    return(
                                                        <>
                                                        <option key={key} value={cities[0]}>{cities[0]}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                            </select>
                                            <label htmlFor='city' className='form-label'>Provincia<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                cityValid === true ? <Form.Text className='mb-1'>
                                                <span className='mb-1' style={{color: 'red'}}>Por favor, seleccione una provincia.</span></Form.Text> : ''
                                            }
                                        </div>
                                        <div className='form-floating col-md-4 mb-3'>
                                            <select id='comunne' className='form-select' name='comunne' 
                                            onChange={handleChange}>
                                            <option selected="" value="">Seleccionar comuna</option>
                                            {
                                                comunas.map((comunnes,key) => {
                                                    return(
                                                        <>
                                                        <option key={key} value={comunnes}>{comunnes}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                            </select>
                                            <label htmlFor='comunne' className='form-label'>Comuna<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                comunneValid === true ? <Form.Text className='mb-1'>
                                                <span className='mb-1' style={{color: 'red'}}>Por favor, seleccione una comuna.</span></Form.Text> : ''
                                            }
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <textarea className='form-control' id='descriptWork' name='descriptWork' style={{ height: '100px' }}
                                            placeholder='Descripción del trabajo' maxLength={250} onChange={handleChange}></textarea>
                                            <label htmlFor='descriptWork'>Descripción del Trabajo<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                descriptWorkValid === true ? <Form.Text className='mb-1'>
                                                <span className='mb-1' style={{color: 'red'}}>{descriptWorkValidMsge}</span></Form.Text> : descriptWorkValidMsge
                                            }
                                        </div>
                                        {
                                            showAlert === true ? <div className='form-floating mb-3'><Alert key={responseRequest === 200 ? 'success' : 'danger'} variant={responseRequest === 200 ? 'success' : 'danger'}>
                                            {responseRequest === 200 ? 
                                            <>
                                                <i className="far fa-check-circle" style={{fontSize:'24px'}}></i>
                                                <span>{' '}Su solicitud fue enviada con éxito, le recomendamos estar atento/a a su correo electrónico o whatsapp.
                                                    <p className="mt-1">Se le ha enviado una copia del requerimiento a su email.</p>
                                                </span>
                                            </>
                                            : 
                                            <>
                                            <i className="far fa-times-circle" style={{fontSize:'24px'}}></i>
                                            <span>{' '}Lo sentimos, su solicitud no pudo ser procesada, pruebe nuevamente o intentelo mas tarde.</span>
                                            </>}
                                        </Alert></div> : ''
                                        }
                                    </Row>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button className='btn-request' onClick={handleSubmit}>
                                    Enviar Solicitud
                                </Button>
                                <Button variant="danger" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal className='modalcomment' show={showModalComment} onHide={handleCloseComment} size="lg" centered style={{padding: '0px'}}>
                                <Modal.Header closeButton>
                                <Modal.Title>Evaluación de Trabajo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form id='commentForm' className='commentForm'>
                                    <div className='form-floating'>
                                        <p>Califique al trabajador <strong>{element.nameUser}</strong> según su experiencia.</p>
                                    </div>
                                    <Row>
                                        <div className='form-floating col-md-5 mb-3'>
                                            <input type='text' className='form-control' id='clientName' name='clientName' placeholder='Nombre' 
                                            onChange={handleChange} />
                                            <label htmlFor='clientName'>Nombre<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                nombreValid === true ? <Form.Text className='mb-1'>
                                                    <span className='mb-1' style={{color: 'red'}}>{nombreValidMsge}</span></Form.Text> : nombreValidMsge
                                            }
                                        </div>
                                        <div className='form-floating col-md-7 mb-3'>
                                            <input type='text' className='form-control' id='clientLastname' name='clientLastname' placeholder='Apellido1 Apellido2'
                                            onChange={handleChange}/>
                                            <label htmlFor='clientLastname'>Apellidos<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                apellidosValid === true ? <Form.Text className='mb-1'>
                                                    <span className='mb-1' style={{color: 'red'}}>{apellidosValidMsge}</span></Form.Text> : apellidosValidMsge
                                            }
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className='form-floating col-md-5 mb-3'>
                                            <input type='email' className='form-control' id='clientEmail' name='clientEmail' placeholder='correo@gmail.com'
                                            onChange={handleChange}/>
                                            <label htmlFor='clientEmail'>Correo electrónico<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                emailValid === true ? <Form.Text className='mb-1'>
                                                <span className='mb-1' style={{color: 'red'}}>{emailValidMsge}</span></Form.Text> : emailValidMsge
                                            }
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <textarea className='form-control' id='descriptWork' name='descriptWork' style={{ height: '100px' }}
                                            placeholder='Comentario sobre el Trabajador' maxLength={250} onChange={handleChange}></textarea>
                                            <label htmlFor='descriptWork'>Comentario sobre el trabajador<span className='mb-1' style={{color: 'red'}}>*</span></label>
                                            {
                                                descriptWorkValid === true ? <Form.Text className='mb-1'>
                                                <span className='mb-1' style={{color: 'red'}}>{'Por favor, ingrese un comentario sobre este trabajador.'}</span></Form.Text> : descriptWorkValidMsge
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <label for="formFileMultiple" className="form-label">Evidencias del trabajo <span style={{color: 'red'}}>(8 fotos máximo)</span></label>
                                            <input className="form-control" type="file" id="formFileMultiple" multiple />
                                            <Form.Text style={{color: '#5f738f'}}>Éste campo es opcional</Form.Text>
                                        </div>
                                        <div className="mb-3">
                                        <h5 className="mb-3" style={{color: '#384451'}}>Del 1 al 5, como calificaría usted el trabajo realizado por {element.nameUser}</h5>
                                        <div id='responsabilidad'>
                                            <h6 style={{color: '#384451'}}>Responsabilidad: </h6>
                                            <Rating
                                                onClick={handleRatingResp}
                                                ratingValue={ratingScoreResp}
                                                size={32}
                                                label
                                                transition
                                                fillColor='orange'
                                                emptyColor='gray'
                                                className='resp'
                                            />
                                            <hr/>
                                        </div>
                                        <div id='puntualidad'>
                                            <h6 style={{color: '#384451'}}>Puntualidad: </h6>
                                            <Rating
                                                onClick={handleRatingPunt}
                                                ratingValue={ratingScorePunt}
                                                size={32}
                                                label
                                                transition
                                                fillColor='orange'
                                                emptyColor='gray'
                                                className='punt'
                                            />
                                            <hr/>
                                        </div>
                                        <div id='honestidad'>
                                            <h6 style={{color: '#384451'}}>Honestidad: </h6>
                                            <Rating
                                                onClick={handleRatingHones}
                                                ratingValue={ratingScoreHones}
                                                size={32}
                                                label
                                                transition
                                                fillColor='orange'
                                                emptyColor='gray'
                                                className='hones'
                                            />
                                            <hr/>
                                        </div>
                                        <div id='cuidadoso'>
                                            <h6 style={{color: '#384451'}}>Cuidadoso: </h6>
                                            <Rating
                                                onClick={handleRatingCuidad}
                                                ratingValue={ratingScoreCuidad}
                                                size={32}
                                                label
                                                transition
                                                fillColor='orange'
                                                emptyColor='gray'
                                                className='cuidad'
                                            />
                                            <hr/>
                                        </div>
                                        <div id='preciojusto'>
                                            <h6 style={{color: '#384451'}}>Precio : </h6>
                                            <Rating
                                                onClick={handleRatingPrecio}
                                                ratingValue={ratingScorePrecio}
                                                size={32}
                                                label
                                                transition
                                                fillColor='orange'
                                                emptyColor='gray'
                                                className='precio'
                                            />
                                            <hr/>
                                        </div>
                                        </div>
                                        {
                                            noRanked === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{`Por favor, califique las aptitudes de ${element.nameUser}`}</span></Form.Text> : ''
                                        }
                                    </Row>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button className='btn-request' onClick={handleSubmitComment}>
                                    Publicar Evaluación
                                </Button>
                                <Button variant="danger" onClick={handleCloseComment}>
                                    Cerrar
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            </Container>
                        </>
                    )
                })
            }
        </>
        )
}

export default ViewClientProfile