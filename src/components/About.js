import React from 'react'

export default function About(props) {
   // const[mystyle,setmystyle]=useState({
  
//color:'black',
//backgroundColor:'white'

   // })
   // const[btntext,setbtntext]=useState("Enable Dark Mode")
  /*  const toggleStyle=()=>{
        if(mystyle.color==='white'){
            setmystyle({
                
                    color:'black',
                    backgroundColor:'white' , 
                    border:'2px solid white'
                  })
                setbtntext("Enable Dark Mode");
            }
            else{
                setmystyle({
                
                    color:'white',
                    backgroundColor:'black'  
                })
                setbtntext("Enable Light Mode");
            }
        }*/
    let mystyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'rgb(78 146 201)':'white',
     
    }
  return (
    <div className="container" >
        <h1 className="my-2" style={ { color:props.mode==='dark'?'white':'#042743'}}
        >About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       Empower your content with TextUtil's cutting-edge text analysis tools, unveiling valuable insights and
        enhancing your website's impact. 
       
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      Unlock the power of TextUtil's analysis tools for free and elevate your content without cost.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      Seamlessly compatible with all major web browsers for effortless accessibility.
      </div>
    </div>
  </div>
</div>

 </div>
    
  )
}
