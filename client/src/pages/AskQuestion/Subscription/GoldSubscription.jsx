import React,{ useState} from 'react'
// import { Link } from 'react-router-dom'
import Visa from '../../../assets/payment.svg'
import MasterCard from '../../../assets/mastercard.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCreditCard,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import icon from '../../../assets/favicon-32x32.png'

import './Subscription.css'
// import {useSelector} from 'react-redux';

const GoldSubscription = () => {
  // var User=useSelector((state)=> (state.currentUserReducer));

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuItems = [
    { label: 'Yearly, billed upfront', value: 'upfront' },
    { label: 'Yearly, billed monthly ', value: 'monthly' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <>
     <section >
     <div className='title-container'>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#fbf3d5" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,176C672,181,768,139,864,144C960,149,1056,203,1152,234.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
     </div>
      <div className='main-container-gold'>
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="card-body">
         
            <div className="payment-info">
            <h3>Enter payment Info to start your Subscription</h3>
              {/* <h6 style={{marginLeft:'5px', marginTop:'15px'}}>Signed in as <br /> <Link to={`/Users/${User?.result?._id}`} style={{color:"black", textDecoration:"none", fontWeight:'400', fontSize:'14px'}}>{User.result.email}</Link></h6> */}
             <hr style={{width:'31%'}}/>
              <div className="payment-form">
                <form action="">
                  <h6 style={{marginLeft:'5px', marginTop:'10px'}}>Your business info</h6>
                  <input type="text" placeholder='Business name' style={{ width: '31%' }}   /> <br />
                  <input type="text" placeholder='Business phone' style={{ width: '31%' }} />
                  <h6 style={{marginLeft:'5px', marginTop:'15px'}}>Your payment method</h6>
                  <div className='payment-img'>
                    <img src={Visa} alt="visa" width='30px'/> 
                    <img src={MasterCard} alt="master-card" width='30px' />
                  </div>
                  <div className="creditcard-detail">
                    <div className="credit-debit">
                       <FontAwesomeIcon icon={faCreditCard} style={{marginTop:'12px', color:'grey'}} />
                       <span style={{ marginTop:'-5px', paddingLeft:'5px', fontWeight:'500'}}> Credit/Debit</span>    
                    </div>
                    <div className="credit-number-detail">
                    <input type="number" placeholder='Card number' style={{ width: '78%' }}/>
                  
                    <div width='100%'>
                    <input type="number" placeholder='MM/YY' />
                    <input type="number" placeholder='CVV' />
                    </div>
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name'/> <br />

                    </div>

                    <input type="text" placeholder=' Billing Address'  style={{ width: '78%' }} /> <br />
                    <input type="text" placeholder=' city'/>
                    <input type="text" placeholder=' state/province'/> <br />
                    <input type="text" placeholder=' PIN code'/>
                    <input type="text" placeholder=' Country'/> <br />
                    </div>                  
                    <p className='policy'>
                    By clicking "Agree and subscribe", you agree: You will be charged 
                 <br />  <b> ₹1000 </b> (incl. GST) monthly. Your subscription will automatically renew 
                    monthly until you cancel (price subject to change).
                     Cancel anytime via <b style={{color:"#007ac6", fontSize:'13px'}}> Stack Overflow Account</b> or <b style={{color:"#007ac6", fontSize:'13px'}}>Customer Support</b> .
                      You also agree to the <span style={{color:"#007ac6", fontSize:'13px'}}>Terms of Use</span> and the <span style={{color:"#007ac6", fontSize:'13px'}}>Subscription and Cancellation Terms</span> .
                    </p>
                    <button type='submit' className='button-sub'>Agree and subscribe</button>
                </form>
              </div>
            </div>



            <div className="check-out">
              <h5>Summary</h5>
              <hr style={{width:'90%'}}/>
              <p>Subscription</p>
      
                <div>
                  <button onClick={toggleMenu}>
                    {selectedItem ? selectedItem.label : <span> Yearly, billed monthly</span> } <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  {isOpen && (
                      <ul style={{ position: 'absolute', left: 0 }}>
                       {menuItems.map((item) => (
                        <li key={item.value} onClick={() => handleItemClick(item)}>
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <hr style={{width:'90%'}}/>
                <div className='cart-list'> 
                    <img src={icon} alt="stack overflow" className='logo'/>
                    <b style={{marginLeft:'10px'}}> StackOverflow Pro</b>
                   <div className="items-cart">
                        <p style={{position:'relative', float:'left'}}>Gold Plan</p>
                       <div style={{position:'relative', float:'right'}}>
                       <p>₹1000/mo</p>
                        <p style={{fontSize:'15px', float:'right'}}>incl. GST</p>
                       </div>
                        
                   </div>
                   <hr style={{width:'90%'}}/>

                        <div className="sub-total">
                          <span className='index-total'>
                            <p>Subtotal</p>
                            <p>GST 10%</p>
                            <p>Total</p>
                          </span> 
                          <span className='price-total'>
                          <p>₹1000/mo</p>
                          <p>₹100/mo</p>
                          <p>₹1100/mo</p>
                          <p>incl. GST</p>


                          </span> 

                        </div>

                </div>
            </div>
           
          </div>
        </div>
      </div>
      </div>
     
     </section>
  
    </>
  )
}

 

export default GoldSubscription