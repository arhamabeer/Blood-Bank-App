import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from '../../screens/home.jsx'
import Login from '../../screens/login.jsx'
import SignUp from '../../screens/signup.jsx'
import UserProf from '../../screens/userProf'
import CurrUserProf from '../../screens/currUserProf'
import Users from '../../screens/users'
import Donors from '../../screens/donors'
import Required from '../../screens/required'
import Search from '../../screens/searchComp'


class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path={['/', '/login']} component={Login} />
                <Route exact path='/Home' component={Home} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/userprofile' component={UserProf} />
                <Route exact path='/curruserprofile' component={CurrUserProf} />
                <Route exact path='/users' component={Users} />
                <Route exact path='/users/donors' component={Donors} />
                <Route exact path='/users/required' component={Required} />
                <Route exact path='/users/search' component={Search} />
            </Router>
        )
    }
}

export default AppRouter;
