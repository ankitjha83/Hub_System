import ScanBarcode from "./ScanBarcode/scanBarcode.js";
import GenerateBarcode from "./GenerateBarcode/generateBarcode";
function App() {
  return (
    <div className="App">
      <br />
      <GenerateBarcode />
      <ScanBarcode />
    </div>
  );
}

export default App;
