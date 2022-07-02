import React from 'react'

function Pricing({data}) {
  return (
   

    //   <div className='App'>
    //   <section className='pricing py-5'/>
    //   <div className='container'/>
        
          
          <div className='col-lg-4'>
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
                <h6 className="card-price text-center">{data.amount}<span className="period">/month</span></h6>
                <hr/>
                <ul className="fa-ul">

                     {
                       data.features.map((input)=>{
                            return ( <li className={input.isEnable?'':'text-muted'}><span className="fa-li"><i className={input.isEnable?'fas fa-check':'fa fa-times'}></i></span>{input.name}</li>)
                        })
                     } 

                  {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.h2}</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.h3}</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                   <li className={data.class1}><span className="fa-li"><i className={data.class2}></i></span>Unlimited
                    Private Projects</li>
                  <li className={data.class1}><span className="fa-li"><i className={data.class2}></i></span>Dedicated
                    Phone Support</li>
                  <li className={data.class1}><span className="fa-li"><i className={data.class2}></i></span>{data.data1}Free Subdomain
                  </li>
                  <li className={data.class3}><span className="fa-li"><i className={data.class4}></i></span>Monthly Status
                    Reports</li>  */}
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div> 
    
    
    
   
  )
}

export default Pricing