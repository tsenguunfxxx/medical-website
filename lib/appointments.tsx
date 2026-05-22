"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Appointment, AppointmentFormData } from "@/types";

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (data: AppointmentFormData) => Appointment;
  getAppointmentsByDoctor: (doctorId: string) => Appointment[];
}

const AppointmentContext = createContext<AppointmentContextType>({
  appointments: [],
  addAppointment: () => ({} as Appointment),
  getAppointmentsByDoctor: () => [],
});

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("appointments");
      if (saved) setAppointments(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  const addAppointment = (data: AppointmentFormData): Appointment => {
    const newAppt: Appointment = {
      ...data,
      id: `appt-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setAppointments((prev) => {
      const updated = [...prev, newAppt];
      localStorage.setItem("appointments", JSON.stringify(updated));
      return updated;
    });
    return newAppt;
  };

  const getAppointmentsByDoctor = (doctorId: string) =>
    appointments.filter((a) => a.doctorId === doctorId);

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, getAppointmentsByDoctor }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  return useContext(AppointmentContext);
}
