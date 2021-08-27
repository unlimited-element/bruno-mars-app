import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import '../App.css';
// import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        width: theme.spacing(50),
        [theme.breakpoints.down('sm')]: {
          width: theme.spacing(25),
        },
        height: theme.spacing(50),
      },
    },
    paperColor: {backgroundColor: '#0B0B0B'},
    input: {
      color: "#FFF",
    },
  }));

 
const Ex = () => {
    const classes = useStyles();

    return (
    <Container maxWidth="sm">
    <Paper className={classes.paperColor} elevation={3}>
    <form className={classes.root} noValidate>
    <TextField 
    inputProps={{ className: classes.input }}
    id="standard-basic" 
    label="Multiline"
    multiline
    maxRows={4}
    />
    </form>     
    </Paper>  
    </Container>
 
    )
}
 
export default Ex;