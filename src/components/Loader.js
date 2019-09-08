import React from 'react'
import loaderIcon from '../assets/loader.svg'
import './Loader.css'

export default function Loader() {
    return (
        <div className="loader">
            <img src={loaderIcon} alt="loading" width="75px" height="75px"/>
        </div>
    )
}
