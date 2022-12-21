import { useEffect, useContext } from "react"
import GithubContext from "../context/github/GithubContext"

function User() {
  const {getUser, user} = useContext(GithubContext)

  useEffect(() => {

  }, [])

  return (
    <div>User</div>
  )
}

export default User