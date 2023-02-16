import './SubscriptionDate.css'

const SubscriptionDate = (props) => {
    const month = props.date.toLocaleString('default', {month:'long'});
  const day = props.date.toLocaleString('default', {day:'2-digit'});
  const year = props.date.getFullYear();
  return (    
    <>
    <div>{month}</div>
    <div>{day}</div>
    <div>{year}</div> 
    </>
  )
}

export default SubscriptionDate
