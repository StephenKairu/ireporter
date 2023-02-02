import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../../SideBar/SideBar";
import "./home.css"

function Home(){
    const [data, setData] = useState([])
    const [name, setName] =useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')
    const [identity, setIdentity] =useState(1)
    const url = "https://ireporter-backend-render.onrender.com/reports"
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
            setName(json.report_title)
            setMessage(json.report_message)
            setImage(json.report_image)
            
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
            <div className=" search">
            <input className="w-96 text-green-800 font-bold ml-17" value={search} onChange={handleChange}
        type="text"
        placeholder="Search"
      />
      <div>
      <div className="home-card">

<div className="home-row"> 
  <div>
  {data.sort((a,b) => a.id < b.id ? 1 : -1).map((reports)=>( 
          
          <div key={reports.id} className='card-home' onClick={()=>{ setIdentity(reports.id)}}>
              {/* <div className='home-div'>
                  <img src={reports.report_image} className="w-30 h-24" alt="avatar"/>
              </div> */}
              <div className="home-content p-3">
                  <h3 className="font-bold text-xl">{reports.report_title}</h3>
                  <p>{reports.report_message}</p>
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
      <h4 className="p-2 text-xl font-bold">{name}</h4>
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
    export default Home