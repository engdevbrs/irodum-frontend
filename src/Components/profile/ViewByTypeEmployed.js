import React from 'react'
import { useParams } from 'react-router-dom'
import ViewClientProfile from './ViewClientProfile';
import ViewPymeProfile from './ViewPymeProfile';

const ViewByTypeEmployed = () => {
    const { id, type } = useParams();
    const object = {
        id: parseInt(id,10),
        type: type
    }
  return (
    type === "independiente" ? <ViewClientProfile data={object} /> : <ViewPymeProfile data={object}/>
  )
}

export default ViewByTypeEmployed