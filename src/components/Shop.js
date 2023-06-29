import React, { useState,useEffect } from "react";
import Card from "./Card";

export default function Shop({handdleAddbook}){    

    const [search,setSearch]=useState("");
    const [books,setBooks]=useState([]);
    const [searchCount,setSearchCount]=useState(0);

    function handleKeyDown(event){
        if(event.key==='Enter'){
            searchBook();
        }
    }

    function suggestions(){
        setSearch("");
        setBooks([]);
        fetch("https://www.googleapis.com/books/v1/volumes?q=fun&key=AIzaSyCdq6rqlU9Asr8g3JqT7UceVvTd11xVWSA"+"&maxResults=40")
        .then(res=>res.json())
        .then(data=>{
            console.log(data.items)
            setBooks(oldbooks=>
                [...oldbooks,...data.items])
            
        })
        .catch((error) => {
            console.error('Error fetching books:', error);
        })
    }

    function searchBook(){
        setSearch("");
        setBooks([]);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCdq6rqlU9Asr8g3JqT7UceVvTd11xVWSA`+`&maxResults=40`)
        .then(res=>res.json())
        .then(data=>{
            setBooks(oldbooks=>
                [...oldbooks,...data.items])
            setSearchCount(oldbook=>{
                return oldbook + books.length
            })
        })
        .catch((error) => {
            console.error('Error fetching books:', error);
        })
    }
    useEffect(() => {
        suggestions()
    }, []);
    return (
        <div className="container">
            <div className="bg-dark py-5 ">
                <div className="container px-4 px-lg-12 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Explore, Discover, Escape</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Embark on a Literary Journey: Explore, Discover, and Escape into the World of Books.</p>
                    </div>
                </div>
            </div>
            <section>
                <div className="container px-4 mt-5">
                    <div className="d-flex offset-lg-3 col-lg-6">
                        <input type="text" className="form-control mx-3" value={search} onChange={(event) => {setSearch(event.target.value);}} onKeyDown={handleKeyDown} placeholder="Search books"/>
                        <button className="btn btn-dark" type="submit" onClick={searchBook}>search</button>
                        <div className="d-flex text-center">
                            <span className="bi-cart-fill  mx-3">Count</span>
                            <span className="badge bg-dark text-white rounded-pill">{searchCount}</span>
                        </div>  
                    </div>
                    
                    <div className="row  gx-4 gx-lg-6 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <Card book={books} handdleAddbook={handdleAddbook}/>
                    </div> 
                </div>
            </section>
        </div>
    )
}