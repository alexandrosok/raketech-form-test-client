import {rgbToHex, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default withStyles(() => ({
    root: {
        color: '#fff',
        backgroundColor: 'rgb(85, 172, 115)',
        '&:hover': {
            backgroundColor: 'rgb(85, 172, 115)',
        },
    },
}))(Button);
