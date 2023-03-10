import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../../SideBar/SideBar";

function Alerts(){
    const [data, setData] = useState([])
    const [name, setName] =useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')
    const [identity, setIdentity] =useState(1)
    const url = "https://reporting-production.up.railway.app/alerts"
    const urlpath = url + "/" + identity
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json =>{
            setData(json)
            
        })
    }, [])

  
    useEffect(()=>{
        fetch(urlpath)
        .then(res=>res.json())
        .then(json =>{
            setName(json.title)
            setMessage(json.message)
            setImage(json.image)
            
        })
    }, [ identity ])
    // console.log(data)
    console.log(name)

    const [search, setSearch] = useState("") //controll the form

    function handleChange(e){ //should filter what we entered
      setSearch(e.target.value) //update state
      handleSearching(search)
    }
    function handleSearching(search){
        setData(info=>info.filter(info=>info.title.includes(search)))
      }
    return(
        <Fragment>
            <Sidebar/>
            <div className="ml-20">
            <input className="w-96" value={search} onChange={handleChange}
        type="text"
        placeholder="filter"
      />
      <div>
      <div className="home-card">

<div className="home-row"> 
  <div>
  {data.map((reports)=>( 
          
          <div key={reports.id} className='card-home' onClick={()=>{ setIdentity(reports.id)}}>
              <div className='home-div'>
                  <img src={reports.image} alt="avatar"/>
              </div>
              <div className="home-content">
                  <h2>{reports.title}</h2>
                  <p>{reports.message}</p>
              </div>
          </div>

      ))}
  </div>
  </div>
  <div>
  <div className="home-row1">
      <div>
      <div>
          <img src={image} alt="image" className="home-image1" />
      </div>
      <div>
      <h4>{name}</h4>
      <p>{message}</p>
      </div>
      </div>


  </div>
  </div>


</div>
      </div>


 
        </div>
        


        </Fragment>
    )
}
    export default Alerts