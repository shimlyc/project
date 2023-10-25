import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Section1(props){
  const{image,title}=props

    return(
        <>
      
      

<div className='container'>
  <div className='row'>
       
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img className='img1' src={image} alt=""></img>
            <div className="card-body">
              <h3 className='hdg'>{title}</h3>
            
              <div className="star">
                <i className="fa-solid fa-star checked"></i>
                <i className="fa-solid fa-star checked"></i>
                <i className="fa-solid fa-star checked"></i>
                <i className="fa-solid fa-star "></i>
                <i className="fa-solid fa-star "></i>
              </div>
              <h6>Price: <strong>$500</strong></h6>
              <a href="#book">Book Now</a>
            </div>
          </div>
        </div>
       
 
        </div>
        </div>
 

 


        </>
    )
}
export default Section1