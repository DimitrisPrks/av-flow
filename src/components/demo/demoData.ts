export const stats = [
  { label: "Total Jobs", value: 42, icon: "briefcase" },
  { label: "Active Crew", value: 18, icon: "users" },
  { label: "Vehicles", value: 7, icon: "truck" },
];

export const jobs = [
  { id: 1, title: "BOV Conference", client: "Bank of Valletta", date: "31 Mar", status: "Confirmed" },
  { id: 2, title: "Borg Wedding", client: "Maria Borg", date: "29 Mar", status: "Live" },
  { id: 3, title: "Malta Rocks Fest", client: "Events Malta", date: "4 Apr", status: "Prepping" },
  { id: 4, title: "GO Launch", client: "GO plc", date: "28 Mar", status: "Wrapped" },
  { id: 5, title: "UoM Graduation", client: "University of Malta", date: "2 Apr", status: "Confirmed" },
];

export const statusColors: Record<string, string> = {
  Confirmed: "bg-blue-500/15 text-blue-700 dark:text-blue-400",
  Live: "bg-green-500/15 text-green-700 dark:text-green-400",
  Prepping: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  Wrapped: "bg-gray-500/15 text-gray-700 dark:text-gray-400",
};
