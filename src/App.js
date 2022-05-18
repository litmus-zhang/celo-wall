import './App.css';
import Profile from './components/Profile';
import MessageCard from './components/messageCard';






function App() {
  return (
    <div className='app'>
      <Profile />
      
      <div className='container'>
        <h3>My Recommendations</h3>
        <div className='messages'>

      <MessageCard/>
      <MessageCard/>
      <MessageCard/>
        </div>
      </div>

      <style jsx>{`
      .app{
        padding: 2rem;  
      }
      .container{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        flex-wrap: wrap;
      }
      .container .messages{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      `}</style>

    </div>
   
   



  );
}

export default App;
