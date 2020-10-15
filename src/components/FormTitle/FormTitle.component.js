import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import './FormTitle.style.css';
import {Host} from "../../Helpers/UrlList";


export default function FormTitleComponent() {

    const [formTitle, setFormTitle] = useState("");
    useEffect(() => {
        fetch(`${Host}form/title/get`)
            .then(response => response.json())
            .then(data => setFormTitle(data.title));
    }, []);

    return (
        <div className='form-title-container'>
            <Typography variant="h4" className='form-title'>
                {formTitle}
            </Typography>
        </div>
    );
}
