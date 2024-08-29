import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});






function App() {
  const user = useSelector((store) => store.user);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={user ? <Home /> : <Navigate to = "/login" />} />
            <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to = "/login" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}



export default App






