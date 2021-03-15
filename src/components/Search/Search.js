import React from 'react'
import './Search.scss'

export default function Search({onChange, onKeyDown, onBlur}) {
    return (
        <div className="search-wrapper">
            <label htmlFor="search">
                <input
                    id="search"
                    type="text"
                    name="search"
                    placeholder="şehir giriniz..."
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                />
                <i style={{fontSize:"23px", marginLeft:"6px"}} class="fas fa-search"></i>
            </label>
        </div>
    )
}
 
