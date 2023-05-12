import axios from 'axios';
import React, { useEffect } from 'react'

const withEditableUser = (Component, userId) => {
    return (props) => {
        const [originalUser, setOriginalUser] = React.useState(null);
        const [user, setUser] = React.useState(null);

        useEffect(() => {
            (async () => {
                const responese = await axios.get(`/users/${userId}`);
                setOriginalUser(responese.data);
                setUser(responese.data);
            })()
        }, [])

        const onChangeUser = (e) => {
            setUser({
                ...user,
                ...e
            })
        }

        const onSaveUser = async () => {
            const responese = await axios.post(`/users/${userId}`, {user});
            setOriginalUser(responese.data);
            setUser(responese.data);
        }

        const onResetUser = () => {
            setUser(originalUser);
        }

        return <Component {...props} 
        user={user} 
        onChangeUser={onChangeUser} 
        onSaveUSer={onSaveUser}
        onResetUser={onResetUser}
        />
    }

}

export default withEditableUser
