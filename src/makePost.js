import { React } from "react";
import axios from "axios";
import { BASE_URL, COHORT_NAME, TOKEN_KEY } from "./const";
import styles from './makePost.module.css'


const MakePost = ({
    title,
    description,
    price,
    location,
    willDeliver,
    setTitle,
    setDescription,
    setPrice,
    setLocation,
    setWillDeliver
}) => {

    const delivery = () => {
        setWillDeliver(true)
    }

    return (
        <form className={styles.container}
            onSubmit={
                async (event) => {
                    event.preventDefault();

                    try {
                        const response = await axios.post(`${BASE_URL}${COHORT_NAME}/posts`,
                            {method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${TOKEN_KEY}`
                            },
                            body: JSON.stringify({
                                post: {
                                    title,
                                    price,
                                    description,
                                    location,
                                    willDeliver
                                }
                            })
                            }).then(response => response.json())
                            .then(result => {
                                console.log(result)
                            });

                        console.log(response)



                    } catch (err) {
                        console.log('failed to make post');
                        console.error(err)
                    }

                }
            }
        >
            <label className={styles.input}>
                Title
                <input 
                    onChange={setTitle}
                    value={title}
                />
            </label>
            <label className={styles.input}>
                Description
                <input
                    onChange={setDescription}
                    value={description}
                />
            </label>
            <label className={styles.input}>
                Price
                <input
                    onChange={setPrice}
                    value={price}
                />
            </label>
            <label className={styles.input}>
                Location    
                <input
                    onChange={setLocation}
                    value={location}
                />
            </label>
            <p className={styles.input}>Will Deliver?<input type="checkbox" onClick={delivery}></input></p>
            <button>Submit Post</button>


        </form>)
}

export default MakePost