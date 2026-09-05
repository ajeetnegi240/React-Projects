import React from "react"
import { useState } from 'react';
import Config from "../Config/Config"
import {useSelector,useDispatch} from "react-redux"
import {addComments} from "../store/commentsSlice" 


function Comment(){
    const results = useSelector((state) => state.comment.comments);
    const dispatch = useDispatch();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key",Config.accessKey);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });


        const comment = {
            name: formData.get('name'),
            message: formData.get("message")
        }
        dispatch(addComments(comment))
        event.target.reset();
    };

    return (
        <div className="bg-slate-950 m-8 p-4">
            <h1 className="text-white text-2xl m-2
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">Coments</h1>
            <form onSubmit={onSubmit}>
                <div className="m-4">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Name"
                    className="outline-2" required />
                    <br />
                </div>
                <div className="m-4">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" 
                    className="outline-2" placeholder="Enter Email" required/>
                    <br />
                </div>
                <div className="m-8">
                    <textarea name="message" placeholder="Write your Comment here..." 
                    className="outline-2"required></textarea>
                    <br />
                </div>
                <button type="submit">Submit</button>
            </form>
            {results.map((data)=>(
                    <div className="w-[90%] bg-slate-600 border-2 m-8">
                        <h1 class="text-white text-lg m-2
                        drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">{data.name}</h1>
                        <p>{data.message}</p>
                    </div>
                ))
            }

        </div>
    );
}


export default Comment;