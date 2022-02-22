import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import {useNavigate,useLocation} from 'react-router-dom';
// import {loginAdmin} from '../../APIs/Admin';
import {useDispatch,useSelector} from 'react-redux';
// import { SET_AUTH_STATUS, SET_USER_DETAILS, SET_ACCESS_TOKEN } from '../../Reducers/types';

export default function Login(props){

    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
    };
    const navigate = useNavigate();
    const [passwordError , setPasswordError] = useState(false);
    const [passwordErrorText , setPasswordErrorText] = useState("Default");
    const [emailError , setemailError] = useState(false);
    const [emailErrorText , setemailErrorText] = useState("Default");

    const [email,setAdminEmail] = useState('');
    const [password,setAdminPassword] = useState('');

    // function login(){
    //     setemailError(false);
    //     setPasswordError(false);
    //     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)  ){
    //         setemailError(false);
    //         if(password != ''){
    //             loginAdmin({email, password})
    //             .then((response) =>{
    //                 console.log(response);
    //                 if(response){
    //                     dispatch({ type: SET_AUTH_STATUS, payload: { authStatus: true } });
    //                     dispatch({ type: SET_USER_DETAILS, payload: { userDetails: response.userData } });
    //                     dispatch({ type: SET_ACCESS_TOKEN, payload: { accessToken: response.token } });
    //                     navigate("/admin/posts")
    //                 }
    //                 else{
    //                     setPasswordError(true);
    //                     setPasswordErrorText("Invalide Credentials");
    //                     setemailError(true);
    //                     setemailErrorText("Invalid Credentials");
    //                 }
    //             })
    //             .catch((error) =>{
    //                 console.error(error);
    //             })
    //         }
    //         else{
    //             setPasswordError(true);
    //             setPasswordErrorText("Invalide password")

    //         }
    //     }
    //     else{
    //         setemailError(true);
    //         setemailErrorText("Invalid Email");

    //     }
    // }
    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
        {/* <Box sx={{ flexGrow: 1 }} className="admin-login-container">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >
                <Grid item xs={11} sm={6} md={6} >
                    <img src={require('../assets/loginImage.png')} className="login-image" />
                </Grid>
                <Grid item xs={11} sm={5} md={5} className="admin-login-screen-grid">
                    
                    
                        
                </Grid>
            </Grid>
        </Box> */}
        <div className="login-page-container">
        <div className="login-page-img-container">
        <img src={require('../assets/loginImage.png')}   />
        </div>
        <div className="login-page-card-container">
            
        <Card variant="outlined" className="admin-login-screen-card">
                        <CardContent>
                            <Typography variant="h4" color="text.secondary" className="admin-login-welcome" style={{fontWeight: 600}} gutterBottom>
                                Hey, Welcome Back!
                            </Typography>
                            <Typography variant="p" component="div">
                                Log in to your account to continue
                            </Typography>
                            <Typography variant="p" component="div" className="login-input-container">
                                <TextField id="outlined-basic" label="User-Id" className="login-inputs" variant="outlined" placeholder="Enter your user-id..."  focused 
                                error={emailError} helperText={emailError?(emailErrorText):(null)}
                                onChange={(event)=>{setAdminEmail(event.target.value)}}
                                />
                            </Typography>
                            <Typography variant="p" component="div" className="login-input-container">
                                <TextField id="outlined-basic" label="Password" variant="outlined" className="login-inputs" placeholder="Type your password"  focused error={passwordError} helperText={passwordError?(passwordErrorText):(null)}
                                onChange={(event)=>{setAdminPassword(event.target.value)}}/>
                            </Typography>
                             
                           
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <Button variant="contained" className="continue-button" onClick={()=>console.log('continue')}>Continue</Button>
                            </Typography>
                        </CardContent>
                    </Card>
                                </div>
                                </div>
        </>
    );
}