// ─── Core Domain Types ───────────────────────────────────────────────────────

export type Language = "en" | "mn";

export interface Doctor {
  id: string;
  name: string;
  specialty: string; // key into translations
  image: string;
  experience: number; // years
  availableDays: string[]; // e.g. ["Monday", "Wednesday"]
  timeSlots: string[]; // e.g. ["09:00", "10:00"]
}

export interface Department {
  id: string;
  nameKey: string; // translation key
  descriptionKey: string; // translation key
  icon: string; // emoji or icon name
  color: string; // tailwind color class
  doctors: Doctor[];
}

export interface Appointment {
  id: string;
  departmentId: string;
  doctorId: string;
  patientName: string;
  phone: string;
  date: string; // ISO string
  time: string;
  createdAt: string;
}

export interface AppointmentFormData {
  departmentId: string;
  doctorId: string;
  patientName: string;
  phone: string;
  date: string;
  time: string;
}

// ─── i18n Types ──────────────────────────────────────────────────────────────

export interface Translations {
  // Navbar
  nav: {
    home: string;
    departments: string;
    appointment: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  // Hero
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaBook: string;
    ctaDepartments: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
  };
  // About
  about: {
    badge: string;
    title: string;
    body1: string;
    body2: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  // Departments
  departments: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    noResults: string;
    viewDoctors: string;
    bookAppointment: string;
    doctors: string;
  };
  // Department names & descriptions
  dept: {
    cardiology: string;
    cardiologyDesc: string;
    neurology: string;
    neurologyDesc: string;
    pediatrics: string;
    pediatricsDesc: string;
    dentistry: string;
    dentistryDesc: string;
    emergency: string;
    emergencyDesc: string;
    orthopedics: string;
    orthopedicsDesc: string;
  };
  // Doctor specialties
  specialty: {
    cardiologist: string;
    neurologist: string;
    pediatrician: string;
    dentist: string;
    emergencyPhysician: string;
    orthopedist: string;
  };
  // Appointment
  appointment: {
    badge: string;
    title: string;
    subtitle: string;
    stepDept: string;
    stepDoctor: string;
    stepDateTime: string;
    stepInfo: string;
    selectDepartment: string;
    selectDoctor: string;
    selectDate: string;
    selectTime: string;
    patientName: string;
    patientNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    bookAnother: string;
    required: string;
    invalidPhone: string;
    noSlotsAvailable: string;
    experience: string;
    years: string;
    availableDays: string;
    confirmDate: string;
    confirmTime: string;
    confirmDoctor: string;
    confirmDept: string;
  };
  // Services
  services: {
    badge: string;
    title: string;
    subtitle: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
    s4Title: string;
    s4Desc: string;
  };
  // Contact / Footer
  footer: {
    tagline: string;
    address: string;
    addressValue: string;
    phone: string;
    phoneValue: string;
    email: string;
    emailValue: string;
    hours: string;
    hoursValue: string;
    quickLinks: string;
    rights: string;
  };
  // Days of week
  days: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  // Common
  common: {
    loading: string;
    error: string;
    close: string;
    back: string;
    next: string;
    yearsExp: string;
  };
}
