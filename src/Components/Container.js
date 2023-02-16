import './Container.css'
import './Subscription/Subscription.css'

const Container = (props) => {
    const classes="container  " + props.className
  return (
    <div className={classes}>{props.children} </div>
  )
}

export default Container
