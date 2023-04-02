import React from 'react'

export default function Web() {
    const handleInput=()=>{
    
        alert("THANK FOR SUGGESTION");
    }
  return (
    <div>
    <h1><b>NVN</b></h1><br></br>
    <h1 id='word'>hello everyone im opening my new startup company electrical gagets </h1>
    <br></br>
   
    <ul><a href='https://www.justdial.com/Chennai/Laptop-Dealers/nct-10935592'>LAPTOPS</a></ul>
    <ul><a href='webstore/detail/tab-store/ceoengfplhhjknejgmkkbdnljebkdomd?hl=en'>TABS</a></ul>
    <ul><a href='https://www.gadgets360.com/mobiles'>MOBILE GADGETS</a></ul>
    <label>enter your suggestion: </label>
    <input type='text' name="fname" ></input><br></br><br></br>
    <button type='button'  onClick={handleInput}>submit</button>

    <br></br>
    <h1>contact us through: </h1>
    <a href='https://instagram.com/navin.mazz?igshid=ZDdkNTZiNTM='><img id='in' src='https://cdn-icons-png.flaticon.com/512/174/174855.png'></img></a>


    </div>
  )
}