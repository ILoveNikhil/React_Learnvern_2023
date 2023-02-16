
import './Subscription.css'
import SubscriptionDate from './SubscriptionDate'

const Subscription = (props) => {
  
  
  return (
    <div className='subscription'>
      <SubscriptionDate date={props.date}/>
      <h2 className='subscription_title'>{props.title}</h2>
      <h4 className='subscription_price'>{props.amount}</h4>
    </div>
  )
}

export default Subscription
