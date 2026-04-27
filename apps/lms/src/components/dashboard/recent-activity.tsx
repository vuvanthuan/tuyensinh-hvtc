import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@acme/ui";

type StatusVariant = "default" | "secondary" | "outline" | "destructive";

interface Activity {
  id: string;
  user: { name: string; avatar: string; initials: string };
  action: string;
  target: string;
  time: string;
  status: string;
  variant: StatusVariant;
}

const activities: Activity[] = [
  {
    id: "1",
    user: {
      name: "Alex Rivera",
      avatar: "https://i.pravatar.cc/150?u=1",
      initials: "AR",
    },
    action: "published",
    target: "Advanced React Patterns",
    time: "2h ago",
    status: "Published",
    variant: "default",
  },
  {
    id: "2",
    user: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?u=2",
      initials: "SC",
    },
    action: "updated",
    target: "Fullstack Next.js",
    time: "5h ago",
    status: "Draft",
    variant: "secondary",
  },
  {
    id: "3",
    user: {
      name: "Michael J.",
      avatar: "https://i.pravatar.cc/150?u=3",
      initials: "MJ",
    },
    action: "submitted for review",
    target: "Mobile App Design",
    time: "1d ago",
    status: "Review",
    variant: "outline",
  },
  {
    id: "4",
    user: {
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/150?u=4",
      initials: "EW",
    },
    action: "archived",
    target: "UI/UX Basics",
    time: "2d ago",
    status: "Archived",
    variant: "destructive",
  },
];

export function RecentActivity({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">
            Recent Activity
          </CardTitle>
          <button className="text-muted-foreground text-xs underline-offset-4 hover:underline">
            View all
          </button>
        </div>
      </CardHeader>
      <CardContent className="divide-border flex flex-col divide-y">
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
          >
            <Avatar className="mt-0.5 size-7 rounded-full">
              <AvatarImage src={item.user.avatar} alt={item.user.name} />
              <AvatarFallback className="text-[10px] font-semibold">
                {item.user.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm leading-none">
                <span className="font-medium">{item.user.name}</span>
                <span className="text-muted-foreground"> {item.action} </span>
                <span className="font-medium">{item.target}</span>
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <Badge
                  variant={item.variant}
                  className="h-5 px-1.5 text-[10px] font-medium"
                >
                  {item.status}
                </Badge>
                <span className="text-muted-foreground text-xs">
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
