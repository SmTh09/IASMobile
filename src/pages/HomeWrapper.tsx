/**
 * Wrapper para HomeViewMobileCustomer
 * 
 * Proporciona la funcionalidad necesaria para el componente original
 * mientras mantiene la autenticación
 */

import { useState } from 'react';
import { useAuth } from '../auth/useAuth';
import HomeViewMobileCustomer from '../imports/HomeViewMobileCustomer';

export default function HomeWrapper() {
  const { logout } = useAuth();
  const [appointmentCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Handlers para las acciones del HomeView
  const handleAddAppointment = () => {
    console.log('Add appointment clicked');
    // Aquí puedes agregar la lógica para agregar citas
  };

  const handleViewAppointments = () => {
    console.log('View appointments clicked');
    // Aquí puedes agregar la lógica para ver citas
  };

  const handleNewAppointment = () => {
    console.log('New appointment clicked');
    // Aquí puedes agregar la lógica para nueva cita
  };

  const handleDismissNotification = () => {
    setShowNotification(false);
  };

  const handleMenuClick = () => {
    console.log('Menu clicked');
    // Aquí puedes agregar la lógica del menú
    // Por ejemplo, mostrar opciones incluyendo logout
    const shouldLogout = window.confirm('¿Deseas cerrar sesión?');
    if (shouldLogout) {
      logout();
    }
  };

  return (
    <HomeViewMobileCustomer
      onAddAppointment={handleAddAppointment}
      onViewAppointments={handleViewAppointments}
      onNewAppointment={handleNewAppointment}
      appointmentCount={appointmentCount}
      showNotification={showNotification}
      onDismissNotification={handleDismissNotification}
      onMenuClick={handleMenuClick}
    />
  );
}
