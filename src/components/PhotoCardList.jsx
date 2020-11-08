import React from 'react';

import PhotoCard from './PhotoCard';
function PhotoCardList ({results}){
   
return(
    <div className="photo-list">
        {results.map(data=>{
           return <PhotoCard data={data}></PhotoCard>
        })}
    </div>
);
}

export default PhotoCardList;