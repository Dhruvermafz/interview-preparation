import React, { useState } from 'react'
import { useEffect } from 'react'
import User from './user'
import "./styles.css"
const GithubFinder = () => {
    const [username, setUsername] = useState("dhruvermafz")
    const [userData, setUserdata] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchGithubUserData = async ()=> {
        setLoading(true)

        const res = await fetch(`https://api.github.com/users/${username}`)

        const data = await res.json()
        if(data) {
            setUserdata(data)
            setLoading(false)
            setUsername('')
        }
    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if(loading) {
        return <h1>Loading..data! Please Wait!</h1>
    }
  return (
    <div className='github-profile-container'>
        <div className="input-wrapper">
            <input type="text" name='search-by-username'
            placeholder='Search Github username' value={username} onChange={(e) => setUserdata(e.target.value)} />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : null}
      
    </div>
  )
}

export default GithubFinder
