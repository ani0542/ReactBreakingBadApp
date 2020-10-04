

import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios' ;
import Header from './components/Header'
import Character from './components/Character';
import Search from './components/Search';
function App() {
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)
    const [query, setQuery] = useState('')

    


    useEffect(()=>{
        const fetchItems = async () => {   
            setLoading(true)
            // const result = await axios( `https://www.breakingbadapi.com/api/characters`)
            const result = await axios( `https://www.breakingbadapi.com/api/characters?name=${query}`)
            // console.log(result)
            // console.log(result.data)
            setItems(result.data)
            setLoading(false)
        }

        fetchItems()
    },[query])
    return (

        
            <>
                <div className='container'>
                  <Header/>
                  <Search getQuery={(q) => setQuery(q)}/>
                  <Character loading={loading} items={items}/>
                  </div>
            </>
        
    )
}

export default App
