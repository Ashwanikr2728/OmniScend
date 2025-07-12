"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive area chart";

const dummyEnrollmentData = [
  {
    date: "2025-03-16",
    enrollments: 12,
  },
  {
    date: "2025-03-17",
    enrollments: 20,
  },
  {
    date: "2025-03-18",
    enrollments: 8,
  },
  {
    date: "2025-03-19",
    enrollments: 14,
  },
  {
    date: "2025-03-20",
    enrollments: 19,
  },
  {
    date: "2025-03-21",
    enrollments: 10,
  },
  {
    date: "2025-03-22",
    enrollments: 17,
  },
  {
    date: "2025-03-23",
    enrollments: 21,
  },
  {
    date: "2025-03-01",
    enrollments: 11,
  },
  {
    date: "2025-03-03",
    enrollments: 15,
  },
  {
    date: "2025-03-05",
    enrollments: 9,
  },
  {
    date: "2025-03-08",
    enrollments: 13,
  },
  {
    date: "2025-03-12",
    enrollments: 18,
  },
  {
    date: "2025-03-14",
    enrollments: 7,
  },
  {
    date: "2025-03-24",
    enrollments: 16,
  },
  {
    date: "2025-03-27",
    enrollments: 22,
  },
  {
    date: "2025-03-09",
    enrollments: 12,
  },
  {
    date: "2025-03-11",
    enrollments: 19,
  },
  {
    date: "2025-03-16",
    enrollments: 14,
  },
  {
    date: "2025-03-25",
    enrollments: 17,
  },
  {
    date: "2025-03-30",
    enrollments: 20,
  },
];

const chartConfig = {
  enrollments: {
    label: "Enrollments",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

interface ChartAreaInteractiveProps {
  data: { date: string; enrollments: number }[];
}

export function ChartAreaInteractive({ data }: ChartAreaInteractiveProps) {
  const totalEnrollmentsNumber = React.useMemo(
    () => data.reduce((acc, curr) => acc + curr.enrollments, 0),
    [data]
  );
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Enrollments</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total Enrollments for the last 30 days: {totalEnrollmentsNumber}
          </span>
          <span className="@[540px]/card:hidden">Last 30 days: {totalEnrollmentsNumber}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={1}
              tickFormatter={(value) => {
                const data = new Date(value);
                return data.toLocaleDateString("en-IN", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  labelFormatter={(value) => {
                    const data = new Date(value);
                    return data.toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={"enrollments"} fill="var(--color-enrollments)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
