import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

function Signup(){
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();

return<div style={{
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap'
}}>
    
    <Card variant='outlined' style={{width:400,padding:20}}>
    <Typography variant={'h6'}>Welcome To BMI Calculator</Typography>
        <TextField onChange={(e)=>{
            setEmail(e.target.value);
        }}
        label='Username'
        variant='outlined'
        fullWidth={true}/>
        <TextField style= {{marginTop:10}}onChange={(e)=>{
            setEmail(e.target.value);
        }}
        label='Password'
        variant='outlined'
        fullWidth={true}/>

        
        <Button style={{
            marginTop:10
        }} variant="contained" onClick={async ()=>{
            const response = await axios.post("http://localhost:3000/admin/signup")
        }}>Signup</Button>

    </Card>


</div>
}

export default Signup;