"use client";
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

function Search({ setSearchResults, keyWords }: { setSearchResults: any, keyWords: any }) {
  const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e:any) => {
        const term = e.target.value;
        setSearchTerm(term);
        const results = keyWords.filter((user:any) =>
            user.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
      <div className="flex items-center h-14 rounded-2xl flex-grow
        cursor-pointer text-[#D98046] bg-[#FFFFFF] bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <BsSearch size={24} className='h-12 m-4'/>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Find your coffee..."
          className="h-full w-full flex-grow bg-transparent outline-none
          rounded-2xl focus:outline-none px-2"
        />
      </div>
    )
}

export default Search;