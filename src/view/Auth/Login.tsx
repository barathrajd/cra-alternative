import { SxProps, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginLogo from '../../assets/login.svg';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { setPassword, setUsername } from 'src/slices/loginSlice';

// type Props = {}

const boxStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  padding: '1rem',
  flex: 1,
};

const Image = styled('img')({
  objectFit: 'cover',
});

const Form = styled('form')(() => ({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  height: '100%',
}));

const Login = () => {
  const userName = useAppSelector((state) => state.login.userName);
  const password = useAppSelector((state) => state.login.password);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(setUsername(''));
    // dispatch(setPassword(''));
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'userName') dispatch(setUsername(value));
    if (name === 'password') dispatch(setPassword(value));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box sx={{ flex: 1 }}>
        <Image src={LoginLogo} alt="login-logo" />
      </Box>
      <Box sx={boxStyles}>
        <Typography variant="h5">Login</Typography>
        <TextField
          name="userName"
          label="Username"
          value={userName}
          onChange={handleInput}
          required
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleInput}
          required
        />
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default Login;
