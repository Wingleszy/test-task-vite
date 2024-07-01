import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import axios from 'axios';
import { DeviceRow } from './DeviceRow';
import { TextField } from '@mui/material';

export const DeviceList = () => {
    const [devices, setDevices] = useState([]);
    const [search, setSearch] = useState('');

    const auth = btoa('test@test.test:123321');

    useEffect(() => {
        axios.get('https://gps.autotracker.group/api/devices', {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        }).then(res => setDevices(res.data));
    }, []);

    const searchHandler = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
        console.log(newSearch);
        newSearch ? axios.get(`https://gps.autotracker.group/api/devices?id=${newSearch}`, {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        }).then(res => setDevices(res.data)) 
        :
        axios.get(`https://gps.autotracker.group/api/devices`, {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        }).then(res => setDevices(res.data)) 
    }

    return (
        <div className='home-container'>
            <Sidebar />
            <main className="main">
                <Header active='three'/>
                <TextField type='search' label='Поиск' value={search} onChange={(e) => searchHandler(e)}/>
                <div className="table">
                    <div className="row">
                        <span className='header-table'>Id</span>
                        <span className='header-table'>Name</span>
                        <span className='header-table'>UniqueId</span>
                        <span className='header-table'>Status</span>
                        <span className='header-table'>LastUpdate</span>
                    </div>
                    {devices.map(device => (
                        <DeviceRow key={device.id} name={device.name} id={device.id} uniqueId={device.uniqueId} status={device.status} lastUpdate={device.lastUpdate}/>
                    ))}
                </div>
            </main>
        </div>
    );
}