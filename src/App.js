import { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState("");
  const [friendselection, setFriendSelection] = useState('0');
  const [myTipSelection, setMyTipSelection] = useState('0')

  const tip = bill * ((friendselection + myTipSelection) / 2 / 100);

  function trackBill(val){
    setBill((e)=>val);
  }
  
  function handleMyTipSelection(val){
    setMyTipSelection((i) => val)
  }
  
  function handleFriendTipSelection(val){
    setFriendSelection((i) => val)
  }
  
  function handleReset() {
    setBill("");
    setMyTipSelection(0);
    setFriendSelection(0);
  }

  return(
    <>
      <BillComponent bill={bill} trackBill={trackBill}/>
      <MyTipPercentage selection={myTipSelection} handleSelection={handleMyTipSelection}/>
      <FriendTipPercentage selection={friendselection} handleSelection={handleFriendTipSelection}/>
      {(bill > 0)&& <>
      <TotalBill bill={bill} tip={tip}/>
      <ResetButton handleReset={handleReset}/>
      </>}
      
    </>
  )
}

function BillComponent({bill, trackBill}){

  return(
    <div>

      How much was the bill? <input type='number' value={bill} placeholder='enter the bill amount' onChange={(e) => trackBill(e.target.value)}/>
      <h2>The Bill amount is {bill}</h2>
    </div>
  )
}

function MyTipPercentage({selection, handleSelection}){
  return(
    <div>
      How did you like the service? <TipPercentagedropdown selection={selection} handleSelection={handleSelection}/>
    </div>
  )
}

function FriendTipPercentage({selection, handleSelection}){
  return(
    <div>
      How did your friend like the service? <TipPercentagedropdown selection={selection} handleSelection={handleSelection}/>
    </div>
  )
}

function TotalBill({bill,tip }){
  console.log("billlll", bill);
  console.log("tiptiptip", tip);
  return(
      <h3> You pay ${bill + tip} (${bill} + ${tip} tip)</h3>
  )
}


function TipPercentagedropdown({selection, handleSelection}){
  return(
    <div>
      <select value={selection} onChange={(e) => handleSelection(e.target.value)}>
        <option value='0'>Dissatisfied(0%)</option>
        <option value='5'>It was Okay(5%)</option>
        <option value='10'>It was good(10%)</option>
        <option value='20'>Absolutely Amazing(20%)</option>
      </select>
      <h2>Your tip percentage is {selection}</h2>
    </div>
  )
}

function ResetButton({handleReset}){
  
  return(
    <button onClick={handleReset}>reset</button>
  )
}
export default App;


