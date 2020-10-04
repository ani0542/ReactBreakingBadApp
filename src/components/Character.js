import React from 'react'
import CharacterItems from './CharacterItems'
import Spinner from './Spinner'

function Character({items,loading}) {
     return loading? <Spinner/>:
     <section className='cards'>
                {
                    items.map((value)=>{
                        return(
                         <CharacterItems value={value} key={value.char_id}/>
                        )
                    })
                } 
     </section>
}

export default Character
