// import axios from 'axios';
// import { BASE_URL, COHORT_NAME } from './const';

// export const signup = async (username, password) => {
//     try {
//         const response = await axios.post(
//             `${BASE_URL}${COHORT_NAME}/users/register`,
//             {
//                 user: {
//                     username,
//                     password,
//                 },
//             },
//         );

//         const responseToken = response.data.data.token;

//         return responseToken;
//     } catch (err) {
//         console.log('FAILED TO SIGNUP!');
//         console.error(err);

//         throw err
//     }
// }