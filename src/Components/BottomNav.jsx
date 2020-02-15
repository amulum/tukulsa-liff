import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HistoryIcon from '@material-ui/icons/History';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';

import '../styles/BottomNav.css'


const useStyles = makeStyles({
  root: {
    width: "100vw",
    position : 'fixed',
    bottom: 0
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Transaksi" icon={<HistoryIcon />} />
      <BottomNavigationAction label="Beli Lagi" icon={<AddCircleIcon />} />
      <BottomNavigationAction label="Kembali" icon={<TransitEnterexitIcon />} />
    </BottomNavigation>
  );
}