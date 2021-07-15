import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'
import UserList from "./UserList";
import SearchUser from "./SearchUser";
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60b6023c98e5768341aefad0';


function UserCall() {
    const [loading, setLoading] = useState(false);
    const [User, setUser] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
        .then(({ data }) => setUser(data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }, []);

//  let user = JSON.parse(User.data)
//  console.log(User)
   


    return (
        <div className='back'>
            <div className="container shadow rounded">
                <div className="row p-5">
                    <div className="col bg-light d-flex flex-column  align-items-center">
                    <SearchUser user={User.data} />
                    </div>
                    <div className="col bg-light d-flex flex-column justify-content-center align-items-center">
                    <h2 className='m-3'>All User</h2>
                        <UserList user={User.data} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UserCall;