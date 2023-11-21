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
    <Typography variant={'h6'}>Welcome To BMI Calculator</Typography>
    <Card>

    </Card>


</div>
}

export default Signup;