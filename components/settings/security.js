import { useState } from "react";
import { Shield, Key, Smartphone, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

const SecuritySettings = () => {
  // TODO: state management
  // TODO: connect to the backend
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="space-y-8">
      {/* Password Change Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Key className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Change Password</h3>
        </div>
        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input type="password" id="currentPassword" placeholder="Enter current password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input type="password" id="newPassword" placeholder="Enter new password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input type="password" id="confirmPassword" placeholder="Confirm new password" />
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Update Password
          </Button>
        </Card>
      </div>

      {/* Two-Factor Authentication */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
        </div>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-0.5">
              <Label className="text-base">Enable 2FA</Label>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <Switch
              checked={twoFactorEnabled}
              onCheckedChange={setTwoFactorEnabled}
            />
          </div>
          {twoFactorEnabled && (
            <Button variant="outline" className="w-full mt-4">
              Set Up Two-Factor Authentication
            </Button>
          )}
        </Card>
      </div>

      {/* Login History */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Login History</h3>
        </div>
        <Card className="p-6">
          <div className="space-y-4">
            {[
              { device: "MacBook Pro", location: "San Francisco, CA", time: "2 hours ago" },
              { device: "iPhone 13", location: "San Francisco, CA", time: "1 day ago" },
              { device: "Windows PC", location: "San Francisco, CA", time: "3 days ago" },
            ].map((session, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{session.device}</p>
                  <p className="text-sm text-gray-500">{session.location}</p>
                </div>
                <div className="text-sm text-gray-500">{session.time}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecuritySettings;
