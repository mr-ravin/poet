import image_1 from './images/poem_1.png';
import image_2 from './images/poem_2.png';
import image_3 from './images/poem_3.png';
import image_4 from './images/poem_4.png';
import './App.css';

function App() {
  return (

    <div className="App">
     <center><h1>Poet's Life</h1></center>
     <br/>
      <table align="center" cellspacing="5" >
      <tr>
      <td ><img src={image_1} alt="image" style={{ width: '100%', height: 'auto', maxWidth: '100%', display: 'block'}}/></td>
      </tr>
      <tr>
      <td ><img src={image_2} alt="image" style={{ width: '100%', height: 'auto', maxWidth: '100%', display: 'block'}}/></td>
      </tr>
      <tr>
      <td><img src={image_3} alt="image" style={{ width: '100%', height: 'auto', maxWidth: '100%', display: 'block'}}/></td>
      </tr>
      <tr>
      <td><img src={image_4} alt="image" style={{ width: '100%', height: 'auto', maxWidth: '100%', display: 'block'}}/></td>
      </tr>
      </table>
    </div>

  );
}

export default App;
