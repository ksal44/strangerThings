// import axios from 'axios'
import styles from "./App.modules.css"
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { TOKEN_KEY } from './const';
import SignUp from './signup';
import Login from './login';
import Home from './home';
import PostList from './posts';
import Header from './Header';
import SinglePost from "./singlePost";
import Logout from "./logout"
import MakePost from "./makePost";




const App2 = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver]= useState(false)


    const logout = useCallback(() => {
        localStorage.removeItem(TOKEN_KEY);
        setToken('');
    }, []);

    const setStoreToken = (givenToken) => {
        localStorage.setItem(TOKEN_KEY, givenToken)
        setToken(givenToken)
    }

    useEffect(() => {
        const storageToken = localStorage.getItem(TOKEN_KEY);
        setToken(storageToken)

    }, [])


    const setValue = (e) => {
        return (event) => {
            e(event.target.value)
        }
    }

    if (!token) {
        return (
            <div className={styles.app}>
                <Router>
                    <Switch>
                        <Route>
                            <div className={styles.page}>
                                <h1>FirstPage</h1>
                                <div className={styles.signup}>
                                    <SignUp
                                        username={username}
                                        password={password}
                                        setUsername={setValue(setUsername)}
                                        setPassword={setValue(setPassword)}
                                        setToken={setStoreToken}
                                    />
                                </div>
                                <div className={styles.login}>

                                    <Login
                                        setUsername={setValue(setUsername)}
                                        setPassword={setValue(setPassword)}
                                        setToken={setStoreToken} />
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </Router>

            </div>
        )
    }
    return (


        <div className='header'>
            <Header
                logout={logout} />

            <Router>
                <Switch>
                    <Route exact path={"/home"} >
                        <Home />
                    </Route>
                    <Route exact path={"/"}>
                        <Redirect to={"/home"} />
                    </Route>
                    <Route exact path={"/posts"}>
                        {<PostList
                            token={token}
                            posts={posts}
                            setPosts={setPosts} />}
                    </Route>
                    <Route
                        exact
                        path={'/posts/:postId'}
                        render={
                            (routeProps) => {
                                const {
                                    match: {
                                        params: {
                                            postId,

                                        },
                                    },
                                } = routeProps;

                                return (
                                    <SinglePost
                                        postId={postId}

                                    />
                                );
                            }
                        }
                    />
                    <Route
                    exact path={'/makepost'}>
                        <MakePost 
                            title={title}
                            setTitle={setValue(setTitle)}
                            description={description}
                            setDescription={setValue(setDescription)}
                            price={price}
                            setPrice={setValue(setPrice)}
                            location={location}
                            setLocation={setValue(setLocation)}
                            willDeliver={willDeliver}
                            setWillDeliver={setWillDeliver}
                            />

                    </Route>

                    <Route path="/login">
                        {<Login />}
                    </Route>
                    <Route exact path={'/logout'}>
                        <Logout />

                    </Route>

                </Switch>
            </Router>

        </div>

    )

}

export default App2