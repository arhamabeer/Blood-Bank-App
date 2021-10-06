import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function AddressWithIcon({func}) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <TextField type='text' id="input-with-icon-grid" onChange={e => func(e.target.value)}  label="Enter complete Address" />
                    </Grid>
                </Grid>
                
            </div>
        </div>
    );
}