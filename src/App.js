import ScanQrcode from "./ScanQrcode/scanQrcode.js";
import ScanBarcode from "./ScanBarcode/ScanBarcode.js";
import GenerateBarcode from "./GenerateBarcode/generateBarcode";
import GenerateQrcode from "./GenerateQrcode/GenerateQrcode";
function App() {
  return (
    <div className="App">
      <br />
      <GenerateBarcode />
      <br />
      <GenerateQrcode />
      <ScanBarcode />
      <br />
      <br />
      {/* <ScanQrcode /> */}
     </div>
  );
}

export default App;
