import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-2 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Input type="number" placeholder="Day" className="w-44" min="1" max="31" />
      <Input type="number" placeholder="Month" className="w-44" min="1" max="12" />
      <Input type="number" placeholder="Year" className="w-44" min="-1000" max="2030" />
      <Button className="w-44" variant="default">
        Submit
      </Button>
    </div>
  );
}
