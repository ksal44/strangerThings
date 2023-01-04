import { React } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL, COHORT_NAME } from "./const";
import axios from "axios";
import styles from './login.module.css'

const Login = ({
    username,
    password,
    setUsername,
    setPassword,
    setToken,
}) => {
    const history = useHistory();

    return (
        <form
          className={styles.container}
          onSubmit={
            async (event) => {
              event.preventDefault();
    
              const responseToken = await axios.post(
                `${BASE_URL}${COHORT_NAME}/users/login`,
                {
                  user: {
                    username,
                    password,
                  },
                },
              );;
    
              setUsername('');
              setPassword('');
              setToken(responseToken);
    
              history.push('/posts');
            }
          }
        >
          <label className={styles.username}>
            Username: 
            <input
              onChange={setUsername}
              value={username}
            />
          </label>
          <label className={styles.username}>
            Password: 
            <input
              onChange={setPassword}
              value={password}
              type={'password'}
            />
          </label>
          <button>Login</button>
        </form>
      );
}

export default Login