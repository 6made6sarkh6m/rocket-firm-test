import React from 'react';



function  History({history}){
    return(
        <div className='history'>
            { history.map(data=>{
                return <h3>{data}</h3>
            })}
        </div>
    )
    
}
export default History;