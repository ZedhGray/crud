import './App.css'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  
  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech/'
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl)

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  return (
    <div className="App">
      <header className="header">
        <h1>CRUD</h1>
        <section>
          <FormUsers createNewUser={createNewUser} updateInfo={updateInfo} updateUserById={updateUserById} setUpdateInfo={setUpdateInfo}/>
        </section>
      </header>

      <main>
        <section className='container_cards'>
          {users?.map((user) => (
            <UserCard
              key={user._id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
