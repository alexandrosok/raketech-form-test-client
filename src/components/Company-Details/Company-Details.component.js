import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";


export default function CompanyDetailsComponent() {

    const [companyDetails, setCompanyDetails] = useState("");
    useEffect(() => {
        fetch('http://localhost:4007/form/company-details/get')
            .then(response => response.json())
            .then(data => setCompanyDetails(data.details));
    }, []);

    return (
        <div>
            <Typography variant="h5">
                The Company
            </Typography>
            <div>
                {companyDetails}
            </div>
        </div>
    );
}
