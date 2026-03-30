import { HeroUIDemo } from "@/components/demo/HeroUIDemo";
import { CrewCardsDemo } from "@/components/demo/CrewCardsDemo";
import { TimelineDemo } from "@/components/demo/TimelineDemo";
import { NotificationsDemo } from "@/components/demo/NotificationsDemo";
import { ModalWorkflowDemo } from "@/components/demo/ModalWorkflowDemo";
import { ChartsDemo } from "@/components/demo/ChartsDemo";
import { ComponentLibraryDemo } from "@/components/demo/ComponentLibraryDemo";

export default function DemoComparison() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">UI Component Samples</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Reusable component demos for reference and sharing.
      </p>

      <div className="space-y-10">
        <ComponentLibraryDemo />
        <HeroUIDemo />
        <CrewCardsDemo />
        <TimelineDemo />
        <ChartsDemo />
        <NotificationsDemo />
        <ModalWorkflowDemo />
      </div>
    </div>
  );
}
