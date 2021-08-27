import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import '../App.css';

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
    paperColor: {backgroundColor: '#FFD898'},
    input: {
      color: "white",
    },
  }));

const ValidationTextField = withStyles({
    root: {
      margin: 'auto',
      display: 'flex',
      
      '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 5,
      },
      '& input:valid:focus + fieldset': {
        borderColor: 'white',
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);


 
const Home = () => {
    const classes = useStyles();

    return (
    <Container maxWidth="sm">
    <Paper className={classes.paperColor} elevation={3}>
    <form className={classes.root} noValidate>
    <ValidationTextField
        inputProps={{ className: classes.input }}
        className={classes.root}
        label="Bruno Mars Lyrics Here"
        required
        variant="outlined"
        defaultValue="Success"
        id="validation-outlined-input"
        
      />
    </form>     
    </Paper>  
    </Container>
 
    )
}
 
export default Home;