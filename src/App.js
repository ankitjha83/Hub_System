import ScanQrcode from "./ScanQrcode/scanQrcode.js";
import ScanBarcode from "./ScanBarcode/ScanBarcode.js";
import GenerateBarcode from "./GenerateBarcode/generateBarcode";
function App() {
  return (
    <div className="App">
      <br />
      <GenerateBarcode />
      <ScanBarcode />
      <br />
      <br />
      {/* <ScanQrcode /> */}
     </div>
  );
}

export default App;
