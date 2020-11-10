import React from 'react';

import PhotoCard from './PhotoCard';
function PhotoCardList ({results, addFav}){
   
return(
    <div className="photo-list">
        {results.map(data=>{
           return <PhotoCard data={data} onClick={addFav}></PhotoCard>
        })}
    </div>
);
}

export default PhotoCardList;