import { useEffect, useState } from 'react';
import { BASE_URL, COHORT_NAME } from './const';
import styles from './singlePost.module.css'


const SinglePost = (props) => {
  const [posts, setPosts] = useState([]);
  // console.log(posts);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');




  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`)
      const data = await response.json();
      setPosts(data.data.posts);
      console.log(data.data.posts)

    }
    fetchPosts()
  
  }, [])

  return <>
    <h1>
      Post
    </h1>

    {
      posts.filter(post => post._id===props.postId).map(post => <div key={post._id} className={styles.posts}>
        <h3>{post.title}</h3>
        <div className={styles.item}>Description: {post.description}</div>
        <div className={styles.item}>Price: ${post.price}</div>
        <div className={styles.item}> Location: {post.location}</div>
        <div className={styles.item}>Delivery: {post.willDeliver}</div>




      </div>)

    }
  </>

};

export default SinglePost