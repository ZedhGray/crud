import { useForm } from 'react-hook-form'
import './FormUsers.css'

const FormUsers = ({ createNewUser }) => {
  const { register, reset, handleSubmit } = useForm()

  const submit = (data) => {
    createNewUser('/users', data)
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <p className="title">Register</p>
      <div className="flex">
        <label htmlFor="first_name">
          <input
            {...register('first_name')}
            id="first_name"
            type="text"
            required=""
            placeholder=""
            className="input"
          />
          <span>First Name</span>
        </label>

        <label htmlFor="last_name">
          <input
            {...register('last_name')}
            id="last_name"
            type="text"
            required=""
            placeholder=""
            className="input"
          />
          <span>Last Name</span>
        </label>
      </div>
      <label htmlFor="email">
        <input
          {...register('email')}
          id="email"
          type="email"
          required=""
          placeholder=""
          className="input"
        />{' '}
        <span>Email</span>
      </label>

      <label htmlFor="password">
        <input
          {...register('password')}
          id="password"
          type="password"
          required=""
          placeholder=""
          className="input"
        />{' '}
        <span>Password</span>
      </label>

      <label htmlFor="birthday">
        <input
          {...register('birthday')}
          id="birthday"
          type="date"
          required=""
          placeholder=""
          className="input"
        />
        <span>Birthday</span>
      </label>
      <button className="submit">Create</button>
    </form>
  )
}

export default FormUsers
