import React from 'react';
import Typography from "@material-ui/core/Typography";
import './FormTitle.style.css'


export default function FormTitleComponent() {

    return (
        <div className='form-title-container'>
            <Typography variant="h4" className='form-title'>
                Get In Touch
            </Typography>
        </div>
    );
}
