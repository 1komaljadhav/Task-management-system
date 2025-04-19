// ConsolidatedReport.tsx
import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption,
  IonButton, IonCard, IonCardHeader, IonCardTitle, IonInput
} from '@ionic/react';
import { Bar } from 'react-chartjs-2';
import * as XLSX from 'xlsx';
import './ConsolidatedReport.css'; // Import custom styles

const ConsolidatedReport: React.FC = () => {
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [employee, setEmployee] = useState('');
  const [endDate, setEndDate] = useState('2025-03-31');
  const [showChart, setShowChart] = useState(false);

  const startDate = '2025-04-01'; // Fixed start date for the financial year

  // Example data for the bar chart
  const barChartData = {
    labels: ['April', 'May', 'June', 'July', 'August'], // Months on X-axis
    datasets: [
      {
        label: 'Hours Worked',
        data: [180, 120, 160, 70, 90], // Example hours for each month
        backgroundColor: ['#4CAF50', '#36A2EB', '#FFCE56', '#FF6384', '#FFA726'],
      },
    ],
  };

  const handleShowConsolidated = () => {
    console.log("Fetching bar chart data for:", { role, department, employee, startDate, endDate });
    setShowChart(true); // Show the chart when the button is clicked
  };

  const exportToExcel = () => {
    const data = [
      { Month: 'April', Hours: 180 },
      { Month: 'May', Hours: 120 },
      { Month: 'June', Hours: 160 },
      { Month: 'July', Hours: 70 },
      { Month: 'August', Hours: 90 },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Consolidated Report');
    XLSX.writeFile(workbook, 'Consolidated_Report.xlsx');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="report-header">
          <IonTitle className="report-title">Consolidated Sheet</IonTitle>
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

          {/* Start Date (Disabled) */}
          <IonItem className="report-item">
            <IonLabel className="report-label">From Date</IonLabel>
            <IonInput value={startDate} disabled className="report-input" />
          </IonItem>

          {/* End Date */}
          <IonItem className="report-item">
            <IonLabel className="report-label">To Date</IonLabel>
            <IonInput
              type="date"
              value={endDate}
              onIonChange={e => setEndDate(e.detail.value!)}
              className="report-input"
            />
          </IonItem>

          {/* Show Report Button */}
          <IonButton expand="block" className="report-button" onClick={handleShowConsolidated}>
            Show
          </IonButton>

          {/* Bar Chart */}
          {showChart && (
            <IonCard className="report-card">
              <IonCardHeader>
                <IonCardTitle className="report-card-title">Bar Chart</IonCardTitle>
              </IonCardHeader>
              <div className="chart-container">
                <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
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

export default ConsolidatedReport;
