import React, { useState, useEffect } from 'react'

import SignUpSelect from '../components/signUpSelect'
import NameWithIcon from '../components/input-name'
import AgeWithIcon from '../components/input-age'
import GenderSelect from '../components/gender'
import BldGrpSelect from '../components/bloodGrp'
import EmailWithIcon from '../components/input-email'
import CityWithIcon from '../components/city'
import AddressWithIcon from '../components/address'
import InputAdornments from '../components/password'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import action from "../store/action";
// import {addUser} from '../store/action'
import {useHistory} from 'react-router-dom'




function SignUp(props) {

const hist = useHistory()


  console.log('hist', hist) 
  const [fname, setFname] = useState()
  const [wanted, setWanted] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disableBtn, setDisableBtn] = useState(false)

  
  const classes = useStyles();
  console.log('props >> ', props.data)
  console.log('fname >> ', fname)


  const handleWantChange = (e) => {
    setWanted(e)
  }
  const handleNameChange = (e) => {
    setFname(e)
  }
  const handleAgeChange = (e) => {
    setAge(e)
  }
  const handleGenderChange = (e) => {
    setGender(e)
  }
  const handleBloodChange = (e) => {
    setBloodGroup(e)
  }
  const handleCityChange = (e) => {
    setCity(e)
  }
  const handleAddressChange = (e) => {
    setAddress(e)
  }
  const handleEmailChange = (e) => {
    setEmail(e)
  }
  const handlePasswordChange = (e) => {
    setPassword(e)
  }
  return (
    <div className='div-signup-main'>
      <h1 className={classes.header}>Create a new Account</h1>
      <form action="" >
        <SignUpSelect func={handleWantChange} />
        <NameWithIcon onAdd={fname} func={handleNameChange} />
        <AgeWithIcon func={handleAgeChange} />
        <GenderSelect func={handleGenderChange} />
        <BldGrpSelect func={handleBloodChange} />
        <CityWithIcon func={handleCityChange} />
        <AddressWithIcon func={handleAddressChange} />
        <EmailWithIcon func={handleEmailChange} />
        <InputAdornments className='signup-pass' func={handlePasswordChange} />
        <Button
          disabled= {disableBtn}
          onClick={()=>props.addUser(fname, wanted, age, gender, bloodGroup, city, address, email, password, hist,setDisableBtn)}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
      </Button>
      </form>
    </div>
  )
 
}



const mapStateToProps = (state) => ({
  data: state.data_blank,

})


const mapDispatchToProps = {
  addUser: (fname, wanted, age, gender, bloodGroup, city, address, email, password,hist,setDisableBtn) => (action.addUser(fname, wanted, age, gender, bloodGroup, city, address, email, password, hist,setDisableBtn)),
  // addUser: action.getFBUsers(fname, wanted, age, gender, bloodGroup, city, address, email, password)
}








const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'rgb(255 0 0)',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: "rgb(116 2 2)",
    },
  },
  header: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: 46
  }

}));


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
