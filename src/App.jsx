import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Typography, Button } from '@mui/material';
//import HomeIcon from '@mui/icons-material/Home';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IoIosPeople, IoIosStar, IoIosMap } from 'react-icons/io';

//import About from './About';  // Aboutページのコンポーネント
//import Skills from './Skills';  // Skillsページのコンポーネント
//import Projects from './Projects';  // Projectsページのコンポーネント
//import Contact from './Contact';  // Contactページのコンポーネント
import App2 from './App2';  // App2ページのコンポーネント

function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#d84315' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portofolio Gallery
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

function ButtomNavigateButton() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        width: '100%',
        position: 'fixed', // 画面下部に固定
        left: 0, // 左端に固定。必要に応じて `right: 0` に変更して右端に配置
        right: 0, // 右端に固定。必要に応じて `left: 0` に変更して左端に配置
        //margin: 'auto', // 水平中央に配置
        bottom: 0, // 下部に固定。必要に応じて `top: 0` に変更して上部に配置
        zIndex: 1001 // 他の要素より前面に表示
      }} // スタイルは必要に応じて調整してください
    >
      <BottomNavigationAction label="Products" icon={<IoIosPeople />} />
      <BottomNavigationAction label="About" icon={<IoIosStar />} />
      <BottomNavigationAction label="Others" icon={<IoIosMap />} />
    </BottomNavigation>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Header />
      <ButtomNavigateButton />
      <Routes>
        <Route path="/" element={<App2 />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
