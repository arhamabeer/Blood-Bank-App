import React from 'react';
import './screen.css'
import UserProfInfo from '../components/userProfInfo'

function UserProf({location}) {
    // console.log('userProf=> ', location.detail.item)
    
    var item = location.detail.item;
    console.log('userProf=> ', item)

    
    return (
        <div className='div-userProf'>
            <div className='div-head-userProf'>

                <h1>USER PROFILE</h1>
                <div className='div-head-userProf-info'>
                    <h2 style={{ margin: 5 }}>{item.fname}</h2>
                    <h3 style={{ marginTop: 5 }}>
                        {item.wanted}
                    </h3>
                </div>
            </div>
            <div className='div-user-info'>
                <UserProfInfo  name='BLOOD GROUP' value={item.bloodGroup} />
                <UserProfInfo  name='GENDER' value={item.gender}/>
                <UserProfInfo  name='CONTACT' value='Not Available'/>
                <UserProfInfo  name='CITY' value={item.city}/>
                <UserProfInfo  name='ADDRESS' value={item.address}/>
            </div>
        </div>
    )
}



export default UserProf;
