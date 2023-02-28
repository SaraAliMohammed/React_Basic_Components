//import Nav from './components/nav/Nav';
import { Alert } from 'react-bootstrap';
import CardDetails from './components/CardDetails/CardDetails';
import ComponentWithChildren from './components/ComponentWithChildren';
import FormInput from './components/FormInput';
import BootstrapNavbar from './components/nav/bootstrap-navbar';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';

function App() {
  const data = [
    { title: "Title1", description: "description 1", img: img1 },
    { title: "Title2", description: "description 2", img: img2 },
    { title: "Title3", description: "description 3", img: img3 },
    { title: "Title4", description: "description 4", img: img4 }
  ];
  return (
    <div>
      <BootstrapNavbar />
      {
        data.length ? (data.map((item, index) =>
          <CardDetails key={index} title={item.title} description={item.description} img={item.img} />
        ))
          :
          (<Alert variant='danger'>
            No Data Found
          </Alert>)
      }
      <ComponentWithChildren>
        <h3>Child1</h3>
        <span>Child2</span>
      </ComponentWithChildren>
      <ComponentWithChildren />
      <FormInput/>
    </div>
  );
}

export default App;
