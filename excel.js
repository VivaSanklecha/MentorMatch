const XLSX = require('xlsx');

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Sample data
const data = [
  ['Name', 'Email', 'Focus Area', 'Experience Level', 'Status'],
  ['John Doe', 'john@example.com', 'Web Development', 'Intermediate', 'Active'],
  ['Jane Smith', 'jane@example.com', 'Data Science', 'Beginner', 'Active'],
  ['Mike Johnson', 'mike@example.com', 'Mobile Development', 'Advanced', 'Inactive'],
  ['Sarah Brown', 'sarah@example.com', 'UI/UX Design', 'Intermediate', 'Active']
];

// Create a worksheet
const ws = XLSX.utils.aoa_to_sheet(data);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, ws, 'Mentees');

// Write the workbook to a file
XLSX.writeFile(workbook, 'sample_mentees.xlsx');

console.log('Sample Excel file created: sample_mentees.xlsx');