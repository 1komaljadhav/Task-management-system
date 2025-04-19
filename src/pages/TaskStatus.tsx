import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const TaskStatus: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]); // Mock tasks
  const [filteredTasks, setFilteredTasks] = useState<any[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('New');
  const userRole = localStorage.getItem('userRole'); // Get role from localStorage

  // Mock task data
  const mockTasks = [
    { id: 1, title: 'Task 1', status: 'New', assignedTo: 'Employee', department: 'HR' },
    { id: 2, title: 'Task 2', status: 'In Progress', assignedTo: 'HOD', department: 'Finance' },
    { id: 3, title: 'Task 3', status: 'Submitted', assignedTo: 'Employee', department: 'IT' },
    { id: 4, title: 'Task 4', status: 'Complete', assignedTo: 'MD', department: 'HR' },
  ];

  useEffect(() => {
    // Simulate fetching tasks based on role
    if (userRole === 'Employee') {
      setTasks(mockTasks.filter((task) => task.assignedTo === 'Employee'));
    } else if (userRole === 'HOD') {
      setTasks(mockTasks.filter((task) => task.department === 'Finance')); // Example for HOD
    } else if (userRole === 'MD') {
      setTasks(mockTasks); // MD sees all tasks
    }
  }, [userRole]);

  useEffect(() => {
    // Filter tasks by selected status
    setFilteredTasks(tasks.filter((task) => task.status === selectedStatus));
  }, [tasks, selectedStatus]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task Status</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Status Tabs */}
        <IonSegment
          value={selectedStatus}
          onIonChange={(e) => setSelectedStatus(e.detail.value as string)}
        >
          <IonSegmentButton value="New">
            <IonLabel>New</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="In Progress">
            <IonLabel>In Progress</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Submitted">
            <IonLabel>Submitted</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Complete">
            <IonLabel>Complete</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Task List */}
        <IonList>
          {filteredTasks.map((task) => (
            <IonItem key={task.id}>
              <IonLabel>
                <h2>{task.title}</h2>
                <p>Status: {task.status}</p>
              </IonLabel>
              {userRole === 'Employee' && task.status === 'New' && (
                <IonButton
                  slot="end"
                  onClick={() => alert(`Marking Task ${task.id} as In Progress`)}
                >
                  Start
                </IonButton>
              )}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TaskStatus;