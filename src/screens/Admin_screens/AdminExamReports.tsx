import React from 'react'
import Navbar from './AdminComponents/Navbar';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";

interface Readonly {
    id:number;
    uId: string;
    username: string;
    course: string;
    Marks: string;
    Total_marks:string;
    date_of_exam: string;
}

const AdminExamReports:React.FC = () => {
    const dummyData: Readonly[] = [
        { 
            id: 1, 
            uId: "bceq23r97", 
            username: "John Doe",  
            course: "Manager", 
            Marks: "80", 
            Total_marks:"100",
            date_of_exam: "2024-05-22" 
        },
        { 
            id: 2, 
            uId: "bceq23wef", 
            username: "John smith",  
            course: "Manager", 
            Marks: "50", 
            Total_marks:"100",
            date_of_exam: "2024-05-22" 
        },
        // Add more objects as needed
    ];
    
    const columns: GridColDef[] = [
        { 
            field: "uId",
            headerName: "Student Id", 
            flex: 1 
        },
        {
            field: "username",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "course",
            headerName: "Course",
            flex: 1,
        },
        {
            field: "Marks",
            headerName: "Marks",
            flex: 1,
        },
        {
            field: "Total_marks",
            headerName: "Total Marks",
            flex: 1,
        },
        {
            field: "date_of_exam",
            headerName: "Date Of Exam",
            flex: 1,
        },
    ];

    return (
        <div className="p-6 bg-slate-100 h-full overflow-auto dark:bg-slate-900">
            <Navbar name='Exam reports'/>
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

export default AdminExamReports
