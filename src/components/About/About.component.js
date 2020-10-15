import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";


export default function AboutComponent() {

    const [about, setAbout] = useState("");
    useEffect(() => {
        fetch('http://localhost:4007/form/about/get')
            .then(response => response.json())
            .then(data => setAbout(data.about.about));
    }, []);

    return (
        <div>
            <Typography variant="h5">
                About Us
            </Typography>
            <div>
                {about}
            </div>
        </div>
    );
}
