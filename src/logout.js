import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const Logout = ({ logoutTime }) => {
    const history = useHistory();
  
    const [timeoutId, setTimeoutId] = useState(null);


    useEffect(() => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      let tId = setTimeout(() => {
        history.push('/home');
      }, 3000);
  
      setTimeoutId(tId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logoutTime]);
  
    return (
      <h1>Logged Out, Redirecting...</h1>
    );
  };
  
  export default Logout;