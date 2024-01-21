import { useEffect, useState } from "react"

function useIterator(url) {
    const [userList, setUserList] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const prev = () => {
        const currentUserIndex = userList.findIndex(user => user.id.value === currentUser.id.value)
        setCurrentUser(userList[currentUserIndex - 1])
    }
    const next = () => {
        if(currentUser?.id.value === userList[userList.length - 1]?.id.value) {
            fetchUser()
        } else {
            const currentUserIndex = userList.findIndex(user => user.id.value === currentUser.id.value)
            console.log('currentIndex', currentUserIndex)
            setCurrentUser(userList[currentUserIndex])
        }
    }

    const fetchUser = () => {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data)
            setUserList(prevState => {
                console.log('prev', prevState)
                prevState ? setUserList([...prevState, data.results[0]]) : setUserList([data.results[0]])
                return userList
            })
            setCurrentUser(data.results[0])
        })
    }
    useEffect(() => {
        fetchUser()
    },[])
    return [userList, currentUser, prev, next]
}

export default useIterator