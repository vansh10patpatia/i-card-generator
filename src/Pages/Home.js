import React,{useState,useEffect,useRef,useCallback} from 'react'
import Navbar from "../Components/Navbar"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import dumy from "../assets/dumyimage.png"
import Eraimage from "../assets/graphicera.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
// import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import domtoimage from 'dom-to-image';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Input = styled('input')({
    display: 'none',
  });


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Form(){
    const [name,setName] = useState('Vansh Patpatia')
    const [email,setEmail] = useState('vansh10patpatia@gmail.com');
    const [phno,setPhno] = useState('8449129069');
    const [studentId,setStudentId] = useState('20021847');
    const [session,setSession] = useState('2020-24');
    const [image,setImage] = useState(require('../assets/avtar.png'))
    const [imageName,setImageName] = useState('')

    const printRef = useRef();

     async function handleDownloadImage  ()  {
        htmlToImage.toPng(document.getElementById('i-card'))
            .then(function (dataUrl) {
                require("downloadjs")(dataUrl, 'my-node.png');
            })
    };

    const onButtonClick = useCallback(() => {
        if (printRef.current === null) {
        return
        }

        toPng(printRef.current, { cacheBust: true, })
        .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'my-image-name.png'
            link.href = dataUrl
            link.click()
        })
        .catch((err) => {
            console.log(err)
        })
    }, [printRef])

    function downloadImage(){
        domtoimage.toBlob(document.getElementById('i-card-container'))
            .then(function (blob) {
                require("downloadjs")(blob, 'my-node.png');
                // window.saveAs(blob, 'my-node.png');
            });
    }

    function onSelectFile(e){
        setImageName('')
        // console.log(e.target.files[0]);
        setImageName(e.target.files[0].name)
        setImage(URL.createObjectURL(e.target.files[0]))
        console.log(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <>
           <Navbar/>
           <Box className='Box1'>
            <Typography className='heading-name' variant="h4" component="h3">
                Fill in the details
            </Typography>
        
       
       
          
        </Box>
                    <div className="home-page-all-containers">
                        <div className="i-card-girl-image">
                            <img src={require('../assets/dumyimage.png')} alt="" />
                        </div>
                        <div className="main-containers-for-page">
                            <div className="i-card-wrapper">

                        <div className="id-card-container" id='i-card-container' ref={printRef}>
                            <div className="id-card-img-container">
                                <img src={Eraimage} alt="" />
                                <div className="avatar-container">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                            <div className="top-text-div" >
                                <img src={require('../assets/icon.png')} alt="" />
                                <p>Graphic Era Deemed to be University</p>
                            </div>
                            <div className="id-card-text-container">
                                <h1>{name}</h1>
                                <p>{phno}</p>
                                <p> Id : {studentId} </p>
                                <p>{email}</p>
                                <p>Session : {session}</p>
                            </div>
                        </div>
                            </div>
                        <Card variant="outlined" className="admin-login-card">
                        <CardContent>
                            <Typography variant="h4" color="text.secondary" className="admin-login-welcome" style={{fontWeight: 600}} gutterBottom>
                                Graphic Era I card
                            </Typography>
                            <Grid container xs={12} sm={12} md={12}>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Name" className="login-inputs" variant="outlined" placeholder="Enter your name..."  focused 
                                        value={name}
                                        // error={emailError} helperText={emailError?(emailErrorText):(null)}
                                        onChange={(event)=>{setName(event.target.value)}}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Email" variant="outlined" className="login-inputs" placeholder="Type your email..."  focused 
                                        // error={passwordError} helperText={passwordError?(passwordErrorText):(null)}
                                        value={email}
                                        onChange={(event)=>{setEmail(event.target.value)}}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Student Id" className="login-inputs" variant="outlined" placeholder="Enter your student id..."  focused 
                                        // error={emailError} helperText={emailError?(emailErrorText):(null)}
                                        value={studentId}
                                        onChange={(event)=>{setStudentId(event.target.value)}}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Phone" variant="outlined" className="login-inputs" placeholder="Type your number..."  focused 
                                        // error={passwordError} helperText={passwordError?(passwordErrorText):(null)}
                                        onChange={(event)=>{setPhno(event.target.value)}}
                                        value={phno}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <TextField id="outlined-basic" label="Session" className="login-inputs" variant="outlined" placeholder="Eg. 2020-24"  focused 
                                        // error={emailError} helperText={emailError?(emailErrorText):(null)}
                                        value={session}
                                        onChange={(event)=>{setSession(event.target.value)}}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}  sm={6} md={6} className='fields-container'>
                                    <Typography variant="p" component="div" className="login-input-container">
                                        <label htmlFor="contained-button-file">
                                            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(event)=>onSelectFile(event)}/>
                                            <Button variant="contained" component="span">
                                                Upload
                                            </Button>
                                        </label>
                                        <br />
                                        {imageName}
                                    </Typography>
                                </Grid>

                            </Grid>
                            
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <Button variant="contained" className="continue-button" onClick={()=>downloadImage()} >Download</Button>
                            </Typography>
                        </CardContent>
                    </Card>
                        </div>
                    </div>
        </>

    )
}
export default Form