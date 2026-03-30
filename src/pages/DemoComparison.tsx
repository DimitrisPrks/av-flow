import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ShadcnDemo } from "@/components/demo/ShadcnDemo";
import { HeroUIDemo } from "@/components/demo/HeroUIDemo";
import { MagicUIDemo } from "@/components/demo/MagicUIDemo";
import { TailwindDemo } from "@/components/demo/TailwindDemo";

export default function DemoComparison() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">UI Library Comparison</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Same mini-dashboard built with four different approaches — switch tabs to compare.
      </p>

      <Tabs defaultValue="shadcn" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="shadcn">shadcn/ui</TabsTrigger>
          <TabsTrigger value="heroui">HeroUI</TabsTrigger>
          <TabsTrigger value="magicui">Magic UI</TabsTrigger>
          <TabsTrigger value="tailwind">Tailwind Only</TabsTrigger>
        </TabsList>

        <TabsContent value="shadcn"><ShadcnDemo /></TabsContent>
        <TabsContent value="heroui"><HeroUIDemo /></TabsContent>
        <TabsContent value="magicui"><MagicUIDemo /></TabsContent>
        <TabsContent value="tailwind"><TailwindDemo /></TabsContent>
      </Tabs>
    </div>
  );
}
