import React from 'react'
import {Card,Button,CardColumns} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import Paginator from '../pagination/index'
import './styles.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Cards = ({dataNews,loader, paginate,pages,currentPage}) => {
    if(loader){
        return <h1>loading..</h1>
    }

    return ( 
        <div>
            { dataNews.length === 0 ? <h1>No hay noticias para mostrar</h1>:
            <CardColumns>
                {
                dataNews.map((data,index) =>(
                            <Card key={data.news_id} >
                                <Card.Img variant="top" src={data.img_url}  style={{width: "350px", height: "200px" }}/>
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Button variant="primary" href={data.url}>Go somewhere</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                    ) 
                )}
            </CardColumns> 
            }
            <div className="row">
                <div className="col-5 offset-4">
                    <Paginator 
                      paginate={paginate}
                      currentPage={currentPage} 
                      pages={pages}/> 
                </div>
            </div>   
        </div>          
    )
}

export default withRouter(Cards);
