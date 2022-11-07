import React from "react";
import { Grid, CircularProgress } from '@mui/material'; 
import { useSelector } from "react-redux";
import Post from './post/post.component';
import useStyles from './posts.styles';

const Posts = ({ setCurrentId }) => {
    //const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={4}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;