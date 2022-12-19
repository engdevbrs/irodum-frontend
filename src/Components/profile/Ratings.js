import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Container, Row } from 'react-bootstrap'
import rate from '../assets/rate.png'
import '../css/Comments.css'

const Ratings = ({data}) => {

    const [ratingTotal, setRatingTotal] = useState([]);

    useEffect(() => {
        let maxRating = 5
        let maxPercentage = 100
        if(data.length > 0){
            let sumaCuida = 0
            let sumaHonest = 0
            let precio = 0
            let puntua = 0
            let respons = 0
            data.forEach(element => {
                let ratingParse = JSON.parse(element.aptitudRating)
                sumaCuida = sumaCuida + ratingParse.cuidadoso
                sumaHonest = sumaHonest + ratingParse.honestidad
                precio = precio + ratingParse.precio
                puntua = puntua + ratingParse.puntualidad
                respons = respons + ratingParse.responsabilidad
            });

            let sumaTotal = {
                cuidadoso: ((sumaCuida / data.length) * maxPercentage) / maxRating,
                honestidad: ((sumaHonest / data.length) * maxPercentage) / maxRating,
                precio: ((precio / data.length) * maxPercentage) / maxRating,
                puntualidad: ((puntua / data.length) * maxPercentage) / maxRating,
                responsabilidad: ((respons / data.length) * maxPercentage) / maxRating
            }
            setRatingTotal(sumaTotal)
        }
        
    },[data]);

    return (
        <>
        <Container className="comments-container">
        {
            data.length > 0 ? 
            <Card className="p-2 shadow rounded" >
              <>
                <p className="mb-1" >Responsabilidad</p>
                <div className="progress rounded" style={{height: '17px'}}>
                    <div className="progressbar" label={`${Math.round(ratingTotal.responsabilidad)}%`} style={{width: `${Math.round(ratingTotal.responsabilidad)}%`}} now={Math.round(ratingTotal.responsabilidad)} aria-valuemin="0" aria-valuemax="100">{Math.round(ratingTotal.responsabilidad)}%</div>
                </div>
                <p className="mt-4 mb-1" >Puntualidad</p>
                <div className="progress rounded" style={{height: '17px'}}>
                    <div className="progressbar" label={`${Math.round(ratingTotal.puntualidad)}%`} style={{width: `${Math.round(ratingTotal.puntualidad)}%`}} now={Math.round(ratingTotal.puntualidad)} aria-valuemin="0" aria-valuemax="100">{Math.round(ratingTotal.puntualidad)}%</div>
                </div>
                <p className="mt-4 mb-1" >Honestidad</p>
                <div className="progress rounded" style={{height: '17px'}}>
                    <div className="progressbar" label={`${Math.round(ratingTotal.honestidad)}%`} style={{width: `${Math.round(ratingTotal.honestidad)}%`}} now={Math.round(ratingTotal.honestidad)} aria-valuemin="0" aria-valuemax="100">{Math.round(ratingTotal.honestidad)}%</div>
                </div>
                <p className="mt-4 mb-1" >Cuidadoso</p>
                <div className="progress rounded" style={{height: '17px'}}>
                    <div className="progressbar" label={`${Math.round(ratingTotal.cuidadoso)}%`} style={{width: `${Math.round(ratingTotal.cuidadoso)}%`}} now={Math.round(ratingTotal.cuidadoso)} aria-valuemin="0" aria-valuemax="100">{Math.round(ratingTotal.cuidadoso)}%</div>
                </div>
                <p className="mt-4 mb-1" >Precio justo</p>
                <div className="progress rounded mb-2" style={{height: '17px'}}>
                    <div className="progressbar" label={`${Math.round(ratingTotal.precio)}%`} style={{width: `${Math.round(ratingTotal.precio)}%`}} now={Math.round(ratingTotal.precio)} aria-valuemin="0" aria-valuemax="100">{Math.round(ratingTotal.precio)}%</div>
                </div>
              </>
          </Card>
         : <>
        <Card className='shadow d-flex align-items-center justify-content-center text-center' style={{height: '50vh'}}>
                <h5 className='mt-2'><strong>Éste trabajador aún no ha sido evaluado</strong></h5>
                <div>
                <img className='mt-4' src={rate} 
                    alt={'project'} style={{height: '200px', width: 'auto'}}/>
                </div> 
            </Card>
        </>
        }
        </Container>
        </>
      )
}

export default Ratings