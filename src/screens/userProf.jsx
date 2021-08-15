import React from 'react';
import './screen.css'
import UserProfInfo from '../components/userProfInfo'

function UserProf() {
    return (
        <div className='div-userProf'>
            <div className='div-head-userProf'>

                <h1>USER PROFILE</h1>
                <div className='div-head-userProf-info'>
                    <h2 style={{ margin: 5 }}>Arham Abeer</h2>
                    <h3 style={{ marginTop: 5 }}>
                        Blood Donor
                    </h3>
                </div>
            </div>
            <div className='div-user-info'>
                <UserProfInfo  name='BLOOD GROUP' value='O+' />
                <UserProfInfo  name='GENDER' value='MALE'/>
                <UserProfInfo  name='CONTACT' value='Not Available'/>
                <UserProfInfo  name='CITY' value='KARACHI'/>
                <UserProfInfo  name='ADDRESS' value='B/13/446 Indus Mehran Malir karachi'/>
            </div>
        </div>
    )
}



export default UserProf;
