import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function AgeWithIcon({func}) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <TextField type='number' id="input-with-icon-grid" onChange={e => func(e.target.value)} label="Enter Age" />
                    </Grid>
                </Grid>
                <FormHelperText>*required</FormHelperText>
            </div>
        </div>
    );
}