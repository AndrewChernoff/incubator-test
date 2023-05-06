import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Homepage } from "./components/Homepage/Homepage";
import ResponsiveAppBar from "./components/ResponsiveBar";
import { useAppDispatch, useAppSelector } from "./common/hooks/reduxHooks";
import { useEffect } from "react";
import { initialize } from "./store/slices/appSlice";

function App() {

  const isInit = useAppSelector(state => state.app.isInit)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initialize())
  }, [])

  if(!isInit) return <div>Loading...</div>

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Navigate to="products" />} />
        <Route path="products" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
