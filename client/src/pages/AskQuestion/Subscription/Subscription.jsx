import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Subscription.css'


const Subscription = () => {
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  const checkAuth =() => {

    if (User === null){
      navigate('/Auth');

    }
    else{
     navigate('/AskQuestion');
    }
   }
   const checkAuthPro =() => {

    if (User === null){
      navigate('/Auth');

    }
    else{
        navigate("/SliverSubscription");
     
      }
    }
    const checkAuthGold =() => {

      if (User === null){
        navigate('/Auth');
  
      }
      else{
          navigate("/GoldSubscription");
       
        }
      }
   
  return (
    <>
   <section className='subscription-plan'>
   <div className='title-container'>
        <h2>Flexible Plans & Pricing</h2>
        <p>We offer three plans to meet your specific needs:</p>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#fbf3d5" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,176C672,181,768,139,864,144C960,149,1056,203,1152,234.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

      </div>
    <div className='main-container'>
     
    <div className="row pricing-ele">
    <div className="col-lg-4 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>Free Plan</h3>
          </div>
          <div className="card-body">
           
            <h2>Free</h2>
            <p>Unlimited App Usage</p>
            <p> Post 1 Question Per Day</p>
            <p>Ideal for those who want to test the platform, engage with the community,
               and get valuable feedback. Users can post one question a day. </p>
           {User=== null ?
            <button type="button" className="btn btn-lg btn-outline-primary  button1" onClick={checkAuth}>Sign Up</button> : 
            <button type="button" className="btn btn-lg btn-outline-primary  button1" onClick={checkAuth}>Ask Question</button>
           }

          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" id='sliver'>
        <div className="card">
          <div className="card-header">
            <h3>Sliver Plan</h3>
          </div>
          <div className="card-body">
           
            <h2 >INR 100 / mo</h2>
            <p>Unlimited App Usage</p>
            <p>Post up to 5 Questions Per Day</p>
            <p>Perfect for small businesses and individuals who need more than one question per day. For just ₹100 per month, 
              users can post up to 5 questions per day, ideal for market research and feedback gathering.</p>
              {User=== null ?
            <button type="button" className="btn btn-primary btn-lg button2" onClick={checkAuthPro}>Sign Up</button> : 
            <button type="button" className="btn btn-primary btn-lg button2" onClick={checkAuthPro}>Get Started</button>
           }

          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12" id='gold'>
        <div className="card">
          <div className="card-header">
            <h3>Gold Plan</h3>
          </div>
          <div className="card-body">
            
        <h2 >INR 1000 / mo</h2>
        <p>Unlimited App Usage</p>
        <p>Unlimited Questions</p>
        <p>Great for larger organizations or individuals who need unlimited access to posting questions. With our Gold Plan, users can engage with their
           target audience and gain valuable insights to improve their business or product.</p>
           {User=== null ?
            <button type="button" className="btn btn-primary btn-lg button2" onClick={checkAuthGold}>Sign Up</button> : 
            <button type="button" className="btn btn-primary btn-lg button2" onClick={checkAuthGold}>Get Started</button>
           }    

          </div>
        </div>
       </div>
      </div>
    </div> 
</section>
    </>
  )
}

export default Subscription