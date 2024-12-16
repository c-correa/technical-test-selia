export const icons = () => {
  const ICON_HOME = 'https://i.ibb.co/KNJKYsD/icon-home.png'
  const ICON_APPOINTMENTS = 'https://i.ibb.co/HgV400r/icon-appointment.png'
  const LOGO_SELIA = 'https://i.ibb.co/0hcdv7w/Logo-Selia.png'
  const ICON_PATIENTS = 'https://i.ibb.co/3r122cz/icon-profile.png'
  const ICON_LOCK = 'https://i.ibb.co/fkjgmPM/icon-lock.png'
  const ICON_EYE = 'https://i.ibb.co/x5DJm3S/icon-eye.png'
  const ICON_DOWN = "https://i.ibb.co/R3qTd7x/chevron-down.png"
  const ICON_UP = "https://i.ibb.co/jLqhct1/chevron-up.png"

  return {
    ICON_HOME,
    ICON_APPOINTMENTS,
    LOGO_SELIA,
    ICON_PATIENTS,
    ICON_LOCK,
    ICON_EYE,
    ICON_DOWN,
    ICON_UP
  }
}

export type NavigationItem = {
  hash?: number; // Opcional, ya que no todos los elementos lo tienen
  path?: string; // Opcional, porque los elementos con children no tienen path
  name: string; // Nombre del elemento (obligatorio)
  icon?: string; // Icono opcional
  children?: NavigationItem[]; // Submenús opcionales, recursivo
};
