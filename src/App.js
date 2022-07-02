import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pricing from "./Pricing";

function App() {
  const changes=[{
    title:"FREE",
    amount:"$0",
    features:[{
      name:"Single User",
      isEnable: true
    },{
      name:"5GB Storage",
      isEnable: true
    },{
      name:"Unlimited Public Project",
      isEnable: true
    },{
      name:"Community Access",
      isEnable: true
    },{
      name:"Unlimite Private Projects",
      isEnable: false
    },{
      name:"Dedicated Phone Support",
      isEnable: false
    },{
      name:"Free Subdomain",
      isEnable: false
    },{
      name:"Monthly Status Reports",
      isEnable: false
    }]
      
    
  },{
    title:"PLUS",
    amount:"$9",
    features:[{
      name:"5 User",
      isEnable: true
    },{
      name:"50GB Storage",
      isEnable: true
    },{
      name:"Unlimited Public Project",
      isEnable: true
    },{
      name:"Community Access",
      isEnable: true
    },{
      name:"Unlimite Private Projects",
      isEnable: true
    },{
      name:"Dedicated Phone Support",
      isEnable: true
    },{
      name:"Free Subdomain",
      isEnable: true
    },{
      name:"Monthly Status Reports",
      isEnable: false
    }]},{
      title:"PRO",
      amount:"$49",
      features:[{
        name:"Unlimited User",
        isEnable: true
      },{
        name:"150GB Storage",
        isEnable: true
      },{
        name:"Unlimited Public Project",
        isEnable: true
      },{
        name:"Community Access",
        isEnable: true
      },{
        name:"Unlimite Private Projects",
        isEnable: true
      },{
        name:"Dedicated Phone Support",
        isEnable: true
      },{
        name:"Unlimited Free Subdomain",
        isEnable: true
      },{
        name:"Monthly Status Reports",
        isEnable: true
      }]
      }]


  return (
    
     <section className='pricing py-5'>
     <div className='container'> 
      <div className='row'> 
      { changes.map((input)=>{
          return <Pricing data={input}></Pricing>
        })
      }

        {/* <Pricing price="$0" head="plus" class1="text-muted" class2="fas fa-check"></Pricing>
        <Pricing price="$9" head="plus"></Pricing>
        <Pricing price="$49" head="plus"></Pricing> */}
        </div> 
      </div>
      </section>
      

      
  );
}

export default App;
