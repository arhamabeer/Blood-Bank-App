import React from 'react';
import './screen.css'
import UserProfInfo from '../components/userProfInfo'
import Button from '@material-ui/core/Button';


function CurrUserProf() {
    return (
        <div className='div-userProf'>
            <div className='div-head-userProf'>

                <h1>YOUR PROFILE</h1>
                <div className='div-head-curruserProf-info'>
                    <h2 style={{ margin: 5 }}>Arham Abeer</h2>
                    <Button variant="contained" style={{backgroundColor: '#db074a', color: 'white'}}>
                        Edit Your Profile
                    </Button>
                    <h3 style={{ marginTop: 5 }}>
                        Blood Donor
                    </h3>
                </div>
            </div>
            <div className='div-user-info'>
                <UserProfInfo name='BLOOD GROUP' value='O+' />
                <UserProfInfo name='GENDER' value='MALE' />
                <UserProfInfo name='CONTACT' value='Not Available' />
                <UserProfInfo name='CITY' value='KARACHI' />
                <UserProfInfo name='ADDRESS' value='B/13/446 Indus Mehran Malir karachi' />
            </div>
        </div>
    )
}



export default CurrUserProf;
