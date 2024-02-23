"use client";
import {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageIcon from '@mui/icons-material/Image';
import MessageIcon from '@mui/icons-material/Message';
import MmsIcon from '@mui/icons-material/Mms';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PaddingIcon from '@mui/icons-material/Padding';

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        // maxWidth: { xs: 320, sm: 480 },
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tab label="ชายคา" icon={<AddHomeWorkIcon />}/>
        <Tab label="ศาลาประชาคม" icon={<AccountBalanceIcon />} />
        <Tab label="รวมมิตร" icon={<StarPurple500Icon />} />
        <Tab label="ซิลิคอนวัลเลย์" icon={<ImportantDevicesIcon />} />
        <Tab label="มาบุญครอง" icon={<AppShortcutIcon />} />
        <Tab label="สวนลุมพินี" icon={<FavoriteIcon />} />
        <Tab label="สินธร" icon={<ImageIcon />} />
        <Tab label="สยามสแควร์" icon={<MessageIcon />} />
        <Tab label="พันทิป" icon={<MmsIcon />} />
        <Tab label="ภูมิภาค" icon={<MusicNoteIcon />} />
        <Tab label="แกลเลอรี่" icon={<OndemandVideoIcon />} />
        <Tab label="บางขุนพรหม" icon={<PaddingIcon />} />
        <Tab label="เฉลิมไทย" icon={<AddHomeWorkIcon />} />
        <Tab label="บางรัก" icon={<AccountBalanceIcon />} />
        <Tab label="หอศิลป์" icon={<FavoriteIcon />} />
        <Tab label="เฉลิมกรุง" icon={<MusicNoteIcon />} />
        <Tab label="ห้องสมุด" icon={<OndemandVideoIcon />} />
        <Tab label="สินธร" icon={<ImageIcon />} />
        <Tab label="สยามสแควร์" icon={<MessageIcon />} />
        <Tab label="พันทิป" icon={<MmsIcon />} />
        <Tab label="ภูมิภาค" icon={<MusicNoteIcon />} />
        <Tab label="แกลเลอรี่" icon={<OndemandVideoIcon />} />

        
      </Tabs>
    </Box>
  );
}