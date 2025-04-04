"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <p>Calendar</p>
      <Input
        type="number"
        placeholder="Day"
        className="w-44"
        min="1"
        max="31"
        value={day}
        onChange={(e) => setDay(Number(e.target.value))}
      />
      {!isDayValid && (<p className="text-red-500 text-xs">Must be between 1-31</p>)}
      <Input
        type="number"
        placeholder="Month"
        className="w-44"
        min="1"
        max="12"
        value={month}
        onChange={(e) => setMonth(Number(e.target.value))}
      />
      {!isMonthValid && (<p className="text-red-500 text-xs">Must be between 1-12</p>)}
      <Input
        type="number"
        placeholder="Year"
        className="w-44"
        min="-1000"
        max="2030"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
      />
      {!isYearValid && (<p className="text-red-500 text-xs">Must be between -1000-2030</p>)}
      <Button className="w-44" variant="default" disabled={!isFormValid}>
        Submit
      </Button>
    </div>
  );
}
