import React from 'react'

const Searchbox = ({searchField, onSearchChange}) => {
  return (
    <div className='pa2'>
      <input onChange={onSearchChange}  id="" className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" />
    </div>
  )
}

export default Searchbox;