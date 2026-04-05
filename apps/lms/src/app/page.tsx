"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { IResponseDTO } from "@acme/api-client";
import { ApiClient, createApiConfig } from "@acme/api-client";
import { useLmsSample } from "@acme/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CheckboxField,
  Form,
  Label,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextAreaField,
  TextField,
  ThemeToggle,
  toast,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@acme/ui";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bio: z.string().max(160).optional(),
  marketing: z.boolean().default(false).optional(),
});

export default function HomePage() {
  const { count, increment, decrement } = useLmsSample();
  const [apiData, setApiData] = React.useState<IResponseDTO<unknown> | null>(
    null,
  );
  const [loading, setLoading] = React.useState(false);

  // 1. API Client Test
  const testApi = async () => {
    setLoading(true);
    try {
      const client = new ApiClient(
        createApiConfig({
          baseURL: "https://jsonplaceholder.typicode.com",
          timeout: 10000,
        }),
      );
      const response = await client.get("/todos/1");
      setApiData(response);
      toast({
        title: "API Success",
        description: "Successfully fetched data from public API.",
      });
    } catch {
      toast({
        title: "API Error",
        description: "Failed to fetch data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // 2. Form Test
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      marketing: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="container mx-auto min-h-screen space-y-12 p-8 pb-32">
      <header className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold">LMS Platform Atomic Test Suite</h1>
          <p className="text-muted-foreground">
            Verifying Atomic Design, Store & API Client
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Section 1: Store & State */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          1. Store (Presentation Layer Hooks)
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Sample State Hook</CardTitle>
            <CardDescription>
              Using useLmsSample() facade hook from @acme/store
            </CardDescription>
          </CardHeader>
          <CardContent className="text-primary-900 flex items-center gap-6">
            <span className="text-4xl font-bold">{count}</span>
            <div className="space-x-2">
              <Button onClick={increment}>Increment</Button>
              <Button variant="secondary" onClick={decrement}>
                Decrement
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: API Client */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. API Client</h2>
        <Card>
          <CardHeader>
            <CardTitle>Public API Test</CardTitle>
            <CardDescription>
              Fetching from jsonplaceholder.typicode.com using @acme/api-client
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={testApi} disabled={loading}>
              {loading ? "Fetching..." : "Test API Connection"}
            </Button>
            {apiData && (
              <pre className="bg-muted overflow-auto rounded-md p-4 text-sm">
                {JSON.stringify(apiData, null, 2)}
              </pre>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Section 3: Atoms & Molecules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Atoms & Molecules</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Molecules Showcase */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Molecules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    This is an alert molecule.
                  </AlertDescription>
                </Alert>

                <Tabs defaultValue="account" className="w-full">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    Manage your account settings here.
                  </TabsContent>
                  <TabsContent value="password">
                    Change your password here.
                  </TabsContent>
                </Tabs>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-wrap gap-4">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Sheet Organicm</SheetTitle>
                        <SheetDescription>
                          This is a slide-out panel.
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Atoms Showcase */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Atoms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Button Variants</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="default">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary (Brand)</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge>Badge</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <Progress value={33} />
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>

                <div className="flex gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Color System Showcase */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Figma Color System</h2>
        <Card>
          <CardHeader>
            <CardTitle>Color Scales</CardTitle>
            <CardDescription>
              New palette migrated from Figma (#006FEE Primary, #0B1928 Neutral)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Primary Scale */}
            <div className="space-y-2">
              <Label>Primary Scale (#006FEE)</Label>
              <div className="grid grid-cols-11 gap-px overflow-hidden rounded-md border">
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-50 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">50</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-100 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">100</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-200 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">200</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-300 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">300</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-400 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">400</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-500 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">500</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-600 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">600</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-700 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">700</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-800 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">800</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-900 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">900</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="bg-primary-950 h-12 w-full rounded-sm" />
                  <span className="font-mono text-[10px]">950</span>
                </div>
              </div>
            </div>

            {/* Neutral Scale */}
            <div className="space-y-2">
              <Label>Neutral/Navy Scale (#0B1928)</Label>
              <div className="grid grid-cols-11 gap-px overflow-hidden rounded-md border">
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-50" />
                  <span className="font-mono text-[10px]">50</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-100" />
                  <span className="font-mono text-[10px]">100</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-200" />
                  <span className="font-mono text-[10px]">200</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-300" />
                  <span className="font-mono text-[10px]">300</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-400" />
                  <span className="font-mono text-[10px]">400</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-500" />
                  <span className="font-mono text-[10px]">500</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-600" />
                  <span className="font-mono text-[10px]">600</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-700" />
                  <span className="font-mono text-[10px]">700</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-800" />
                  <span className="font-mono text-[10px]">800</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-900" />
                  <span className="font-mono text-[10px]">900</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2">
                  <div className="h-12 w-full rounded-sm bg-neutral-950" />
                  <span className="font-mono text-[10px]">950</span>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="bg-success h-8 w-8 rounded-full" />
                <span className="text-sm font-medium">Success</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-warning h-8 w-8 rounded-full" />
                <span className="text-sm font-medium">Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-destructive h-8 w-8 rounded-full" />
                <span className="text-sm font-medium">Danger</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-tertiary h-8 w-8 rounded-full" />
                <span className="text-sm font-medium">Accent (Indigo)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Complex Organisms */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">4. Interactive Organisms</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Carousel</CardTitle>
            </CardHeader>
            <CardContent className="px-12">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {[1, 2, 3].map((i) => (
                    <CarouselItem key={i}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6 text-4xl font-semibold">
                            {i}
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Organism</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <TextField
                    name="username"
                    label="Username"
                    placeholder="Enter username"
                    required
                  />
                  <TextAreaField
                    name="bio"
                    label="Biography"
                    placeholder="Tell us about yourself"
                  />
                  <CheckboxField
                    name="marketing"
                    label="Marketing"
                    description="Receive marketing emails."
                  />
                  <Button type="submit">Submit Form</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
