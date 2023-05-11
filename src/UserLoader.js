import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserLoader = ({ userId, children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
            console.log(response);
        })()
    }, [userId]);

    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { user })
                    }
                    return child;
                })
            }
        </>
    )
}

export default UserLoader
