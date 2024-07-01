import React from 'react'

export const DeviceRow = (props) => {
    const {id, name, uniqueId, status, lastUpdate} = props


  return (
    <div className="row">
        <span className='header-table'>{id}</span>
        <span className='header-table'>{name}</span>
        <span className='header-table'>{uniqueId}</span>
        <span className='header-table'>{status}</span>
        <span className='header-table'>{lastUpdate.slice(0, 10)}</span>
    </div>
  )
}
