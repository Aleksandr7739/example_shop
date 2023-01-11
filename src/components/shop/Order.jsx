import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Goods from './Goods';


function Order() {

    const order = useSelector((state) => state.goods.goods)
    console.log({ order })
    return (
        <>
            <h1>Страница с корзиной</h1>
            <div>
                {order.map(
                    (item) => {
                        return <div > name={item.name} prise={item.price} img={item.img} id={item.id} </div>
                    }
                )}
            </div>
        </>
    )
}

export default Order