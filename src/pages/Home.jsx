import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const [data, setData] = useState(null)

  function handleChange (e ) {
    const value = e.target.value;
    setData(value)
  }

  function handleClick(e) {
    e.preventDefault();
    if(!data || data > 10 || data < 0 || isNaN(data)) return;

    const value = e.target.value;

      navigate(`/${value}/${data}`)
  }

  return (
    <div id="home">
      <form>
        <input type="text" placeholder="user id" onChange={handleChange} value={data}/>
        <button onClick={handleClick} value="address">Address</button>
        <button onClick={handleClick} value="personal">Personal Info</button>
      </form>
    </div>
  )
}

export default Home