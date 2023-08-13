import { useState } from 'react'
import axios from 'axios'

const useFetch = (baseUrl) => {
  //
  const [infoApi, setInfoApi] = useState()

  //GET - READ
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`
    axios
      .get(url)
      .then((res) => {
        setInfoApi(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //POST - CREATE
  const createNewRegister = (path, data) => {
    const url = `${baseUrl}${path}/`
    axios
      .post(url, data)
      .then((res) => {
        setInfoApi([...infoApi, res.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //DELETE - DELETE
  const deleteRegister = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data)
        const filtered = infoApi.filter((element) => element.id !== id)
        setInfoApi(filtered)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //PUT - UPDATE

  const updateRegister = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios
      .put(url, data)
      .then((res) => {
        console.log(res.data)
        const updated = infoApi.map((element) => {
          if (element.id === id) {
            return data
          } else {
            return element
          }
        })
        setInfoApi(updated)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return [infoApi, getApi, createNewRegister, deleteRegister, updateRegister]
}

export default useFetch
