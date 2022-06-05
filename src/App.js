import Form from "./components/Form";
import Timer from "./components/Timer";


function App() {
  const onExpired = () =>{
    
    return (<div className="App">
      <h1 className="danger">
        Form Expired
      </h1>
    </div>)
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center my-3">React Form</h1>
        <Timer onExpire={onExpired} />
        <Form />

      </div>
    </div>
  );
}

export default App;
