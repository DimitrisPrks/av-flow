import { useState } from "react";
import { Briefcase, Users, Truck, Search, Inbox, Trash2 } from "lucide-react";
import {
  JobCard, StatusBadge, JobDetailPanel, NewJobDialog,
  CrewMemberRow, AssignCrewModal,
  VehicleRow, VehicleStatusBadge,
  EmptyState, ConfirmDialog, SearchInput,
} from "@/components";
import type { Job, JobDetail, CrewMember, Vehicle, JobStatus, VehicleStatus } from "@/components";

const sampleJob: Job = {
  id: "demo-1", title: "Annual Gala Dinner", client: "HSBC Malta",
  venue: "Mediterranean Conference Centre", date: "15 Apr", time: "18:00",
  status: "Confirmed", crewCount: 6, vehicleCount: 2,
};

const sampleJobDetail: JobDetail = {
  ...sampleJob, type: "Corporate",
  crew: [
    { name: "Mark Vella", role: "FOH Engineer", callTime: "14:00" },
    { name: "Sarah Borg", role: "Lighting Tech", callTime: "15:00" },
  ],
  vehicles: [
    { name: "Van 01", driver: "Joe Camilleri", loaded: true },
    { name: "Truck 03", driver: "Chris Farrugia", loaded: false },
  ],
  notes: "VIP entrance through side door. Parking at Level -2.",
};

const sampleCrew: CrewMember[] = [
  { id: "c1", name: "Mark Vella", role: "Sound Engineer", skills: ["FOH", "Monitors", "RF"], available: true },
  { id: "c2", name: "Sarah Borg", role: "Lighting Designer", skills: ["Moving Heads", "Haze", "Conventional"], available: true },
  { id: "c3", name: "Joe Camilleri", role: "Stagehand", skills: ["Rigging", "Truss"], available: false },
];

const sampleVehicles: Vehicle[] = [
  { id: "v1", name: "Van 01", type: "Sprinter", plate: "ABC 123", capacity: 3, status: "Loaded" },
  { id: "v2", name: "Truck 03", type: "7.5t", plate: "XYZ 789", capacity: 2, status: "On Site" },
  { id: "v3", name: "Van 04", type: "Transit", plate: "DEF 456", capacity: 4, status: "Back at Base" },
];

const allJobStatuses: JobStatus[] = ["Quoted", "Confirmed", "Prepping", "Rigged", "Live", "Wrapped", "Invoiced"];
const allVehicleStatuses: VehicleStatus[] = ["Not Loaded", "Loading", "Loaded", "Departed", "On Site", "Returning", "Back at Base"];

export function ComponentLibraryDemo() {
  const [detailOpen, setDetailOpen] = useState(false);
  const [newJobOpen, setNewJobOpen] = useState(false);
  const [assignOpen, setAssignOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-base font-semibold">AV Scheduler Component Library</h3>
        <p className="text-xs text-muted-foreground">All reusable components from src/components/index.ts</p>
      </div>

      {/* Status Badges */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">Job Status Badges</h4>
        <div className="flex flex-wrap gap-2">
          {allJobStatuses.map((s) => <StatusBadge key={s} status={s} />)}
        </div>
      </section>

      <section className="space-y-2">
        <h4 className="text-sm font-semibold">Vehicle Status Badges</h4>
        <div className="flex flex-wrap gap-2">
          {allVehicleStatuses.map((s) => <VehicleStatusBadge key={s} status={s} />)}
        </div>
      </section>

      {/* Job Card */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">JobCard → click to open JobDetailPanel</h4>
        <div className="max-w-md">
          <JobCard job={sampleJob} onClick={() => setDetailOpen(true)} />
        </div>
        <JobDetailPanel job={sampleJobDetail} open={detailOpen} onOpenChange={setDetailOpen} />
      </section>

      {/* New Job Modal trigger */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">NewJobModal</h4>
        <button onClick={() => setNewJobOpen(true)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
          <Briefcase className="w-3.5 h-3.5" /> Open New Job Dialog
        </button>
        <NewJobDialog open={newJobOpen} onOpenChange={setNewJobOpen} />
      </section>

      {/* Crew Member Rows */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">CrewMemberRow</h4>
        <div className="divide-y divide-border rounded-lg border border-border overflow-hidden max-w-lg">
          {sampleCrew.map((m) => <CrewMemberRow key={m.id} member={m} />)}
        </div>
      </section>

      {/* Assign Crew Modal */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">AssignCrewModal</h4>
        <button onClick={() => setAssignOpen(true)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
          <Users className="w-3.5 h-3.5" /> Assign Crew
        </button>
        <AssignCrewModal open={assignOpen} onOpenChange={setAssignOpen} crewMembers={sampleCrew} />
      </section>

      {/* Vehicle Rows */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">VehicleRow</h4>
        <div className="divide-y divide-border rounded-lg border border-border overflow-hidden max-w-lg">
          {sampleVehicles.map((v) => <VehicleRow key={v.id} vehicle={v} />)}
        </div>
      </section>

      {/* SearchInput */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">SearchInput</h4>
        <SearchInput value={searchVal} onChange={setSearchVal} placeholder="Search jobs, crew, vehicles…" className="max-w-sm" />
      </section>

      {/* EmptyState */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">EmptyState</h4>
        <div className="rounded-lg border border-border">
          <EmptyState icon={Inbox} heading="No jobs yet" subtext="Create your first job to get started." actionLabel="New Job" onAction={() => setNewJobOpen(true)} />
        </div>
      </section>

      {/* ConfirmDialog */}
      <section className="space-y-2">
        <h4 className="text-sm font-semibold">ConfirmDialog</h4>
        <button onClick={() => setConfirmOpen(true)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-destructive text-destructive-foreground text-xs font-medium hover:bg-destructive/90 transition-colors">
          <Trash2 className="w-3.5 h-3.5" /> Delete Job
        </button>
        <ConfirmDialog
          open={confirmOpen}
          onOpenChange={setConfirmOpen}
          title="Delete this job?"
          description="This action cannot be undone. The job and all associated assignments will be permanently removed."
          confirmLabel="Delete"
          destructive
          onConfirm={() => setConfirmOpen(false)}
        />
      </section>
    </div>
  );
}
