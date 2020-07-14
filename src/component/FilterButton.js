import React from 'react'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


export default function FilterButton(props) {
    const {gender,tulisan} = props
    return (
        <span>
            <Button onClick={gender} >
                <Typography variant="p">{tulisan}</Typography>
            </Button> 
        </span>
    )
}
