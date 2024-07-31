import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './indexx.css'

const SearchIndex = () => {
  const [searching, setSearching] = useState('');
  const [array, setArray] = useState([])

  const fetchdata = async () => {
    try {
      const fetching = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setArray(fetching.data)
      
    } catch (error) {
      console.log("error to load the data")
    }
  }


  
  const matchData = array.filter(item =>  
    item.title.toLowerCase().includes(searching.toLowerCase())
  );
  
useEffect(() => {
  fetchdata()
}, []
)

const handleSearch = (event) => {
  setSearching(event.target.value);
};
  return (
    <>
    
      <div className='maindiv'>
      <input 
        type="text" 
        placeholder="Search the title here" 
        value={searching}
        onChange={handleSearch}
        className='inputfield'
      />
      {matchData && matchData.length > 0 ? (
        <ul>
          {matchData.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No Data Found </p>
      )}
    </div>
    </>

  )
}

export default SearchIndex
