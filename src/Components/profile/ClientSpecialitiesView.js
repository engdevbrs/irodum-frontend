import React from 'react'

const SpecialitiesClient = ({data}) => {

  return (
    <>
            {
                data.map(values =>{
                    return(
                        <>
                            <td >{values.descript}</td>
                            <td ><a href={"http://54.174.104.208:3001/" + values.image.originalname} 
                            target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} >{values.image.originalname}</a></td>
                        </>
                    )
                })
            }
    </>
    )
}

export default SpecialitiesClient