import React from 'react';


function PhotoCard({data}){

   
    
    return(
        <div className="card">
                <img src={data.src.original} alt="" />
        </div>
    )
}
export default PhotoCard;