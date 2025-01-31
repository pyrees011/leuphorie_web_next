import { useState } from "react";
import { Bell, Mail, Smartphone, MessageSquare } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/contexts/UserContext";

// axios
import { useAxiosInstance } from "@/axios/axios";

const NotificationSettings = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const axiosInstance = useAxiosInstance("settings");
  
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    taskReminders: true,
    newsletter: false,
    pushReminders: true,
    healthAlerts: true,
    achievements: true,
    smsAlerts: false,
  });

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`settings/${user.id}/notifications`, {
        email_updates: notifications.emailUpdates,
        task_reminders: notifications.taskReminders,
        newsletter: notifications.newsletter,
        push_reminders: notifications.pushReminders,
        health_alerts: notifications.healthAlerts,
        achievements: notifications.achievements,
        sms_alerts: notifications.smsAlerts,
      });

      toast({ title: "Notification settings updated successfully!" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Couldn't update notifications.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Email Notifications */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Email Notifications</h3>
        </div>
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Label>Email Updates</Label>
            <Switch
              checked={notifications.emailUpdates}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, emailUpdates: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Task Reminders</Label>
            <Switch
              checked={notifications.taskReminders}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, taskReminders: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Newsletter</Label>
            <Switch
              checked={notifications.newsletter}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, newsletter: checked })
              }
            />
          </div>
        </Card>
      </div>

      {/* Push Notifications */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Push Notifications</h3>
        </div>
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Label>Task Reminders</Label>
            <Switch
              checked={notifications.pushReminders}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, pushReminders: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Health Alerts</Label>
            <Switch
              checked={notifications.healthAlerts}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, healthAlerts: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Achievements</Label>
            <Switch
              checked={notifications.achievements}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, achievements: checked })
              }
            />
          </div>
        </Card>
      </div>

      {/* SMS Notifications */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">SMS Notifications</h3>
        </div>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <Label>SMS Alerts</Label>
            <Switch
              checked={notifications.smsAlerts}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, smsAlerts: checked })
              }
            />
          </div>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleUpdate}>
          Save Preferences
        </Button>
      </div>
    </div>
  );
};

export default NotificationSettings;
