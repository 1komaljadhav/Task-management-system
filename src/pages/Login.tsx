import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  // Mock user data — ideally comes from backend later
  const mockUsers = [
    { email: 'md@example.com', password: 'md123', role: 'MD' },
    { email: 'cfo@example.com', password: 'cfo123', role: 'CFO' },
    { email: 'gm@example.com', password: 'gm123', role: 'GM' },
    { email: 'hod@example.com', password: 'hod123', role: 'HOD' },
    { email: 'employee@example.com', password: 'emp123', role: 'Employee' },
  ];

  const handleLogin = () => {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Store role and email for future use (replace with context later)
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userEmail', user.email);

      // Redirect based on role
      switch (user.role) {
        case 'MD':
        case 'CFO':
          history.push('/dashboard'); // Main dashboard with reports, role-wise, etc.
          break;
        case 'GM':
        case 'HOD':
          history.push('/task-status'); // Can view/assign tasks
          break;
        case 'Employee':
          history.push('/task-status'); // Limited access
          break;
        default:
          setShowToast(true);
      }
    } else {
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
          Login
        </IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Invalid credentials"
          duration={2000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
