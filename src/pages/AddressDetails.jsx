import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const AddressDetails = () => {
  const { id } = useParams();
  const [addressData, setAddressData] = useState({})

  async function getData (id) {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(`${url}/${id}`)
    const data = await res.json();
    setAddressData(data.address)
  }

  useEffect(() => {
      getData(id)
  }, [id])

  function createElements() {
    const personalInfoElements = []
    for (const key in addressData) {
      const element = <p key={addressData[key]}>{key + ': ' + JSON.stringify(addressData[key])}</p>
      personalInfoElements.push(element)
    }
    return personalInfoElements
  }

  return (
    <div>{createElements()}</div>
  )
}

export default AddressDetails