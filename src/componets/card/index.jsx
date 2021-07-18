import React from  'react'
import '../card/card.scss'

export function Card(props){
    return(

        <div className="card">
            {props.children}
        </div>
    
    )
        
}