import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const PersonalDetails = () => {

  const { id } = useParams()
  const [personalData, setPersonalData] = useState({});

  async function getData(id) {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(`${url}/${id}`)
    const data = await res.json();
    setPersonalData({
      id: data.id,
      username: data.username,
      email: data.email,
      phone: data.phone,
      name: data.name,
      website: data.website

    })
  }

  useEffect(() => {
    getData(id)
  }, [id])

  function createElements() {
    const personalInfoElements = []
    for (const key in personalData) {
      const element = <p key={personalData[key]}>{key + ': ' + personalData[key]}</p>
      personalInfoElements.push(element)
    }
    return personalInfoElements
  }

  console.log(createElements())



  return (
    <div>{createElements()}</div>
  )
}

export default PersonalDetails