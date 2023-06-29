import React from "react";

export default function Cart({cartItems}){
    
    return(
        <div>
            <h1 className="text-center">Cart Items</h1>
            {cartItems.length===0 && <h1 className="text-center">Your Cart is Empty</h1>}

            <div className="row m-5 gx-4 gx-lg-6 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                {cartItems.map((item)=>{
                    // {console.log(cartItems)}
                    const thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    const amount=item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : item.saleInfo.saleability ;
                    // console.log(amount);
                    if(thumbnail !== undefined && amount !== undefined)
                    {
                        return (
                            <div className="col mb-5 col-lg-3 mt-3" >
                                <div className="card h-100">
                                    {amount !== "NOT_FOR_SALE" && <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>Sale</div>}
                                    <img className="card-img-top" src={thumbnail} alt="..." /> 
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{item.volumeInfo.title}</h5>
                                            <p className="amount mt-3">{amount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="d-flex justify-content-center my-5">
                <button className="btn btn-dark">Buy Now</button>
            </div>
        </div>
    )
}