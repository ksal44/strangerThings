import { useEffect, useState } from 'react';
import { BASE_URL, COHORT_NAME } from './const';
import styles from './posts.module.css'
import { useHistory } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory()


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
    <h1 className={styles.title}>
      Posts
    </h1>
<div className={styles.allPosts}>
    {
      posts.map(post => <div key={post._id} className={styles.posts}>
        <h3>{post.title}</h3>
        <div>{post.description}</div>
        <div>{post.price}</div>


        <button
          onClick={
            () => {
              history.push({pathname:`/posts/${post._id}`,
            state: post});
              console.log(post.title)
              console.log(post.description)
              console.log(post.price)
            }
          }
        >
          View Listing
        </button>


      </div>)

    }
    </div>
  </>


}

export default PostList