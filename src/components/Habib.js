import React from 'react'

const Habib = () => {
  return (
    <>
    <div style={habib} >
    <h1 style={heading} >Registration</h1>
    <h3 style={name} > Name: <input style={input} placeholder='enter your name' ></input> </h3> 
    <h3 style={name} > Mobile: <input style={input} placeholder='enter your mobile number' ></input></h3>
    <h3 style={name} > Present Address: <input style={input} placeholder='enter your present address' ></input></h3>
    <h3 style={name} > Parmanent Address: <input style={input} placeholder='enter your parmanent address' ></input></h3>

    <button style={btn} >Send</button>
    </div>
    </>
  )

  


}
const habib ={
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
}
const heading={
    color: "blue",
    backgroundColor: "#dddddd",
    textAlign: "center",
    fontSize: "36px"
}
const btn ={
    backgroundColor: "blue",
    padding: "8px 30px",
    marginTop: "10px",
    borderRadius: "5px",
    textAlign : "center",
    margin: "0 auto"
}
const name ={
    textAlign : "center",
    marginTop : "16px",
}
const input ={
    border: "3px solid blue"
}
const main = {
    backgroundColor: "ddddddd"
}

export default Habib