import { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@mui/material';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import memories from './assets/images/memories.png';
import Posts from './components/posts/posts.component';
import Form from './components/form/form.component';
import useStyles from './styles';

//import './App.css';

function App() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
       <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Thoughts....</Typography>
        </AppBar>
        <Grow in>
          <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>            
          </Container>
        </Grow>
    </Container>
  );
}

export default App;
