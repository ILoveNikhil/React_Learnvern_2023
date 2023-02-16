
import './Subscription.css'
import SubscriptionDate from './SubscriptionDate'
import Container from '../Container'

const Subscription = (props) => {
  
  
  return (
    <Container className='subscription'>
      <SubscriptionDate date={props.date}/>
      <h2 className='subscription_title'>{props.title}</h2>
      <h4 className='subscription_price'>{props.amount}</h4>
    </Container>
  )
}

export default Subscription
