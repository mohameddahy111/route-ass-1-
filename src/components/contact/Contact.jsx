import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  TextField,
} from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Title from '../Title';
import style from '../../sass/contact.module.scss';
import { useSnackbar } from 'notistack';

export default function Contact() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submitHandler = () => {
    closeSnackbar();
    enqueueSnackbar('Your message Send Thank you', { variant: 'success' });
  };
  return (
    <Box  id='contact' sx={{mt:'50px' , pt:"50px"}}>
      <Title title='contact' color='#203040' dark />
      <Container className={style.form}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <List>
            <ListItem>
              <Controller
                name='fName'
                defaultValue=''
                control={control}
                rules={{
                  minLength: 3,
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    id='fName'
                    variant='standard'
                    placeholder='Enter Your Name'
                    InputProps={{ type: 'text' }}
                    label='Name'
                    fullWidth
                    error={Boolean(errors.fName)}
                    helperText={
                      errors.fName
                        ? errors.fName.type === 'minLength'
                          ? 'Name is vild'
                          : 'name is Require '
                        : null
                    }
                    {...field}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <Controller
                name='email'
                control={control}
                defaultValue=''
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <TextField
                    id='email'
                    inputProps={{type :'email'}}
                    error={Boolean(errors.email)}
                    placeholder='Enter Your Email'
                    fullWidth
                    variant='standard'
                    label='Email'
                    helperText={
                      errors.email
                        ? errors.email.type === 'pattern'
                          ? 'Email is vild'
                          : 'Email Is Required '
                        : null
                    }
                    {...field}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <Controller
                name='phone'
                control={control}
                defaultValue=''
                rules={{
                  required: true,
                  minLength: 11,
                  maxLength: 15,
                }}
                render={({ field }) => (
                  <TextField
                    id='phone'
                    InputProps={{ type: 'text' }}
                    error={Boolean(errors.phone)}
                    fullWidth
                    variant='standard'
                    label='Phone'
                    helperText={
                      errors.phone
                        ? errors.phone.type === 'minLength'
                          ? 'Phone is vild'
                          : 'Phone is Required '
                        : null
                    }
                    {...field}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <label htmlFor='message'> Message</label>
            </ListItem>
            <ListItem>
              <textarea
                rows={5}
                placeholder='Message'
                id='message'
                required
              ></textarea>
            </ListItem>
            <ListItem>
              <Button type='submit' variant='contained'>
                Send
              </Button>
            </ListItem>
          </List>
        </form>
      </Container>
    </Box>
  );
}
