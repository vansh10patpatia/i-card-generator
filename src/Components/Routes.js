import React,{useEffect} from 'react';
import {  Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
// import Posts from '../../Pages/Posts/Posts';
// import View from '../../Pages/Posts/ViewPosts';
// import ForgotPassword from '../../Pages/Admin/ForgotPassword';
// import AddPost from '../../Pages/Admin/AddPost'
// import AllPosts from '../../Pages/Admin/AllPosts'
import {useSelector} from 'react-redux';

export default function Navigation() {
    
    const authStatus = useSelector((state)=>state.user.authStatus);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        //if authstatus is false redirecting to the login route
        if(!authStatus && location.pathname.includes('/generate')){
            navigate("/");
        }

    },[authStatus]);
    return (
        
            <Routes>
                
                <Route exact path="/generate"  element={<Home />}/>
                <Route exact path="/"  element={<Login />}/>
                
            </Routes>
    )
}

