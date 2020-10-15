import React, {useEffect, useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

export default function DialogComponent(props) {

    const {open, onClose} = props;
    const [submitMessage, setSubmitMessage] = useState('');
    useEffect(() => {
        fetch('http://localhost:4007/form/submit-message/get')
            .then(response => response.json())
            .then(data => setSubmitMessage(data.submitMessage.submitMessage));
    }, []);

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Form Submitted</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {submitMessage}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}
