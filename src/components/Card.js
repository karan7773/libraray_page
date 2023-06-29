import React from "react";
import { useState } from "react";

const Card = ({ book,handdleAddbook }) => {

    return (
        <>
            {
                book.map((item) => {
                    const thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    const amount=item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : item.saleInfo.saleability ;
                    // console.log(amount);
                    if(thumbnail !== undefined && amount !== undefined)
                    {
                        return (
                            <>
                            <div className="col mb-5 col-lg-4 mt-3" >
                                <div className="card bg-light" >
                                    {amount !== "NOT_FOR_SALE" && <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>Sale</div>}
                                    <img className="card-img-top" src={thumbnail} alt="..." /> 
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{item.volumeInfo.title}</h5>
                                            <h6 >{item.volumeInfo.authors}</h6>
                                            <p className="amount mt-3">{amount}</p>
                                            {amount !== "NOT_FOR_SALE" &&<button className="btn btn-dark" onClick={()=>{handdleAddbook(item)}}>Add to cart</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    }
                    // console.log(item);
                })
            }

        </>
    )
}
export default Card;



