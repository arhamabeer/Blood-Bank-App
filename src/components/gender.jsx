import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: 500,
        marginBottom: -5
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function GenderSelect({func}) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    func(age)
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                </Select>
                <FormHelperText>*required</FormHelperText>
            </FormControl>
        </div>
    );
}