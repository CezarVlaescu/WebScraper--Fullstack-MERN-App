import React from "react";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx'; 
import './exportDataComponentStyling.css';

function ExportButton({data}) {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: {'data' : ws}, SheetNames : ['data']};
        const excelBuffer = XLSX.write(wb, {bookType : 'xlsx', type: 'array'});
        const data = new Blob([excelBuffer], {type : fileType})
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <button className="export-button"
        onClick={() => exportToCSV(data, "filename")}
        disabled={!data || data.length === 0}>
            Export to Excel
        </button>
    )
}

export default ExportButton;