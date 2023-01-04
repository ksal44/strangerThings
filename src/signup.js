import { React } from "react";
import axios from "axios";
import { BASE_URL, COHORT_NAME } from "./const";
import styles from './signup.module.css'


const SignUp = ({
    username,
    password,
    setUsername,
    setPassword,
    setToken
}) => {
    // const history = useHistory();

    // const setValue = (cb) => {
    //     return (event) => {
    //         cb(event.target.value)
    //     }
    // }
    return (
        <form className={styles.container}
            onSubmit={
                async (event) => {
                    event.preventDefault();

                    try {
                        const response = await axios.post(`${BASE_URL}${COHORT_NAME}/users/register`,
                            {
                                user: {
                                    username,
                                    password,
                                }
                            },
                        );

                        const givenToken = response.data.data.token
                        // localStorage.setItem(TOKEN_KEY, givenToken)
                        setToken(givenToken);


                    } catch (err) {
                        console.log('Failed to Register!');
                        console.error(err)
                    } 

                }
            }
        >
            <label>
                Username
                <input
                    onChange={setUsername}
                    value={username}
                />
            </label>
            <label>
                Password
                <input
                    onChange={setPassword}
                    type={'password'}
                    value={password}
                />
            </label>
            <button>Sign Up</button>



        </form>
    )}

export default SignUp