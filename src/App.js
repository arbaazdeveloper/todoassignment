
import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';
import Edit from './components/Edit';
import Section from './components/Section';


function App() {
  return (
    <div className="App">
<div className='top'>Lorem Ipsum is simply dummy text of the printing</div>

<div class="grid-container">
 <Menu/>
  <div style={{heigh:'100%'}}>
  <div className='top-section'><Section/></div>

  <div class="content-edit-container">
    <div class="content">
 <Content/>
    </div>
    <div class="edit">
      <Edit/>
    </div>
  </div>
  </div>
</div>

    </div>
  );
}

export default App;
