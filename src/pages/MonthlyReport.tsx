// MonthlyReport.tsx
import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption,
  IonButton, IonCard, IonCardHeader, IonCardTitle
} from '@ionic/react';
import { Pie } from 'react-chartjs-2';
import * as XLSX from 'xlsx';
import './MonthlyReport.css'; // Import custom styles

const MonthlyReport: React.FC = () => {
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [employee, setEmployee] = useState('');
  const [month, setMonth] = useState('');
  const [showChart, setShowChart] = useState(false);

  // Example data for the pie chart
  const pieChartData = {
    labels: ['New', 'In Process', 'Submit', 'Complete'],
    datasets: [
      {
        data: [60, 110, 150, 130], // Example hours
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };

  const handleShowReport = () => {
    console.log("Fetching pie chart data for:", { role, department, employee, month });
    setShowChart(true); // Show the chart when the button is clicked
  };

  const exportToExcel = () => {
    const data = [
      { Task: 'New', Hours: 60 },
      { Task: 'In Process', Hours: 110 },
      { Task: 'Submit', Hours: 150 },
      { Task: 'Complete', Hours: 130 },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Task Report');
    XLSX.writeFile(workbook, 'Task_Report.xlsx');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="report-header">
          <IonTitle className="report-title">Month Task Sheet Report</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding report-content">
        <div className="report-container">
          {/* Role Selection */}
          <IonItem className="report-item">
            <IonLabel className="report-label">Role</IonLabel>
            <IonSelect value={role} onIonChange={e => setRole(e.detail.value)} className="report-select">
              <IonSelectOption value="MD">MD</IonSelectOption>
              <IonSelectOption value="CFO">CFO</IonSelectOption>
              <IonSelectOption value="GM">GM</IonSelectOption>
              <IonSelectOption value="HOD">HOD</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Department Selection */}
          <IonItem className="report-item">
            <IonLabel className="report-label">Department</IonLabel>
            <IonSelect value={department} onIonChange={e => setDepartment(e.detail.value)} className="report-select">
              <IonSelectOption value="HR">HR</IonSelectOption>
              <IonSelectOption value="IT">IT</IonSelectOption>
              <IonSelectOption value="Finance">Finance</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Employee Selection */}
          <IonItem className="report-item">
            <IonLabel className="report-label">Employee</IonLabel>
            <IonSelect value={employee} onIonChange={e => setEmployee(e.detail.value)} className="report-select">
              <IonSelectOption value="emp1">Employee 1</IonSelectOption>
              <IonSelectOption value="emp2">Employee 2</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Month Selection */}
          <IonItem className="report-item">
            <IonLabel className="report-label">Month</IonLabel>
            <IonSelect value={month} onIonChange={e => setMonth(e.detail.value)} className="report-select">
              <IonSelectOption value="April">April</IonSelectOption>
              <IonSelectOption value="May">May</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Show Report Button */}
          <IonButton expand="block" className="report-button" onClick={handleShowReport}>
            Show
          </IonButton>

          {/* Pie Chart */}
          {showChart && (
            <IonCard className="report-card">
              <IonCardHeader>
                <IonCardTitle className="report-card-title">Pie Chart</IonCardTitle>
              </IonCardHeader>
              <div className="chart-container">
                <Pie data={pieChartData} />
              </div>
            </IonCard>
          )}

          {/* Export to Excel Button */}
          {showChart && (
            <IonButton expand="block" className="report-button" onClick={exportToExcel}>
              Export to Excel
            </IonButton>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MonthlyReport;

