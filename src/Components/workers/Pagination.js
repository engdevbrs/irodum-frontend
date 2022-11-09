import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import perfil from '../assets/perfil.png'
import '../css/Pagination.css';


const Pagination = (props) => {

    const { data } = props;
    const [ currentItems, setCurrentItems ] = useState([])
    const [ pageCount, setPageCount ] = useState(0)
    const [ itemOffset, setItemOffset ] = useState(0);
    const itemsPerPage = 25

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
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}} key={key}>
                        <div className="advisor_thumb" style={{'backgroundColor': (element.userColor !== undefined && element.userColor !== null && element.userColor !== "") ? element.userColor : '#3f43fd'}}>
                        <h6>{element.workareaUser}</h6>
                        <p className="designation"><i className="fa fa-clock-o"></i>{" "+element.experienceYears+" años de experiencia"}</p>
                            <img src={(element.userPhoto !== undefined && element.userPhoto !== null && element.userPhoto !== "") ? 'http://54.174.104.208:3001/api/images/' + element.userPhoto : perfil} 
                            style={{height: '15rem'}} alt={'imagen de perfil'} />
                            <div className="social-info">
                            {
                                (element.facebookSite !== "" && element.facebookSite !== null && element.facebookSite !== undefined ) ? <a href={element.facebookSite} target='_blank' rel='noreferrer'><i className="fa fa-facebook"></i></a>
                                : <></>
                            }
                            {
                                (element.instagramSite !== "" && element.instagramSite !== null && element.instagramSite !== undefined ) ? <a href={element.instagramSite} target='_blank' rel='noreferrer'><i className="fa fa-instagram"></i></a>
                                : <></>
                            }
                            {
                                (element.webSite !== "" && element.webSite !== null && element.webSite !== undefined ) ? <a href={'http://'+element.webSite} target='_blank' rel='noreferrer'><i className="fas fa-globe-americas"></i></a>
                                : <></>
                            }
                            {
                                (element.cellphone !== "" && element.cellphone !== null && element.cellphone !== undefined ) ? <a href={`tel:${element.cellphone}`}><i className="fas fa-phone"></i></a>
                                : <></>
                            }
                            </div>
                        </div>
                        <div className="single_advisor_details_info">
                            <h6>{element.nameUser + " " + element.lastnamesUser}</h6>
                            <p className="designation">{element.chargeUser}</p>
                            <p className="designation">{element.workResume}</p>
                            <Link to={`/trabajadores/perfil/vista/${element.id}`} className="btn btn-danger mt-2">Ver Perfil</Link>
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