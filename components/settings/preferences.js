import { useState } from "react";
import { Sliders, Moon, Globe, Bell } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PreferencesSettings = () => {
  // TODO: state management
  // TODO: connect to the backend
  const [preferences, setPreferences] = useState({
    darkMode: false,
    compactMode: false,
    autoPlay: true,
  });

  return (
    <div className="space-y-8">
      {/* Display Settings */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Moon className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Display Settings</h3>
        </div>
        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Dark Mode</Label>
              <p className="text-sm text-gray-500">Enable dark mode for better viewing in low light</p>
            </div>
            <Switch
              checked={preferences.darkMode}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, darkMode: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Compact Mode</Label>
              <p className="text-sm text-gray-500">Show more content with reduced spacing</p>
            </div>
            <Switch
              checked={preferences.compactMode}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, compactMode: checked })
              }
            />
          </div>
        </Card>
      </div>

      {/* Language and Region */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Language and Region</h3>
        </div>
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <Label>Language</Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Time Zone</Label>
            <Select defaultValue="pst">
              <SelectTrigger>
                <SelectValue placeholder="Select Time Zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                <SelectItem value="est">Eastern Time (ET)</SelectItem>
                <SelectItem value="gmt">GMT</SelectItem>
                <SelectItem value="ist">India (IST)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          Save Preferences
        </Button>
      </div>
    </div>
  );
};

export default PreferencesSettings;
