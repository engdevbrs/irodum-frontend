import React, { useEffect, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import Axios from 'axios'
import '../css/Personalnformation.css'
import { useStepperContext } from '../contexts/StepperContext.js'

const PersonalInformation = () => {
    const { userData, setUserData } = useStepperContext();
    const [localidades, setLocalidades] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [comunas, setComunas] = useState([]);

    const [nombreValid, setNombreValid] = useState(false);
    const [apellidosValid, setApellidosValid] = useState(false);
    const [rutValid, setRutValid] = useState(false);
    const [cellphoneValid, setCellphoneValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [borndateValid, setBornDateValid] = useState(false);
    const [regionValid, setRegionValid] = useState(false);
    const [cityValid, setCityValid] = useState(false);
    const [comunneValid, setComunneValid] = useState(false);

    const [nombreValidMsge, setNombreValidMsge] = useState([]);
    const [apellidosValidMsge, setApellidosValidMsge] = useState([]);
    const [cellphoneValidMsge, setCellphoneValidMsge] = useState([]);
    const [emailValidMsge, setEmailValidMsge] = useState([]);
    const [borndateValidMsge, setBornDateValidMsge] = useState([]);

    const [customValidity, setCustomValidity] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        if(e.target.name === 'name'){
            checkName(e.target.value)
        }else if(e.target.name === 'lastname'){
            checkLastName(e.target.value)
        }else if(e.target.name === 'rut'){
            checkRut(e.target)
        }else if(e.target.name === 'bornDate'){
            checkBornDate(e.target.value)
        }else if(e.target.name === 'phone'){
            checkCellphone(e.target.value)
        }else if(e.target.name === 'email'){
            checkEmail(e.target.value)
        }else if(e.target.name === 'comunne'){
            if(e.target.value !== ''){
                setComunneValid(false)
            }else{
                setComunneValid(true)
            }
        }
    };

    const handleRegionChange = (e) => {
        const ciudadIndex = document.getElementById('region').value;
        ciudadIndex !== '' ? setRegionValid(false) : setRegionValid(true)
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        const ciudadesIndex = localidades.find(element => {
            return element.region === ciudadIndex;
        });
        setCiudades(ciudadesIndex.ciudad);
        setComunas([]);
    };

    const handleCityChange = (e) => {
        const cityName = document.getElementById('city').value;
        cityName !== '' ? setCityValid(false) : setCityValid(true)
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        const comunasData = ciudades.find(element => {
            return element[0] === cityName;
        });
        setComunas(comunasData[1].comunas);
    };

    const handleSubmit = (event) =>{
        
        let arrayValues = [];
        const formValues = document.getElementsByClassName('personalForm')[0].elements;

        let checkNameValue = checkName(document.getElementById('name').value);
        let checkLastNameValue = checkLastName(document.getElementById('lastname').value);
        let checkRutValue = checkRut(document.getElementById('rut'));
        let checkBornDateValue =  checkBornDate(document.getElementById('bornDate').value);
        let checkCellphoneValue = checkCellphone(document.getElementById('phone').value);
        let checkEmailValue = checkEmail(document.getElementById('email').value);

        let checkRegionValue = checkRegion(document.getElementById('region').value);
        let checkCityValue = checkCity(document.getElementById('city').value);
        let checkComunneValue = checkComunne(document.getElementById('comunne').value);

        const validation = (checkNameValue === false && checkLastNameValue === false && checkRutValue === false && checkBornDateValue === false 
            && checkCellphoneValue === false && checkEmailValue === false && checkRegionValue === false && checkCityValue === false 
            && checkComunneValue === false);

        [...formValues].forEach((elements) =>{
            arrayValues.push(elements.value);
        });
        if(arrayValues.includes("")){
            Object.defineProperty(event, 'continue', {
                value: false,
                writable: true
            });
        }else if(validation === true){
            Object.defineProperty(event, 'continue', {
                value: true,
                writable: true
            });
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

    const checkBornDate = (borndate) =>{
        let bornDate = new Date(borndate)
        let dateNow = new Date()
        let edad = dateNow.getFullYear() - bornDate.getFullYear()
        if(borndate.length !== '' && edad > 17){
            setBornDateValidMsge('')
            setBornDateValid(false)
            return false
        }else if(borndate.length === 0){
            setBornDateValidMsge('Por favor, ingrese su fecha de nacimiento.')
            setBornDateValid(true)
            return true
        }else if(borndate.length !== '' && edad < 17){
            setBornDateValidMsge('Debes ser mayor de edad.')
            setBornDateValid(true)
            return true
        }
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
        }else if(cell.length < 8 && !regCell.test(cell)){
            setCellphoneValidMsge('Número de celular no válido.')
            setCellphoneValid(true)
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

    useEffect(() => {

        document.getElementById("menuHolder").scrollIntoView();
        Axios.get("http://services.irodum.com:3001/api/localidades").then((res)=>{
            setLocalidades(res.data);

            if(userData['city'] !== undefined){
                const ciudadesIndex = (res.data).find(element => {
                    return element.region === userData['region'];
                });
                setCiudades(ciudadesIndex.ciudad);
                if(userData['comunne'] !== undefined){
                    const comunasData = (ciudadesIndex.ciudad).find(element => {
                        return element[0] === userData['city'];
                    });
                    setComunas(comunasData[1].comunas);
                }
            }
        });        
        document.addEventListener('handleEvent', handleSubmit);

        return () => {
            document.removeEventListener('handleEvent', handleSubmit);
        }
    },[]);

    return (
        <Container className='form mt-5 mb-5'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
                <Form className='personalForm shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Información personal</h3>
                    <Row>
                        <Form.Text className='mb-2'><span className='mb-1' style={{color: 'red', fontWeight: '600'}}>Todos los campos son obligatorios</span></Form.Text>
                        <div className='form-floating col-md-4 mb-3'>
                            <input type='text' className='form-control' id='name' name='name' placeholder='Nombre' 
                            value={userData['name'] || ''} onChange={handleChange}/>
                            <label htmlFor='name'>Nombre</label>
                            {
                                nombreValid === true ? <Form.Text className='mb-1'>
                                    <span className='mb-1' style={{color: 'red'}}>{nombreValidMsge}</span></Form.Text> : nombreValidMsge
                            }
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='text' className='form-control' id='lastname' name='lastname' placeholder='Apellido'
                            value={userData['lastname'] || ''} onChange={handleChange}/>
                            <label htmlFor='lastname'>Apellidos</label>
                            {
                                apellidosValid === true ? <Form.Text className='mb-1'>
                                    <span className='mb-1' style={{color: 'red'}}>{apellidosValidMsge}</span></Form.Text> : apellidosValidMsge
                            }
                        </div>
                    </Row>
                    <Row>
                        <div className='form-floating col-md-4 mb-3'>
                            <input type='text' className='form-control' id='rut' name='rut' placeholder='Ej: 123456789'
                            value={userData['rut'] || ''} onChange={handleChange} maxLength='9'/>
                            <label htmlFor='rut'>Rut</label>
                            {
                                rutValid === false ? <Form.Text className='mb-1'><span className='mb-1' style={{color: '#5f738f'}}>
                                    {customValidity === 'RUT válido' ? '' : 'Sin puntos ni guión'}</span></Form.Text> : 
                                    <Form.Text className='mb-1'>
                                    <span className='mb-1' style={{color: 'red'}}>{customValidity}</span></Form.Text>
                            }
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='date' className='form-control' id='bornDate' name='bornDate' placeholder='correo@gmail.com'
                            value={userData['bornDate'] || ''} onChange={handleChange}/>
                            <label htmlFor='bornDate'>Fecha de Nacimiento</label>
                            {
                                borndateValid === true ? <Form.Text className='mb-1'>
                                <span className='mb-1' style={{color: 'red'}}>{borndateValidMsge}</span></Form.Text> : borndateValidMsge
                            }
                        </div>
                    </Row>
                    <Row>
                        <div className='form-floating col-lg-4 col-md-4 col-md-4 mb-3'>
                            <input type='text' className='form-control' id='phone' name='phone' placeholder='+569 12345678'
                            value={userData['phone'] || ''} onChange={handleChange} maxLength='8'/>
                            <label htmlFor='phone'>Celular</label>
                            {
                                cellphoneValid === true ? <Form.Text className='mb-1'>
                                <span className='mb-1' style={{color: 'red'}}>{cellphoneValidMsge}</span></Form.Text> : cellphoneValidMsge
                            }
                        </div>
                        <div className='form-floating col-md-8 mb-3'>
                            <input type='email' className='form-control' id='email' name='email' placeholder='correo@gmail.com'
                            value={userData['email'] || ''} onChange={handleChange}/>
                            <label htmlFor='email'>Correo electrónico</label>
                            {
                                emailValid === true ? <Form.Text className='mb-1'>
                                <span className='mb-1' style={{color: 'red'}}>{emailValidMsge}</span></Form.Text> : emailValidMsge
                            }
                        </div>
                    </Row>
                    <Row>
                        <h3 className='mb-4 mt-1'>Lugar de residencia</h3>
                        <div className='form-floating col-md-4 mb-3'>
                            <select id='region' className='form-select' name='region' 
                            value={userData['region'] || ''} onChange={handleRegionChange}>
                            <option disabled selected="" value="">Seleccionar región</option>
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
                            <label htmlFor='region' className='form-label'>Región</label>
                            {
                                regionValid === true ? <Form.Text className='mb-1'>
                                <span className='mb-1' style={{color: 'red'}}>Por favor, seleccione una región.</span></Form.Text> : ''
                            }
                        </div>
                        <div className='form-floating col-md-4 mb-3'>
                            <select id='city' className='form-select' name='city' 
                            value={userData['city'] || ''} onChange={handleCityChange}>
                            <option disabled selected="" value="">Seleccionar provincia</option>
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
                            <label htmlFor='city' className='form-label'>Provincia</label>
                            {
                                cityValid === true ? <Form.Text className='mb-1'>
                                <span className='mb-1' style={{color: 'red'}}>Por favor, seleccione una provincia.</span></Form.Text> : ''
                            }
                        </div>
                        <div className='form-floating col-md-4 mb-3'>
                            <select id='comunne' className='form-select' name='comunne' 
                            value={userData['comunne'] || ''} onChange={handleChange}>
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
                            <label htmlFor='comunne' className='form-label'>Comuna</label>
                            {
                                comunneValid === true ? <Form.Text className='mb-1'>
                                <span className='mb-1' style={{color: 'red'}}>Por favor, seleccione una comuna.</span></Form.Text> : ''
                            }
                        </div>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default PersonalInformation
