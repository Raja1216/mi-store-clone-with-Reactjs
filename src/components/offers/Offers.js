import React from 'react'
import Offer from "./offer"
import "../offers/Offers.css"


const Offers = ({offer}) => {
    return (
        <div className="offersSection"> 
        {offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    )
}

export default Offers