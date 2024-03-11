import { useState, useEffect } from 'react'

function DogPicture() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const getDogPicture = data['message']

    return (
        <img
            src={getDogPicture}
            alt="placeholder"
            style={{ height: 400, width: 400 }}
        />
    )
}

export default DogPicture
