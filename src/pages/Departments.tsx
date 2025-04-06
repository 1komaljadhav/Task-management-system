

// Departments.tsx
import React from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
  IonGrid, IonRow, IonCol, IonButton, IonIcon
} from '@ionic/react';
import {
  calendarOutline, leafOutline, buildOutline, schoolOutline, heartOutline,
  flaskOutline, constructOutline, businessOutline, peopleOutline, earthOutline,
  hammerOutline, gitNetworkOutline, laptopOutline, searchOutline
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const departments = [
  { label: "Accounts and Finances", icon: calendarOutline },
  { label: "Agriculture HNT", icon: leafOutline },
  { label: "Instrument", icon: calendarOutline },
  { label: "Agriculture", icon: leafOutline },
  { label: "Purchase", icon: businessOutline },
  { label: "Production", icon: calendarOutline },
  { label: "General", icon: peopleOutline },
  { label: "Environment", icon: earthOutline },
  { label: "Electrical", icon: gitNetworkOutline },
  { label: "Engineering", icon: buildOutline },
  { label: "Education", icon: schoolOutline },
  { label: "Distillery", icon: flaskOutline },
  { label: "Co_Gen", icon: constructOutline },
  { label: "Civil", icon: hammerOutline },
  { label: "Information Technology", icon: laptopOutline },
  { label: "Secretarial", icon: searchOutline },
  { label: "Marketing and Sales", icon: heartOutline },
];

const Departments: React.FC = () => {
  const history = useHistory();

  const goToDepartmentTasks = (label: string) => {
    history.push(`/tasks/${encodeURIComponent(label)}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Departments</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {departments.map((dept, index) => (
              <IonCol size="4" key={index}>
                <IonButton
                  expand="block"
                  fill="outline"
                  onClick={() => goToDepartmentTasks(dept.label)}
                  style={{ borderRadius: '16px', textTransform: 'none', height: '60px', whiteSpace: 'normal' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', textAlign: 'center' }}>{dept.label}</span>
                    <IonIcon icon={dept.icon} size="small" />
                  </div>
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Departments;
