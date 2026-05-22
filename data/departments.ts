import { Department } from "@/types";

// ─── Doctor avatars (using UI Avatars service for deterministic images) ───────
const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=0369a1&color=fff&bold=true&font-size=0.4`;

// ─── Departments Data ─────────────────────────────────────────────────────────
export const departments: Department[] = [
  {
    id: "cardiology",
    nameKey: "cardiology",
    descriptionKey: "cardiologyDesc",
    icon: "🫀",
    color: "red",
    doctors: [
      {
        id: "doc-card-1",
        name: "Dr. Batbayar Gantulga",
        specialty: "cardiologist",
        image: avatar("Batbayar Gantulga"),
        experience: 18,
        availableDays: ["Monday", "Wednesday", "Friday"],
        timeSlots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      },
      {
        id: "doc-card-2",
        name: "Dr. Enkhjargal Dorj",
        specialty: "cardiologist",
        image: avatar("Enkhjargal Dorj"),
        experience: 12,
        availableDays: ["Tuesday", "Thursday", "Saturday"],
        timeSlots: ["09:00", "10:30", "12:00", "14:00", "15:30"],
      },
      {
        id: "doc-card-3",
        name: "Dr. Nominchimeg Bolor",
        specialty: "cardiologist",
        image: avatar("Nominchimeg Bolor"),
        experience: 9,
        availableDays: ["Monday", "Tuesday", "Thursday"],
        timeSlots: ["10:00", "11:00", "13:00", "14:00", "16:00"],
      },
    ],
  },
  {
    id: "neurology",
    nameKey: "neurology",
    descriptionKey: "neurologyDesc",
    icon: "🧠",
    color: "purple",
    doctors: [
      {
        id: "doc-neuro-1",
        name: "Dr. Tserenpuntsag Oyun",
        specialty: "neurologist",
        image: avatar("Tserenpuntsag Oyun"),
        experience: 22,
        availableDays: ["Monday", "Wednesday", "Friday"],
        timeSlots: ["09:00", "10:00", "11:00", "14:00", "15:00"],
      },
      {
        id: "doc-neuro-2",
        name: "Dr. Gantulga Sukhbaatar",
        specialty: "neurologist",
        image: avatar("Gantulga Sukhbaatar"),
        experience: 15,
        availableDays: ["Tuesday", "Thursday"],
        timeSlots: ["08:30", "10:00", "11:30", "14:00", "15:30", "17:00"],
      },
    ],
  },
  {
    id: "pediatrics",
    nameKey: "pediatrics",
    descriptionKey: "pediatricsDesc",
    icon: "👶",
    color: "green",
    doctors: [
      {
        id: "doc-ped-1",
        name: "Dr. Urantsetseg Munkh",
        specialty: "pediatrician",
        image: avatar("Urantsetseg Munkh"),
        experience: 14,
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        timeSlots: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
      },
      {
        id: "doc-ped-2",
        name: "Dr. Altantsetseg Bold",
        specialty: "pediatrician",
        image: avatar("Altantsetseg Bold"),
        experience: 8,
        availableDays: ["Wednesday", "Thursday", "Friday", "Saturday"],
        timeSlots: ["09:30", "11:00", "13:30", "15:00", "16:30"],
      },
      {
        id: "doc-ped-3",
        name: "Dr. Bayartsetseg Lkhagva",
        specialty: "pediatrician",
        image: avatar("Bayartsetseg Lkhagva"),
        experience: 11,
        availableDays: ["Monday", "Friday", "Saturday"],
        timeSlots: ["08:00", "09:00", "10:00", "11:00", "14:00"],
      },
    ],
  },
  {
    id: "dentistry",
    nameKey: "dentistry",
    descriptionKey: "dentistryDesc",
    icon: "🦷",
    color: "blue",
    doctors: [
      {
        id: "doc-dent-1",
        name: "Dr. Munkhzul Enkhbat",
        specialty: "dentist",
        image: avatar("Munkhzul Enkhbat"),
        experience: 10,
        availableDays: ["Monday", "Tuesday", "Wednesday"],
        timeSlots: ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      },
      {
        id: "doc-dent-2",
        name: "Dr. Delgermaa Sod",
        specialty: "dentist",
        image: avatar("Delgermaa Sod"),
        experience: 7,
        availableDays: ["Thursday", "Friday", "Saturday"],
        timeSlots: ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"],
      },
    ],
  },
  {
    id: "emergency",
    nameKey: "emergency",
    descriptionKey: "emergencyDesc",
    icon: "🚨",
    color: "orange",
    doctors: [
      {
        id: "doc-emr-1",
        name: "Dr. Byambajargal Gal",
        specialty: "emergencyPhysician",
        image: avatar("Byambajargal Gal"),
        experience: 16,
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        timeSlots: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      },
      {
        id: "doc-emr-2",
        name: "Dr. Narantsatsral Ts.",
        specialty: "emergencyPhysician",
        image: avatar("Narantsatsral Ts"),
        experience: 11,
        availableDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
        timeSlots: ["09:00", "11:00", "13:00", "15:00", "17:00"],
      },
    ],
  },
  {
    id: "orthopedics",
    nameKey: "orthopedics",
    descriptionKey: "orthopedicsDesc",
    icon: "🦴",
    color: "teal",
    doctors: [
      {
        id: "doc-orth-1",
        name: "Dr. Erdenebayar Tsogt",
        specialty: "orthopedist",
        image: avatar("Erdenebayar Tsogt"),
        experience: 20,
        availableDays: ["Monday", "Wednesday", "Friday"],
        timeSlots: ["08:00", "09:30", "11:00", "14:00", "15:30"],
      },
      {
        id: "doc-orth-2",
        name: "Dr. Solongo Batsaikhan",
        specialty: "orthopedist",
        image: avatar("Solongo Batsaikhan"),
        experience: 13,
        availableDays: ["Tuesday", "Thursday", "Saturday"],
        timeSlots: ["09:00", "10:30", "12:00", "14:30", "16:00"],
      },
    ],
  },
];

// ─── Helper: find department by id ───────────────────────────────────────────
export function getDepartmentById(id: string): Department | undefined {
  return departments.find((d) => d.id === id);
}

// ─── Color utility ────────────────────────────────────────────────────────────
export const colorMap: Record<string, { bg: string; text: string; light: string; border: string; badge: string }> = {
  red:    { bg: "bg-red-500",    text: "text-red-600",    light: "bg-red-50",    border: "border-red-200",    badge: "bg-red-100 text-red-700" },
  purple: { bg: "bg-purple-500", text: "text-purple-600", light: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-700" },
  green:  { bg: "bg-green-500",  text: "text-green-600",  light: "bg-green-50",  border: "border-green-200",  badge: "bg-green-100 text-green-700" },
  blue:   { bg: "bg-blue-500",   text: "text-blue-600",   light: "bg-blue-50",   border: "border-blue-200",   badge: "bg-blue-100 text-blue-700" },
  orange: { bg: "bg-orange-500", text: "text-orange-600", light: "bg-orange-50", border: "border-orange-200", badge: "bg-orange-100 text-orange-700" },
  teal:   { bg: "bg-teal-500",   text: "text-teal-600",   light: "bg-teal-50",   border: "border-teal-200",   badge: "bg-teal-100 text-teal-700" },
};
