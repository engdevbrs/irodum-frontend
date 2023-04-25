import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Rating } from 'react-simple-star-rating'
import Axios  from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/Profile.css'
import { Alert, Button, ProgressBar, Container, Form, InputGroup, Modal, Nav, OverlayTrigger, Tab, Tabs, Tooltip, Card, Table } from 'react-bootstrap'
import Comments from './Comments'
import ViewClientProjects from './ViewClientProjects'
import solicitudbutton from '../assets/solicitud-button.png';
import rating from '../assets/rating.png';
import Ratings from './Ratings'
import SpecialitiesClient from './ClientSpecialitiesView'

const ViewPymeProfile = () => {

    const { id } = useParams();
    const MySwal = withReactContent(Swal)
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
    const [especialitiesWorker, setEspecialitiesWorker] = useState([])
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
    const [showAlertComment, setShowAlertComment] = useState(false)
    const [ responseRequest, setResponseRequest ] = useState([])
    const [ratingScoreResp, setRatingScoreResp] = useState(0)
    const [ratingScoreHones, setRatingScoreHones] = useState(0)
    const [ratingScoreCuidad, setRatingScoreCuidad] = useState(0)
    const [ratingScorePunt, setRatingScorePunt] = useState(0)
    const [ratingScorePrecio, setRatingScorePrecio] = useState(0)
    const [commentsWorker, setCommentsWorker] = useState([])
    const [ratingScore, setRatingScore] = useState(0);
    const [ updateProgress, setUpdateProgress ] = useState(0)
    const [ hiddenProgress, showProgress ] = useState(true)
    const [ incorrectTypeImage, setIncorrectTypeImage ] = useState(false)
    const [ incorrectLengthImage, setIncorrectLengthImage ] = useState(false)

    const handleClose = () => {

        setShowModal(false)
        setShowAlert(false)
        clearForm()
    }
    const handleShow = () => setShowModal(true);

    const handleCloseComment = () => {
        setShowModalComment(false)
        setShowAlertComment(false)
        setNoRanked(false)
        setUpdateProgress(0)
        showProgress(true)
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

    const onchangeWorkImage = (e) =>{
        let imgLength = e.files.length;
        if(imgLength > 4 ){
            setIncorrectLengthImage(true)
            setIncorrectTypeImage(false)
            return true
        }else{
            setIncorrectLengthImage(false)
            for(let i =0; i < imgLength; i++){
                if(e.files[i].type === "image/jpeg" || e.files[i].type === "image/jpg" || e.files[i].type === "image/png"){
                    setIncorrectTypeImage(false)
                }else{
                    setIncorrectTypeImage(true)
                    return true
                }
            }
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

            arrayValues.push(dataUser[0].email,dataUser[0].rutUser,dataUser[0].razonSocial,id)

            Axios.post('http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/request-work',arrayValues)
            .then((result) => {
                if(result.status === 200){
                    setResponseRequest(result.status)
                    setShowAlert(true)
                    clearForm()
                    Axios.post('http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/requestEmail',arrayValues)
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

        const formFileMultiple = new FormData();

        let arrayValues = [];

        let scoreObject = {
            responsabilidad: null,
            puntualidad: null,
            honestidad: null,
            cuidadoso: null,
            precio: null
        }

        const formValues = document.getElementsByClassName('commentForm')[0].elements;

        let formFiles = document.getElementById('formFileMultiple');

        let checkNameValue = checkName(document.getElementById('clientName').value);
        let checkLastNameValue = checkLastName(document.getElementById('clientLastname').value);
        let checkEmailValue = checkEmail(document.getElementById('clientEmail').value);
        let checkDescriptWorkValue = checkDescriptWork(document.getElementById('descriptWork').value);

        let ratingValidation =  ratingScoreResp !== 0 && ratingScorePunt !== 0 && ratingScoreHones !== 0 && ratingScoreCuidad !== 0 
                                && ratingScorePrecio !== 0

        ratingValidation === true ? setNoRanked(false) : setNoRanked(true)

        let validation = (checkNameValue === false && checkLastNameValue === false && checkEmailValue === false && checkEmailValue === false 
            && checkDescriptWorkValue === false && ratingValidation === true && incorrectLengthImage === false && incorrectTypeImage === false);
        

        if(validation){
            let idWorker = {
                employed: id
            };
            [...formValues].forEach((elements) =>{
                if(elements.type !== "file"){
                    arrayValues.push(elements.value)
                }
            })

            scoreObject = {
                responsabilidad: ratingScoreResp,
                puntualidad: ratingScorePunt,
                honestidad: ratingScoreHones,
                cuidadoso: ratingScoreCuidad,
                precio: ratingScorePrecio
            }

            arrayValues.push(dataUser[0].email)
            arrayValues.push(scoreObject)
            arrayValues.push(idWorker)

            for(let i = 0; i < (formFiles.files).length; i++){
                formFileMultiple.append('formFileMultiple',formFiles.files[i])
            }
            formFileMultiple.append('params', JSON.stringify(arrayValues))

            MySwal.fire({
                title: 'Estás seguro de subir esta evaluación?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Evaluar`,
                denyButtonText: `Cancelar`,
                }).then((result) => {
                    if(result.isConfirmed){
                        showProgress(false)
                        Axios.post('http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/rating-worker',formFileMultiple, config)
                        .then((result) => {
                            if(result.status === 200){
                                Swal.fire({
                                    title: '<strong>Calificación Enviada</strong>',
                                    icon: 'success',
                                    html:`<span>Su evaluación ha sido enviada con éxito..
                                        <p className="mt-1">Muchas gracias por colaborar con la comunidad, su calificación será de ayuda para futuros clientes.</p>
                                    </span>`,
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'Aceptar'
                                  }).then((result) => {
                                    if(result.isConfirmed){
                                        handleCloseComment()
                                    }
                                })
                                Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/worker/ratings/" + id)
                                .then((result) => {
                                    if(result.status === 200){
                                        let sumaTotal = null
                                        if((result.data).length > 0){
                                            (result.data).forEach(element => {
                                                let ratingParse = JSON.parse(element.aptitudRating)
                                                let sumaRating = (ratingParse.cuidadoso + ratingParse.honestidad + ratingParse.precio + ratingParse.puntualidad + ratingParse.responsabilidad) / 5;
                                                sumaTotal = (sumaTotal + sumaRating);
                                            });
                                        }
                                        sumaTotal = (sumaTotal / (result.data).length).toFixed(1)
                                        console.log(sumaTotal);
                                        setRatingScore(result.data)
                                        setCommentsWorker(result.data)
                                        Axios.put("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/worker/update-rating/" +id, {rankingTotal: sumaTotal})
                                        .then((result) => {
                                            if(result.status === 200){
                                                console.log("resultado: ",result.data);
                                            }
                                        }).catch(error => {
                                            
                                        });
                                    }
                                }).catch(error => {
                                    setResponse([])
                                });
                            }
                        }).catch(error => {
                            setResponse([])
                            Swal.fire({
                                icon: 'error',
                                    html:`<p className="mt-1">Lo sentimos, su solicitud no pudo ser procesada, intente de nuevo o más tarde...</p>`,
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'Aceptar'
                              }).then((result) => {
                                if(result.isConfirmed){
                                    handleCloseComment()
                                }
                            })
                        });
                    }
                })
        }
    }

    let config = {
        onUploadProgress: function(progressEvent) {
          let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
          setUpdateProgress(percentCompleted)
        }
    };

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
        var valor = rut.value.replace('.','');
        valor = valor.replace('-','');
        
        let cuerpo = valor.slice(0,-1);
        let dv = valor.slice(-1).toUpperCase();
        
        if(cuerpo.length < 7 && valor.length !== 0){ 
            setRutValid(true)
            setCustomValidity("RUT Incompleto"); 
            return true
        }else if(valor.length === 0){
            setRutValid(true)
            setCustomValidity("Por favor, ingrese su RUT"); 
            return true
        }
        
        let suma = 0;
        let multiplo = 2;
        
        for(let i=1;i<=cuerpo.length;i++){
        
            let index = multiplo * valor.charAt(cuerpo.length - i);
            
            suma = suma + index;
            
            if(multiplo < 7){ 
                multiplo = multiplo + 1; 
            }else{ 
                multiplo = 2; 
            }
        }
        
        let dvEsperado = 11 - (suma % 11);
        
        dv = (dv === 'K') ? 10 : dv;
        dv = (parseInt(dv,10) === 0) ? 11 : dv;
        
        if(dvEsperado !== parseInt(dv,10)){ 
            setRutValid(true)
            setCustomValidity("RUT Inválido"); 
            return true; 
        }
        
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
        <Tooltip id="button-tooltip" {...props} >
            Enviar solicitud
        </Tooltip>
      );

    const renderTooltip2 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
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
        Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/view/profile-pyme/" + id)
        .then((result) => {
            if(result.status === 200){
                  setDataUser(result.data)
            }
        }).catch(error => {
              setResponse([])
      });
        Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/localidades").then((res)=>{
            setLocalidades(res.data);
        }); 
        Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/worker/ratings/" + id)
          .then((result) => {
              if(result.status === 200){
                setRatingScore(result.data)
                setCommentsWorker(result.data)
              }
          }).catch(error => {
            setResponse([])
        });

        Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/download/speciality/" + id)
        .then((result) => {
            if(result.status === 200){
                setEspecialitiesWorker(result.data)
            }
        }).catch(error => {
            setEspecialitiesWorker([])
        });
        

    },[switchCharge])

    return(
        <>
            <Col>
                <Nav aria-label="breadcrumb" className="bg-light p-3 mb-4">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to={'/'} >Inicio</Link></li>
                        <li className="breadcrumb-item"><Link to={'/trabajadores'} >Trabajadores</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Perfil de pyme</li>
                    </ol>
                </Nav>
            </Col>
            {
                dataUser.map((element,key) =>{
                    let sumaTotal = null;
                    if(ratingScore.length > 0){
                        ratingScore.forEach(element => {
                            let ratingParse = JSON.parse(element.aptitudRating)
                            let sumaRating = (ratingParse.cuidadoso + ratingParse.honestidad + ratingParse.precio + ratingParse.puntualidad + ratingParse.responsabilidad) / 5;
                            sumaTotal = (sumaTotal + sumaRating);
                        });
                    }
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
                                <div className='rounded-1 p-2 text-center' style={{backgroundColor: '#202A34'}}>
                                    <h5 style={{color: 'rgb(226 226 226)'}}>Calificación</h5>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <Rating
                                            initialValue={ratingScore.length > 0 ? (sumaTotal / ratingScore.length).toFixed(1) : 0}
                                            size={32}
                                            fillColor='orange'
                                            emptyColor='gray'
                                            allowFraction={true}
                                            readonly={true}
                                        /><span style={{color: 'rgb(226 226 226)', fontSize: '16px', fontWeight: '600'}}>({ratingScore.length > 0 ? (sumaTotal / ratingScore.length).toFixed(1) : 0})</span>
                                    </div>
                                    <span style={{color: 'rgb(226 226 226)', fontSize: '16px', fontWeight: '600'}}>({ratingScore.length} calificaciones)</span>
                                </div>
                                <Col lg={12} className='shadow-lg rounded-1 p-2'>
                                    <h5>Información PYME</h5>
                                    <Row md={1} lg={1} className='rounded-4 mt-3 mb-3'>
                                    <Col lg={6}>
                                        <Row>
                                        <Col sm={3}>
                                        <p className="mb-0">Razón social</p>
                                        </Col>
                                        <Col sm={9}>
                                        <p className="text-muted mb-0">{element.razonSocial}</p>
                                        </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Rut empresa</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{element.rutEmployed}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Celular</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0" style={{ cursor: 'pointer'}} onClick={handleShow} ><strong>9 </strong>{element.cellphone}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Email</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0" style={{ cursor: 'pointer'}} onClick={handleShow} >{element.emailEmployed}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                    </Col>
                                    <Col lg={6}>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Ubicación</p>
                                            </Col>
                                            <Col sm={9}>
                                            <p className="text-muted mb-0">{element.regionEmployed + ", " + element.cityEmployed + ", " + element.communeEmployed}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Años de servicio</p>
                                            </Col>
                                            <Col sm={9}>
                                            <p className="text-muted mb-0">{element.experienceYears}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Actividad económica o Giro</p>
                                            </Col>
                                            <Col sm={9}><p className="text-muted mb-0">{element.economicActivity}</p>
                                            </Col>
                                        </Row>
                                        <hr/>
                                            {
                                            especialitiesWorker.length > 0 ?
                                            <>
                                            <Row className='mt-3'>
                                                <Col sm={12} lg={3} className="mb-2">
                                                <p className="mb-0">Especialidades</p>
                                                </Col>
                                                <Col sm={12} lg={9}>
                                                    {
                                                        especialitiesWorker.map(value =>{
                                                            let descriptSpec = JSON.parse(value.especialityDescript)
                                                            let specialityToString = Buffer.from(value.especialityDoc)
                                                            let speciality = JSON.parse(specialityToString)
                                                            let arrayEspecialities = []
                                                            let objectEspeciality = {
                                                                idEspeciality: null,
                                                                descript: null,
                                                                image: null,
                                                                fileType: null
                                                            }
                                                            objectEspeciality.idEspeciality = value.idworkerEspeciality
                                                            objectEspeciality.descript = descriptSpec[0]
                                                            objectEspeciality.image = speciality[0]
                                                            objectEspeciality.fileType = value.fileType
                                                            arrayEspecialities.push(objectEspeciality)
                                                                return(
                                                                    <>
                                                                        <SpecialitiesClient data={arrayEspecialities} />  
                                                                    </>
                                                                )
                                                        })
                                                    }
                                                </Col>
                                            </Row>
                                            <hr/>
                                            </>
                                        : <></>
                                        }
                                    </Col>
                                    </Row>
                                    <h5>Clasificación Laboral</h5>
                                    <Tabs defaultActiveKey="home" id="justify-tab-example">
                                        <Tab className='tabprof' eventKey="home" title="Rating">
                                            <Ratings data={ratingScore} />
                                        </Tab> 
                                        <Tab className='tabprof' eventKey="proyects" title="Proyectos">
                                            <ViewClientProjects id={id}/>
                                        </Tab>
                                        <Tab className='tabprof' eventKey="comments" title={`Comentarios (${commentsWorker.length})`}>
                                            <Comments data={commentsWorker} />
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
                                        <p>Ingrese sus datos personales para que <strong>{element.razonSocial}</strong> pueda tomar contacto con usted.</p>
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
                                        <p>Califique al trabajador <strong>{element.razonSocial}</strong> según su experiencia.</p>
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
                                            <label htmlFor="formFileMultiple" className="form-label">Evidencias del trabajo <span style={{color: 'red'}}>(4 fotos máximo)</span></label>
                                            <input className="form-control" type="file" id="formFileMultiple" onChange={e => onchangeWorkImage(e.target)} multiple />
                                            <Form.Text style={{color: '#5f738f'}}>Éste campo es opcional</Form.Text>
                                            <div>
                                            {
                                            incorrectTypeImage === true ? <Form.Text style={{color:'red'}}>El archivo debe ser: .JPG .JPEG .PNG</Form.Text> : 
                                            incorrectLengthImage === true ? <Form.Text style={{color:'red'}}>Sólo se permiten 4 fotos por comentario.</Form.Text> : ''}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                        <h5 className="mb-3" style={{color: '#384451'}}>Del 1 al 5, como calificaría usted el trabajo realizado por {element.razonSocial}</h5>
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
                                            <span className='mb-1' style={{color: 'red'}}>{`Por favor, califique las aptitudes de ${element.razonSocial}`}</span></Form.Text> : ''
                                        }
                                    </Row>
                                    <div className="mb-2" hidden={hiddenProgress}>
                                        <ProgressBar className='profprogress' now={updateProgress} label={`${updateProgress}%`}/>
                                    </div>
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

export default ViewPymeProfile