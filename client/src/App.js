import { useEffect } from 'react';
import './App.css';
const tg = windows.Telegram.WebApp;
window.Telegram.WebApp
function App() {

    useEffect(() => {
      tg.ready();
    }, [] )

    const onClose = () = {
      tg.close()
    }

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
