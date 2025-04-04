"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [day, setDay] = useState(4);
  const [month, setMonth] = useState(4);
  const [year, setYear] = useState(2025);

  const isDayValid = day >= 1 && day <= 31;
  const isMonthValid = month >= 1 && month <= 12;
  const isYearValid = year >= -1000 && year <= 2030;

  const isFormValid = isDayValid && isMonthValid && isYearValid;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-2 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-3xl">Calendar</p>
      <div className="flex flex-col gap-2">
        <Label htmlFor="day">Day</Label>
        <Input
          type="number"
          placeholder="Day"
          id="day"
          className="w-44"
          min="1"
          max="31"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        />
        {!isDayValid && (<p className="text-red-500 text-xs">Must be between 1-31</p>)}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="month">Month</Label>
        <Input
          type="number"
          placeholder="Month"
          id="month"
          className="w-44"
          min="1"
          max="12"
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        />
        {!isMonthValid && (<p className="text-red-500 text-xs">Must be between 1-12</p>)}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="year">Year</Label>
        <Input
          type="number"
          placeholder="Year"
          id="year"
          className="w-44"
          min="-1000"
          max="2030"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
        {!isYearValid && (<p className="text-red-500 text-xs">Must be between -1000-2030</p>)}
      </div>
      <Button className="w-44" variant="default" disabled={!isFormValid}>
        Submit
      </Button>
    </div>
  );
}
