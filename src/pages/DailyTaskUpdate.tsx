import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,
    IonSelect, IonSelectOption, IonInput, IonTextarea, IonButton, IonDatetime,
    IonGrid, IonRow, IonCol, IonModal
  } from '@ionic/react';
  import React, { useState } from 'react';
  
  const DailyTaskUpdate: React.FC = () => {
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [hours, setHours] = useState('');
    const [remark, setRemark] = useState('');
  
    const [fromDate, setFromDate] = useState<string | null>(null);
    const [toDate, setToDate] = useState<string | null>(null);
    const [showFromModal, setShowFromModal] = useState(false);
    const [showToModal, setShowToModal] = useState(false);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) setFile(e.target.files[0]);
    };
  
    const formatDate = (isoString: string) => {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-GB'); // e.g., "06/04/2025"
    };
  
    const handleSubmit = () => {
      console.log({
        task,
        fromDate,
        toDate,
        status,
        file,
        hours,
        remark
      });
      // Add form submission logic here
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Daily Task Updation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
  
          <IonItem>
            <IonLabel position="stacked">Task</IonLabel>
            <IonSelect value={task} placeholder="Select Task" onIonChange={e => setTask(e.detail.value)}>
              <IonSelectOption value="task1">Task 1</IonSelectOption>
              <IonSelectOption value="task2">Task 2</IonSelectOption>
            </IonSelect>
          </IonItem>
  
          <IonItem>
            <IonLabel position="stacked">From Date</IonLabel>
            <IonInput
              readonly
              value={fromDate ? formatDate(fromDate) : ''}
              placeholder="Select From Date"
              onClick={() => setShowFromModal(true)}
            />
          </IonItem>
  
          <IonItem>
            <IonLabel position="stacked">To Date</IonLabel>
            <IonInput
              readonly
              value={toDate ? formatDate(toDate) : ''}
              placeholder="Select To Date"
              onClick={() => setShowToModal(true)}
            />
          </IonItem>
  
          {/* From Date Modal */}
          <IonModal isOpen={showFromModal} onDidDismiss={() => setShowFromModal(false)}>
            <IonDatetime
              presentation="date"
              onIonChange={e => {
                setFromDate(e.detail.value!);
                setShowFromModal(false);
              }}
            />
          </IonModal>
  
          {/* To Date Modal */}
          <IonModal isOpen={showToModal} onDidDismiss={() => setShowToModal(false)}>
            <IonDatetime
              presentation="date"
              onIonChange={e => {
                setToDate(e.detail.value!);
                setShowToModal(false);
              }}
            />
          </IonModal>
  
          <IonItem>
            <IonLabel position="stacked">Total Estimated Hours</IonLabel>
            <IonInput type="number" placeholder="e.g., 10" />
          </IonItem>
  
          <IonItem>
            <IonLabel position="stacked">Status</IonLabel>
            <IonSelect value={status} placeholder="Select Status" onIonChange={e => setStatus(e.detail.value)}>
              <IonSelectOption value="inprocess">In Process</IonSelectOption>
              <IonSelectOption value="submitted">Submitted</IonSelectOption>
            </IonSelect>
          </IonItem>
  
          <IonItem>
            <IonLabel position="stacked">File Upload</IonLabel>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </IonItem>
  
          <IonItem>
            <IonLabel position="stacked">Actual Working Hours (Today)</IonLabel>
            <IonInput type="text" value={hours} placeholder="e.g., 8+3" onIonChange={e => setHours(e.detail.value!)} />
          </IonItem>
  
          <IonItem>
            <IonLabel position="stacked">Remarks / Comments</IonLabel>
            <IonTextarea value={remark} onIonChange={e => setRemark(e.detail.value!)} placeholder="Write comments here..." />
          </IonItem>
  
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton expand="block" color="primary" onClick={handleSubmit}>Submit</IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block" color="medium">Close</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default DailyTaskUpdate;
  