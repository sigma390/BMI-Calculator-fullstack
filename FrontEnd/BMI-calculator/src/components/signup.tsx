import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

function Signup(){
    const[email,setEmail] = useState<string|undefined>(undefined);
    const[password,setPassword] = useState<string|undefined>(undefined);

return<div style={{
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap'
}}>
    
    <Card variant='outlined' style={{width:400,padding:20}}>
    <Typography variant={'h6'}>Welcome To BMI Calculator</Typography>
        <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
            setEmail(e.target.value);
        }}
        label='Username'
        variant='outlined'
        fullWidth={true}/>
        <TextField style= {{marginTop:10}}onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
            setPassword(e.target.value);
        }}
        label='Password'
        variant='outlined'
        fullWidth={true}/>

        
        <Button style={{
            marginTop:10
        }} variant="contained" onClick={async ()=>{
            const response = await axios.post("http://localhost:4001/admin/signup",{
                username:email,
                password:password
            })
            const data = response.data;
            localStorage.setItem('token',data.token)
            window.location.href = "/";

        }}>Signup</Button>

    </Card>


</div>
}

export default Signup;