import './UserCard.css'

const UserCard = ({ user, deleteUserById, updateUserById }) => {
  const hadleDeleteUser = () => {
    deleteUserById('/users', user.id)
  }
  const hadleUpdateUser = () => {
    updateUserById('/users', user.id)
  }

  return (
    <article className="card">
      <div className="text_card">
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <ul>
          <li className="card_email">
            <span><i className='bx bx-envelope' ></i></span>
            <span> {user.email}</span>
          </li>
          <li>
            <span>
              <i className="bx bx-calendar-alt"></i>
            </span>
            <span> {user.birthday}</span>
          </li>
        </ul>
      </div>

      <div className="flex_card">
        <button onClick={hadleDeleteUser}>
          <i className="bx bx-trash btn_card_t"></i>
        </button>
        <button onClick={hadleUpdateUser}>
          <i className="bx bx-edit btn_card_c"></i>
        </button>
      </div>
    </article>
  )
}

export default UserCard
