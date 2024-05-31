import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, AppBar, Drawer, Toolbar, Typography, Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
//import HomeIcon from '@mui/icons-material/Home';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IoIosPeople, IoIosStar, IoIosMap, IoIosArrowDown, IoMdPaperPlane, IoMdGlobe, IoIosArrowDropdownCircle, IoIosImages } from 'react-icons/io';
import About from './About';  // Aboutページのコンポーネント
//import Skills from './Skills';  // Skillsページのコンポーネント
//import Projects from './Projects';  // Projectsページのコンポーネント
//import Contact from './Contact';  // Contactページのコンポーネント
import App2 from './App2';  // App2ページのコンポーネント

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const scrollToPos = (pos) => {
    window.scrollTo({
      top: pos,
      behavior: 'smooth'
    });
    //setDrawerOpen(false);
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#d84315' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portofolio Gallery
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
          sx={{ mr: 2 }}
        >
          <IoIosArrowDropdownCircle />
        </IconButton>
        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
            BackdropProps: {
              invisible: true  // これによってバックドロップは透明になり、画面は暗くならない
            }
          }}
          sx={{
            paddingTop: '64px', // AppBarの下から開始するように調整
            '& .MusiDrawer-paper': {
              width: 'auto', // テキストに合わせて幅を自動調整
              left: 280, // 右端から20pxの位置に配置
              top: 46, // AppBarの高さを考慮して配置
              maxWidth: 'calc(100% - 40px)', // 最大幅は画面幅から40pxを引いたもの
              boxSizing: 'border-box',  // paddingを含めた幅で計算
              color: 'black'
            }
          }}
        >
          <List>
            <ListItem button onClick={() => scrollToPos(100)}>
              <ListItemText primary="MapCompass" />
            </ListItem>
            <ListItem button onClick={() => scrollToPos(500)}>
              <ListItemText primary="Earth-YoutubeSearch" />
            </ListItem>
            <ListItem button onClick={() => scrollToPos(900)}>
              <ListItemText primary="Sphere-CitySearch" />
            </ListItem>
            <ListItem button onClick={() => scrollToPos(1300)}>
              <ListItemText primary="Audio-Ball-Player" />
            </ListItem>
            <ListItem button onClick={() => scrollToPos(1700)}>
              <ListItemText primary="Ground-Corps" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

function ButtomNavigateButton() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/about');
        break;
      case 2:
        navigate('/contact');
        break;
      default:
        break;
    }
  };


  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
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
      <BottomNavigationAction label="Products" icon={<IoIosImages />} />
      <BottomNavigationAction label="About" icon={<IoIosPeople />} />
      <BottomNavigationAction label="Contact" icon={<IoMdPaperPlane />} />
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
        <Route path="/about" element={<About />} />
        {/*<Route path="/skills" element={<Skills />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<Contact />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
