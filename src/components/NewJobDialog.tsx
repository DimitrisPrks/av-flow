import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface NewJobDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const jobTypes = ["Corporate", "Wedding", "Concert", "Conference", "Festival", "Theatre"];

export function NewJobDialog({ open, onOpenChange }: NewJobDialogProps) {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [venue, setVenue] = useState("");
  const [eventDate, setEventDate] = useState<Date>();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [jobType, setJobType] = useState("");
  const [notes, setNotes] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);

  const reset = () => {
    setTitle(""); setClient(""); setVenue(""); setEventDate(undefined);
    setStartTime(""); setEndTime(""); setJobType(""); setNotes("");
  };

  const handleSave = () => {
    // For now just close — would persist to DB later
    reset();
    onOpenChange(false);
  };

  const handleCancel = () => {
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Job</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid gap-1.5">
            <Label htmlFor="title" className="text-xs">Job Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Annual Gala Dinner" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="client" className="text-xs">Client Name</Label>
              <Input id="client" value={client} onChange={(e) => setClient(e.target.value)} placeholder="e.g. HSBC Malta" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="jobType" className="text-xs">Job Type</Label>
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger id="jobType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="venue" className="text-xs">Venue</Label>
            <Input id="venue" value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="e.g. Mediterranean Conference Centre, Valletta" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="grid gap-1.5">
              <Label className="text-xs">Event Date</Label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal text-sm", !eventDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
                    {eventDate ? format(eventDate, "d MMM yyyy") : "Pick date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={eventDate}
                    onSelect={(d) => { if (d) { setEventDate(d); setCalendarOpen(false); } }}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="startTime" className="text-xs">Start Time</Label>
              <Input id="startTime" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="endTime" className="text-xs">End Time</Label>
              <Input id="endTime" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="notes" className="text-xs">Notes</Label>
            <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any additional details…" className="min-h-[80px] resize-none" />
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
