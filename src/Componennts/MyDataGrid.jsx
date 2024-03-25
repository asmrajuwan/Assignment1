import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';

const rows = [
  {
    id: 1,
    customerName: "John Doe",
    email: "johndoe@example.com",
    location: "123 Main Street, Anytown, CA",
    machine: "01",
    wallet: "Showa Balance: ¥5000.00\nShowa Points: 5000.00",
    subscription: "Basic",
  },
  {
    id: 2,
    customerName: "John Doe",
    email: "johndoe@example.com",
    location: "123 Main Street, Anytown, CA",
    machine: "01",
    wallet: "Showa Balance: ¥5000.00\nShowa Points: 5000.00",
    subscription: "Basic",
  },
  {
    id: 3,
    customerName: "John Doe",
    email: "johndoe@example.com",
    location: "123 Main Street, Anytown, CA",
    machine: "01",
    wallet: "Showa Balance: ¥5000.00\nShowa Points: 5000.00",
    subscription: "Basic",
  },
  {
    id: 4,
    customerName: "John Doe",
    email: "johndoe@example.com",
    location: "123 Main Street, Anytown, CA",
    machine: "01",
    wallet: "Showa Balance: ¥5000.00\nShowa Points: 5000.00",
    subscription: "Basic",
  },
  {
    id: 5,
    customerName: "John Doe",
    email: "johndoe@example.com",
    location: "123 Main Street, Anytown, CA",
    machine: "01",
    wallet: "Showa Balance: ¥5000.00\nShowa Points: 5000.00",
    subscription: "Basic",
  },
  {
    id: 6,
    customerName: "John Doe",
    email: "johndoe@example.com",
    location: "123 Main Street, Anytown, CA",
    machine: "01",
    wallet: "Showa Balance: ¥5000.00\nShowa Points: 5000.00",
    subscription: "Basic",
  },
  {
    id: 7,
    customerName: "John Doe",
    email: "johndoe@example.com",
    location: "123 Main Street, Anytown, CA",
    machine: "01",
    wallet: "Showa Balance: ¥5000.00\nShowa Points: 5000.00",
    subscription: "Basic",
  },
  
];

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'customerName', headerName: 'Customer Name', width: 180 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'location', headerName: 'Location', width: 250 },
  { field: 'machine', headerName: 'Machine', width: 100 },
  { field: 'wallet', headerName: 'Wallet', width: 150 },
  { field: 'subscription', headerName: 'Subscription', width: 150 },
  { 
    field: 'action', 
    headerName: 'Action', 
    width: 150, 
    renderCell: (params) => (
      <ActionCell {...params} />
    )
  },
];

function ActionCell({ row }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-controls="action-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><VisibilityIcon /> View</MenuItem>
        <MenuItem onClick={handleClose}><EditIcon /> Edit</MenuItem>
        
      </Menu>
    </>
  );
}

function MyDataGrid() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
      />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div style={{ textAlign: 'center', padding: 10 }}>
      Copyright &copy; {new Date().getFullYear()} Showa.Designd with ❤️ All rights
                    reserved.
    </div>
  );
}

export default MyDataGrid;
