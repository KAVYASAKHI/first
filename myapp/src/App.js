import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="App">
     <form>
        Username:
        <input type="text" name="username" />
        Email id:
        <input type="text" name="email_id" />
        <label for="Age">Age:</label>
        <input type="number" name="Age" id="Age"/>
          <button type='submit' onclick>SUBMIT</button>
    </form>
    function onclick() {
    return (
      document.write("FORM SUCCESSFULLY SUBMOITED")
      ) 
  </div>
)
}

export default App;
