import React from 'react'
import Axios  from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Row, Table } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'

const Specialities = ({data,id}) => {

    const MySwal = withReactContent(Swal)
    const [ especialityData, setEspecialityData ] = useState(data);

    useEffect(() => {
    }, [especialityData]);

    const deleteEspeciality = (e) =>{

        e.preventDefault()
        const token = localStorage.getItem('accessToken');
        let especialityToDelete = parseInt(e.target.id,10)

        MySwal.fire({
            title: '¿Estás seguro de eliminar ésta especialidad?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete("http://54.174.104.208:3001/api/delete-especiality" + especialityToDelete,
                {
                    headers: {
                    'authorization': `${token}`
                    }
                })
                .then((result) => {
                    Swal.fire({
                        title: '<strong>Especialidad Eliminada</strong>',
                        icon: 'success',
                        html:`<span>Su especialidad fue eliminada satisfactoriamente..
                            <p className="mt-1">De todos modos, puede subir una nueva en cualquier momento.</p>
                        </span>`,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Aceptar'
                      }).then((result) => {
                        if(result.isConfirmed){
                            Axios.get("http://54.174.104.208:3001/api/download/speciality/" + id,
                                { headers: {
                                    'Content-Type': 'multipart/form-data;',
                                    'Authorization': `${token}`
                                    } 
                                })
                            .then((result) => {
                                if(result.status === 200){
                                    let arrayEspecialities = []
                                    (result.data).forEach(value =>{
                                        let descriptSpec = JSON.parse(value.especialityDescript)
                                        let specialityToString = Buffer.from(value.especialityDoc)
                                        let speciality = JSON.parse(specialityToString)
                                        
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
                                    })
                                    
                                    setEspecialityData(arrayEspecialities)
                                }
                            }).catch(error => {
                                setEspecialityData([])
                            });
                        }
                    })
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                            html:`<p className="mt-1">Lo sentimos, su especialidad no pudo ser eliminada, intente de nuevo o más tarde...</p>`,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Aceptar'
                      }).then((result) => {
                        if(result.isConfirmed){
                            
                        }
                    })
                });
            }
          })

    }

  return (
    <>
            {
                especialityData.map(values =>{
                    return(
                        <>
                            <td >{values.descript}</td>
                            <td ><a href={"http://54.174.104.208:3001/" + values.image.originalname} 
                            target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} >{values.image.originalname}</a></td>
                            <td className="text-center">
                                <i id={values.idEspeciality} className='fas fa-trash-alt' onClick={(e) => deleteEspeciality(e)} 
                                    style={{ color: 'red', cursor: 'pointer' }} >
                                </i>
                            </td>
                        </>
                    )
                })
            }
    </>
    )
}

export default Specialities