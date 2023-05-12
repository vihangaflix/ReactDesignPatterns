import axios from 'axios';
import React, { useEffect } from 'react'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const withEditableResource = (Component, resourcePath, resourceName) => {

    console.log(resourcePath, resourceName);

    return (props) => {
        const [originalData, setOriginalData] = React.useState(null);
        const [data, setData] = React.useState(null);

        useEffect(() => {
            (async () => {
                const responese = await axios.get(resourcePath);
                setOriginalData(responese.data);
                setData(responese.data);
            })()
        }, [])

        const onChange = (changes) => {
            setData({ ...data, ...changes });
        }

        const onSave = async () => {
            const responese = await axios.post(resourcePath, {[resourceName] : data});
            setOriginalData(responese.data);
            setData(responese.data);
        }

        const onReset = () => {
            setData(originalData);
        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onSave${capitalize(resourceName)}`]: onSave,
            [`onReset${capitalize(resourceName)}`]: onReset,
        }

        return <Component {...props} {...resourceProps}/>
    }

}

export default withEditableResource
