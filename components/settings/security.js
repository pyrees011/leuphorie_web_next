import { useState } from "react";
import { Key, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const SecuritySettings = () => {
  const { toast } = useToast();
  const [twoFactor, setTwoFactor] = useState(false);

  const updatePassword = () => {
    toast({ title: "Password updated!", description: "Your new password has been saved." });
  };

  return (
    <div className="space-y-8">
      {/* Change Password */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Key className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Change Password</h3>
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input type="password" id="new-password" placeholder="Enter new password" />
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={updatePassword}>
          Update Password
        </Button>
      </Card>

      {/* Enable Two-Factor Authentication */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Enable 2FA</Label>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
          </div>
          <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
        </div>
      </Card>
    </div>
  );
};

export default SecuritySettings;
