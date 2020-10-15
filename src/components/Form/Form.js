import React, {useState} from "react";
import {useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import './Form.style.css';
import Box from '@material-ui/core/Box';
import DialogComponent from "../Dialog/Dialog.component";
import SubmitButton from '../Submit-Button/Submit-Button.component';

export const FormComponent = () => {

    const {handleSubmit, register, errors} = useForm();
    const [showDialog, setShowDialog] = useState(false);

    const onSubmit = () => {
        setShowDialog(true);
    };

    const onClose = () => {
        setShowDialog(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box m={1}>
                <Grid item xs={10} md={10}>
                    <label>
                        <Grid item xs={12} md={12}>
                            Your Name <span className='req-asterisk'>*</span>
                        </Grid>
                        <TextField fullWidth name='name' error={!!errors.name} variant='filled'
                                   id="standard-required"
                                   borderColor={'#fff'}
                                   color={'#fff'}
                                   label="Your Name" inputProps={{
                            ref:
                                register({
                                    required: 'Required',
                                })
                        }}/>
                    </label>
                </Grid>
            </Box>

            <Box m={1}>
                <Grid item xs={10} md={10}>
                    <Grid item xs={12} md={12}>
                        Your Email <span className='req-asterisk'>*</span>
                    </Grid>
                    <TextField fullWidth name='email' error={!!errors.email} variant='filled'
                               id="standard-required"
                               borderColor={'#fff'}
                               color={'#fff'}
                               label="Your Email" inputProps={{
                        ref:
                            register({
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })
                    }}/>
                </Grid>
            </Box>
            <Box m={1}>
                <Grid item xs={10} md={10}>
                    <Grid item xs={12} md={12}>
                        Subject
                    </Grid>
                    <TextField fullWidth name='subject' variant='filled'
                               id="standard-required"
                               borderColor={'#fff'}
                               color={'#fff'}
                               label="Your Subject"/>
                </Grid>
            </Box>
            <Box m={1}>
                <Grid item xs={10} md={10}>
                    <Grid item xs={12} md={12}>
                        Your Message <span className='req-asterisk'>*</span>
                    </Grid>
                    <TextField fullWidth name='messageContent' error={!!errors.messageContent} multiline rows={10}
                               variant='filled'
                               borderColor={'#fff'}
                               color={'#fff'}
                               label="Message"
                               inputProps={{
                                   ref:
                                       register({
                                           required: 'Required',
                                       })
                               }}
                    />
                </Grid>
            </Box>
            <Box m={1}>
                <Grid item xs={12} md={12}>
                    <SubmitButton type='submit' color='' variant="contained">CONTACT</SubmitButton>
                </Grid>
            </Box>
            <DialogComponent onClose={onClose} open={showDialog}/>
        </form>
    );
};
