import { Briefcase, Users, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { stats, jobs, statusColors } from "./demoData";

const icons = [Briefcase, Users, Truck];

export function ShadcnDemo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold">shadcn/ui</span>
        <span className="text-sm text-muted-foreground">Radix primitives + Tailwind styling</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <Card key={s.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">{s.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{s.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((j) => (
                <TableRow key={j.id}>
                  <TableCell className="font-medium">{j.title}</TableCell>
                  <TableCell>{j.client}</TableCell>
                  <TableCell>{j.date}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={statusColors[j.status]}>{j.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Form */}
      <Card>
        <CardHeader><CardTitle className="text-base">Quick Add Job</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Job Title</Label>
              <Input placeholder="e.g. Gala Dinner" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Client</Label>
              <Input placeholder="e.g. Acme Corp" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Status</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="prepping">Prepping</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-4">Add Job</Button>
        </CardContent>
      </Card>

      {/* Badges */}
      <div className="flex gap-2">
        {Object.keys(statusColors).map((s) => (
          <Badge key={s} variant="secondary" className={statusColors[s]}>{s}</Badge>
        ))}
      </div>
    </div>
  );
}
