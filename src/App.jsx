import './App.css';
import { useState } from 'react';
const App = () => {

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(prevCount => prevCount + multiplier);
  };

  const buyDoubleBuns = () => {
    if (count >= 10) {
      setMultiplier(prevMultiplier => prevMultiplier * 2);
      setCount(prevCount => prevCount - 10);
    }
  };

  const buyPartyBuns = () => {
    if (count >= 100) {
      setMultiplier(prevMultiplier => prevMultiplier * 5);
      setCount(prevCount => prevCount - 100);
    }
  };

  const buyBunFeast = () => {
    if (count >= 1000) {
      setMultiplier(prevMultiplier => prevMultiplier * 10);
      setCount(prevCount => prevCount - 1000);
    }
  };

  const bunOver = () => {
    setCount(0);  // Reset the count
    setMultiplier(1);  // Reset the multiplier
  };

  return (
    <div className="App">
      <div>
        <h1>Dim-sum Selector</h1>
        <h2>Let's produce some delicious buns! It's easy! Simply click the picture!</h2>
        <h2>Count: {count}</h2>
        <img className='dim-sum' src='./assets/ds.jpg' alt='dim-sum' onClick={updateCount}/>
      </div>

      <div className='container'>
        <div className='upgrade'>
          <h3>Double Buns</h3>
          <p>2x per click</p>
          <button onClick ={buyDoubleBuns}>10 Dim-sums</button>
        </div>

        <div className='upgrade'>
          <h3>Party Buns</h3>
          <p>5x per click</p>
          <button onClick ={buyPartyBuns}>100 Dim-sums</button>
        </div>

        <div className='upgrade'>
          <h3>Bun Feast</h3>
          <p>10x per click</p>
          <button onClick ={buyBunFeast}>1000 Dim-sums</button>
        </div>

        <div className='upgrade'>
          <h3>Bun Over!</h3>
          <p>Empty your production!</p>
          <button onClick ={bunOver}>0 Dim-sums</button>
        </div>

      </div>

    </div>
  )
}

export default App
