"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ApiClient, createApiConfig } from "@acme/api-client";
import { useLmsSample } from "@acme/store";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CheckboxField,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Form,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  TextAreaField,
  TextField,
  ThemeToggle,
  toast,
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
  const [apiData, setApiData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);

  // 1. API Client Test
  const testApi = async () => {
    setLoading(true);
    try {
      const client = new ApiClient(
        createApiConfig({
          baseURL: "https://jsonplaceholder.typicode.com",
        }),
      );
      const response = await client.get("/todos/1");
      setApiData(response);
      toast({
        title: "API Success",
        description: "Successfully fetched data from public API.",
      });
    } catch (error) {
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
          <h1 className="text-3xl font-bold">LMS Platform Test Suite</h1>
          <p className="text-muted-foreground">
            Verifying Atomic Design & Clean Architecture
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
          1. Store (Redux + Clean Architecture)
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Sample State Hook</CardTitle>
            <CardDescription>Using useLmsSample() facade hook</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-6">
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
              Fetching from jsonplaceholder.typicode.com
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

      {/* Section 3: UI Atoms & Molecules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. UI Atoms & Molecules</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Molecules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  This is an alert molecule using the new design system.
                </AlertDescription>
              </Alert>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This dialog is an organism combining multiple molecules.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">Content goes here...</div>
                    <DialogFooter>
                      <Button type="submit">Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Dropdown</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

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
              <Separator />
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost">Toggle Collapsible</Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-muted rounded-md p-2">
                    Hidden content revealed!
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Forms & Fields */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          4. Forms & Fields (Organisms)
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>User Profile Form</CardTitle>
            <CardDescription>
              Using react-hook-form + zod + custom organisms
            </CardDescription>
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
                  placeholder="Enter your username"
                  required
                />
                <TextAreaField
                  name="bio"
                  label="Biography"
                  placeholder="Tell us about yourself"
                />
                <CheckboxField
                  name="marketing"
                  label="Marketing emails"
                  description="Receive emails about new products and features."
                />
                <Button type="submit">Submit Form</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
