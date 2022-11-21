import React, {useEffect, useState} from 'react';
import {AiFillYoutube} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {Link, useNavigate, useParams} from "react-router-dom";

const SearchHeader = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const {keyword} = useParams();
    
    const handleInputChange = (e) => {
        setValue(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`videos/${value}`);
        setValue('');
    };
    
    useEffect(() => setValue(keyword || ''), [keyword]);
    
    return (
        <header>
            <Link to='/'>
                <span><AiFillYoutube/></span>
                <h1>Youtube</h1>
            </Link>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={value}
                    onChange={handleInputChange}
                    placeholder='Search...'
                />
                <button><BsSearch/></button>
            </form>
        </header>
    );
};

export default SearchHeader;
