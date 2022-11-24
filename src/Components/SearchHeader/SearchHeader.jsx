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
    
    useEffect(() => setValue(keyword || ''),
        [keyword]);
    
    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4 '>
            <Link className='flex items-center' to='/'>
                <AiFillYoutube className='text-4xl text-brand'/>
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <input
                    className='w-7/12 p-2 outline-none bg-black text-gray-50'
                    type='text'
                    value={value}
                    onChange={handleInputChange}
                    placeholder='Search...'
                />
                <button className='bg-zinc-600 px-4'><BsSearch/></button>
            </form>
        </header>
    );
};

export default SearchHeader;
