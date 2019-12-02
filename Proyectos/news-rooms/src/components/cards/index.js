import React from 'react'

 const Cards = (props) => {

    return (
        <div>
            {props.dataNews.map((data,index) =>{
                return(
                    <div key={index}>
                        <p>{data.title}</p>
                    </div>
                ) 
            })}
        </div>
    )
}

export default Cards;
