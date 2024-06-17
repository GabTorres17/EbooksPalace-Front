import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom"
import style from "./SearchBar.module.css"

import React from 'react';
import NavBar from "../Nav/Nav";



const SearchBar = () => {
    // const [name, setName] = useState('');
    // const dispatch = useDispatch();

    // const handleOnClick = async () =>{
    //     await dispatch(getName(name));
    //     setName('');
    // }

    // const handleName = (event) => {
    //     setName(event.target.value)
    // }

    // const reset = () => {
    //     dispatch(get());
    // }

    return (
        <div className={style.container}>
            <div classnName={style.group}>
                {/* <svg className={style.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg> */}
                <input placeholder="Search" type="search" className={style.input} />
            </div>
            {/* <NavBar/> */}
        </div>
    );
}

export default SearchBar;