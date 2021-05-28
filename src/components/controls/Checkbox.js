import React from 'react'
import { FormControl, FormControlLabel, FormHelperText, Checkbox as MuiCheckBox } from '@material-ui/core'


const Select = (props) => {
    const { name, label, value, error=null, onChange, ...options } = props

    const convertToDefEventParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl variant='outlined' fullWidth
        {...(error && {error:true})}
        >
            <FormControlLabel
                control={
                <MuiCheckBox 
                    name = {name}
                    color = "primary" 
                    checked = {value}
                    onChange = {e => onChange(convertToDefEventParam(name, e.target.checked))}
                    {...options}
                />}
                label={label}
            ></FormControlLabel>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select