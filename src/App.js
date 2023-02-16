
import './App.css';
import Subscription, {/* date , title, amount */} from './Components/Subscription';
 

function App() {

  let subscriptions =[
    {
      id:'1',
      date:(new Date('2021', '03', '23')),
      title:"Monthly Subscription",
      amount:125.60
    },
    {
      id:'2',
      date:(new Date('2022', '05', '13')),
      title:"Weekly Subscription",
      amount:25.60 
    },
    {
      id:'3',
      date:(new Date('2020', '01', '01')),
      title:"Yearly Subscription",
      amount:1215.60
    }
  ]
  return (
    <div className="App">
    <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount} />
    <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount} />
    <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount} />
    </div>
  );
}

export default App;
