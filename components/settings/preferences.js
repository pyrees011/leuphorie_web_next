import React, { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PreferencesSettings = () => {
  const [theme, setTheme] = useState("light");
  const [compactMode, setCompactMode] = useState(false);
  const [dashboardView, setDashboardView] = useState("tasks");

  const handleSave = () => {
    console.log("Saved Preferences:", { theme, compactMode, dashboardView });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#C4D6D9] mb-4">App Preferences</h2>

      {/* Theme Selection */}
      <div className="mb-4">
        <label className="block text-[#F1AEC6] text-sm font-bold mb-1">Theme</label>
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="my-6" />

      {/* Compact Mode Toggle */}
      <div className="flex items-center justify-between mb-4">
        <label className="text-[#F1AEC6] font-bold">Enable Compact Mode</label>
        <Switch checked={compactMode} onCheckedChange={setCompactMode} />
      </div>

      <Separator className="my-6" />

      {/* Default Dashboard View */}
      <div className="mb-4">
        <label className="block text-[#F1AEC6] text-sm font-bold mb-1">Default Dashboard View</label>
        <Select value={dashboardView} onValueChange={setDashboardView}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Choose View" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tasks">Tasks</SelectItem>
            <SelectItem value="calendar">Calendar</SelectItem>
            <SelectItem value="analytics">Analytics</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="my-6" />

      {/* Save Button */}
      <Button onClick={handleSave} className="bg-[#FAC0CC] hover:bg-[#F1AEC6]">
        Save Preferences
      </Button>
    </div>
  );
};

export default PreferencesSettings;
