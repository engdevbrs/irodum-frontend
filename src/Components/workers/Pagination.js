import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import perfil from '../assets/perfil.png'
import '../css/Pagination.css';


const Pagination = (props) => {

    const { data } = props;
    const [ currentItems, setCurrentItems ] = useState([])
    const [ pageCount, setPageCount ] = useState(0)
    const [ itemOffset, setItemOffset ] = useState(0);
    const itemsPerPage = 12

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));

    }, [data, itemOffset]);
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        {
            currentItems.map((element,key) =>{
                return(
                    <>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2" key={element.idEmployed}>
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}}>
                        <div className="advisor_thumb" style={{'backgroundColor': (element.colorEmployed !== undefined && element.colorEmployed !== null && element.colorEmployed !== "") ? element.colorEmployed : 'rgb(227 227 227)'}}>
                        <p className="designation" style={{fontSize: '14px', fontWeight: '500'}}>{element.employedClass === "independiente" ? "Trabajador independiente" : "Pequeña y mediana empresa"}</p>

                        <Row className='d-flex align-content-center'>
                            <Col md={8} sm={8} xs={8} className='d-flex align-content-center'>
                                <span style={{ color: "rgb(36 36 36)", fontWeight: '500' }}>{element.employedClass === "independiente" ? element.nameUser + " " + element.LastNameEmployed : element.nameUser}</span>
                            </Col>
                            <Col md={4} sm={4} xs={4} className='d-flex justify-content-end align-items-end'>
                                <Rating
                                initialValue={element.rankingEmployed !== null ? element.rankingEmployed : 0}
                                size={18}
                                fillColor='orange'
                                emptyColor='gray'
                                allowFraction={true}
                                readonly={true}
                                style={{ marginRight: '3px', display: 'flex',justifyItems: 'center' }}
                                /><span style={{color: 'rgb(245 245 245)', fontSize: '13px', fontWeight: '600'}}>({element.rankingEmployed !== null ? element.rankingEmployed : 0})</span>
                            </Col>
                        </Row>
                        <p className="designation" style={{fontSize: '14px', fontWeight: '500'}}><i className="fa fa-clock-o"></i>{" "+element.experienceYears+" años de servicio"}</p>
                            <img src={(element.photoEmployed !== undefined && element.photoEmployed !== null && element.photoEmployed !== "") ? 'http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/images/' + element.photoEmployed : perfil} 
                            style={{height: '15rem'}} alt={'imagen de perfil'} />
                            <div className="social-info">
                            {
                                (element.facebookSite !== "" && element.facebookSite !== null && element.facebookSite !== undefined ) ? <a href={`https://${element.facebookSite}`} target='_blank' rel='noreferrer'><i className="fa fa-facebook"></i></a>
                                : <></>
                            }
                            {
                                (element.instagramSite !== "" && element.instagramSite !== null && element.instagramSite !== undefined ) ? <a href={`https://${element.instagramSite}`} target='_blank' rel='noreferrer'><i className="fa fa-instagram"></i></a>
                                : <></>
                            }
                            {
                                (element.webSite !== "" && element.webSite !== null && element.webSite !== undefined ) ? <a href={`http://${element.webSite}`} target='_blank' rel='noreferrer'><i className="fas fa-globe-americas"></i></a>
                                : <></>
                            }
                            {
                                (element.cellphone !== "" && element.cellphone !== null && element.cellphone !== undefined ) ? <a href={`tel:${element.cellphone}`}><i className="fas fa-phone"></i></a>
                                : <></>
                            }
                            </div>
                        </div>
                        <div className="single_advisor_details_info">
                            <h6>{element.employedClass === "independiente" ? element.workArea : element.chargeEmployed}</h6>
                            <p className="designation">{element.employedClass === "independiente" ? element.chargeEmployed : ''}</p>
                            <p className="designation">{element.workResume}</p>
                            <Link to={`/trabajadores/perfil/vista/${element.employedClass}/${element.idEmployed}`} className="btn btn-danger mt-2">Ver Perfil</Link>
                        </div>
                        </div>
                    </div>
                    </>
                )
            })
        }
        <Container className='d-flex justify-content-center' fluid>
        <ReactPaginate
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< "
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
        </Container>
      </>
    );
}

export default Pagination