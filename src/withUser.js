import axios from 'axios';
import React, { useEffect } from 'react'

const withUser = (Component, userId) => {
  return (props) => {

    const [user, setUser] = React.useState(null);

    useEffect(() => {
        (async() => {
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        })()
    })
    return <Component {...props} user={user} />
  }
}

export default withUser
