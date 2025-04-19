import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard - MD/CFO</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard button onClick={() => navigateTo('/task-status')}>
                <IonCardHeader>
                  <IonCardTitle>Task Status</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard button onClick={() => navigateTo('/assign-task')}>
                <IonCardHeader>
                  <IonCardTitle>Assign Task</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonCard button onClick={() => navigateTo('/departments')}>
                <IonCardHeader>
                  <IonCardTitle>Department Access</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard button onClick={() => navigateTo('/monthly-report')}>
                <IonCardHeader>
                  <IonCardTitle>Monthly Report</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonCard button onClick={() => navigateTo('/consolidated-report')}>
                <IonCardHeader>
                  <IonCardTitle>Consolidated Report</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard button onClick={() => navigateTo('/login')}>
                <IonCardHeader>
                  <IonCardTitle>Logout</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
