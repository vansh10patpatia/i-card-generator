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
    
    // const authStatus = useSelector((state)=>state.admin.authStatus);
    // const location = useLocation();
    // const navigate = useNavigate();
    // useEffect(()=>{
    //     //if authstatus is false redirecting to the login route
    //     if(!authStatus && location.pathname.includes('/admin') && !location.pathname.includes('/admin/login')){
    //         navigate("/admin/login");
    //     }

    // },[authStatus]);
    return (
        
            <Routes>
                
                <Route exact path="/"  element={<Home />}/>
                <Route exact path="/login"  element={<Login />}/>
                {/* <Route exact path="/posts"  element={<Posts />}/>
                <Route exact path="/view/:blogId"  element={<View />}/>
                <Route exact path="/admin/forgot-password"  element={<ForgotPassword />}/>
                <Route exact path='/admin/posts'  element={<AddPost />}/>
                <Route exact path="/admin/login"  element={<Login />}/>
                <Route exact path="/admin/allposts"  element={<AllPosts />}/> */}
                
            </Routes>
    )
}

