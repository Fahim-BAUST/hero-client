import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const ManageUsers = () => {
    const { user } = useAuth();
    const [allUser, setAllUser] = useState([]);

    useEffect(() => {
        fetch('https://salty-river-32904.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setAllUser(data))

    }, [allUser]);

    const handleClickedChange = (e, id) => {
        e.target.checked ? handleUpdateClick(id, "blocked") : handleUpdateClick(id, "safe");
    }

    const handleUpdateClick = (id, status) => {
        const data = { status: status };

        const url = `https://salty-river-32904.herokuapp.com/updateStatus/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount === 1) {
                    Swal.fire(
                        `Success `,
                        `Status is ${status} `,
                        'success'
                    )
                    setAllUser(allUser);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            })

    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Phone NO</TableCell>
                        <TableCell align="right">User Type</TableCell>
                        <TableCell align="right">User Status</TableCell>
                        <TableCell align="right">Block User</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allUser.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phoneNumber}</TableCell>
                            <TableCell align="right">{row.customer}</TableCell>
                            <TableCell align="right">{row.isSafe}</TableCell>
                            <TableCell align="right"> <input onChange={(e) => handleClickedChange(e, row._id)} className="form-check-input" type="checkbox" id="gridCheck1" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageUsers;