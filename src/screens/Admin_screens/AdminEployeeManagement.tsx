import React from 'react'
import Navbar from './AdminComponents/Navbar';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";

interface Readonly {
    id:number;
    employeeId: string;
    username: string;
    age: number;
    phone: string;
    email: string;
    designation: string;
    branch: string;
    date_of_joining: string;
}
const AdminEployeeManagement:React.FC = () => {
    const dummyData: Readonly[] = [
        { 
            id: 1, 
            employeeId: "bceq23r97", 
            username: "John Doe", 
            age: 30, 
            phone: "123-456-7890", 
            email: "john@example.com", 
            designation: "Manager", 
            branch: "Main", 
            date_of_joining: "2024-05-22" 
        },
        { 
            id: 2, 
            employeeId: "herwrgbvif", 
            username: "Jane Smith", 
            age: 25, 
            phone: "987-654-3210", 
            email: "jane@example.com", 
            designation: "Manager", 
            branch: "Main", 
            date_of_joining: "2024-05-20" 
        },
        // Add more objects as needed
    ];
    
    const columns: GridColDef[] = [
        { 
            field: "employeeId",
            headerName: "Employee Id", 
            flex: 1 
        },
        {
            field: "username",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: 'number',
            headerAlign: "left",
            align: "left",
            flex: 1,
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "course",
            headerName: "Course",
            flex: 1,
        },
        {
            field: "designation",
            headerName: "Designation",
            flex: 1,
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
        },
        {
            field: "date_of_joining",
            headerName: "Date Of Joining",
            flex: 1,
        },
    ];

    return (
        <div className="p-6 bg-slate-100 h-full overflow-auto dark:bg-slate-900">
            <Navbar name='Employee'/>
            <Box
                m="40px 0 0 0"
                height="80vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        color: "#FFFFFF"
                    },
                    "& .name-column--cell": {
                        color: "#FFFFFF",
                    },
                    "& .MuiDataGrid-columnHeaderContainer": {
                        backgroundColor: "rgb(31, 41 ,55)",
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "rgb(31, 41 ,55)",
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "rgb(31, 41 ,55)",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        borderBottomRightRadius: "5px",
                        borderBottomLeftRadius: "5px"
                    },
                    "& .MuiCheckbox-root": {},
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${"#000000"} !important`,
                        marginBottom: "10px"
                    },
                }}
            >
                <DataGrid
                    rows={dummyData}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    sx={{
                        ".data-grid-header": {
                            backgroundColor: "rgb(255, 255, 255)",
                        },
                    }}
                />
            </Box>
        </div>
    );
}

export default AdminEployeeManagement
