import * as React from 'react';
import CardContent from '@mui/joy/CardContent';
import { CardMedia, Divider, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

export default function BasicCard({ CardData }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleEdit = () => {
        handleMenuClose();
    };
    const handleDelete = () => {
        // Open the delete confirmation dialog
        setOpenDialog(true);
        handleMenuClose();
    };
    const handleCloseDialog = () => {
        // Close the delete confirmation dialog

        setOpenDialog(false);
    };
    const handleConfirmDelete = () => {
        // Implement delete logic here
        const token = localStorage.getItem('token');
        const apiUrl = 'http://localhost:5000/api/DeleteService'; // Replace 'services' with your actual endpoint to retrieve services
        const Id = CardData._id;
        const response = fetch(apiUrl, {
            
        });

        // Close the dialog after deletion
        setOpenDialog(false);
    };
    return (
        <div className='Saller-Card' style={{ maxWidth: '300px', height: '300px', cursor: 'pointer', overflow: 'hidden', borderBottom: '1px solid rgba(34, 35, 37, 1)', margin: '5px', position: 'relative' }}>
            <CardMedia>
                <div>
                    <img width={300} height={200} src={CardData.Gallary[0].data} alt="CardImage" />
                </div>
            </CardMedia>
            <CardContent sx={{ border: '1px solid rgba(34, 35, 37, 1)', borderTop: '1px solid white', height: '150%' }}>
                <Link className='service-tittel' style={{ marginTop: '10px' }}>
                    {CardData.ServiceTitle}
                </Link>
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '150%' }}>
                    <p style={{ color: 'rgba(116, 118, 126, 1)' }}>Started At</p>
                    <p>{CardData.BasicPrice}$</p>
                </div>
            </CardContent>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '8px', cursor: 'pointer' }}>
                <MoreVertIcon onClick={handleMenuClick} style={{ fontSize: 30 }} />
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
            </div>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Delete Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete the service?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} variant="contained" color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
