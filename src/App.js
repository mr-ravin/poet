import logo from './logo.svg';
import './App.css';
import image_1 from './images/poem_1.png';
import image_2 from './images/poem_2.png';
import image_3 from './images/poem_3.png';
import image_4 from './images/poem_4.png';

function App() {
  return (
    <div className="App">
     <h1><center>Poet's Life</center></h1><br/>
      <table align="center" cellspacing="5" >
      <tr>
      <td className="image_class"><img src={image_1} className="image_internal_class" alt="image" /></td>
      </tr>
      <tr>
      <td className="image_class"><img src={image_2} className="image_internal_class" alt="image" /></td>
      </tr>
      <tr>
      <td className="image_class"><img src={image_3} className="image_internal_class" alt="image" /></td>
      </tr>
      <tr>
      <td className="image_class"><img src={image_4} className="image_internal_class" alt="image" /></td>
      </tr>
      </table>
    </div>
  );
}

export default App;
