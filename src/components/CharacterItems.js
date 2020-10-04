import React from 'react'

function CharacterItems({value}) {
    console.log(value)
    return (
        <>
               <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={value.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{value.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {value.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {value.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {value.birthday}
            </li>
            <li>
              <strong>Status:</strong> {value.status}
            </li>
          </ul>
        </div>
      </div>
    </div>  
        </>
    )
}

export default CharacterItems
