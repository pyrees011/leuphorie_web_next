import { useState } from "react";
import { Bell, Mail, Phone, MessageSquare } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotificationSettings = () => {
  // TODO: state management
  // TODO: connect to the backend
  const [emailNotifications, setEmailNotifications] = useState({
    updates: true,
    reminders: true,
    newsletter: false,
  });

  const [pushNotifications, setPushNotifications] = useState({
    taskReminders: true,
    healthAlerts: true,
    achievements: true,
  });

  return (
    <div className="space-y-8">
      {/* Email Notifications */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Email Notifications</h3>
        </div>
        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Updates and News</Label>
              <p className="text-sm text-gray-500">Receive updates about new features and improvements</p>
            </div>
            <Switch
              checked={emailNotifications.updates}
              onCheckedChange={(checked) =>
                setEmailNotifications({ ...emailNotifications, updates: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Task Reminders</Label>
              <p className="text-sm text-gray-500">Get email reminders for upcoming and overdue tasks</p>
            </div>
            <Switch
              checked={emailNotifications.reminders}
              onCheckedChange={(checked) =>
                setEmailNotifications({ ...emailNotifications, reminders: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Newsletter</Label>
              <p className="text-sm text-gray-500">Monthly newsletter with health tips and insights</p>
            </div>
            <Switch
              checked={emailNotifications.newsletter}
              onCheckedChange={(checked) =>
                setEmailNotifications({ ...emailNotifications, newsletter: checked })
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
        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Task Reminders</Label>
              <p className="text-sm text-gray-500">Real-time notifications for task deadlines</p>
            </div>
            <Switch
              checked={pushNotifications.taskReminders}
              onCheckedChange={(checked) =>
                setPushNotifications({ ...pushNotifications, taskReminders: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Health Alerts</Label>
              <p className="text-sm text-gray-500">Important alerts about your health metrics</p>
            </div>
            <Switch
              checked={pushNotifications.healthAlerts}
              onCheckedChange={(checked) =>
                setPushNotifications({ ...pushNotifications, healthAlerts: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Achievements</Label>
              <p className="text-sm text-gray-500">Notifications when you reach your goals</p>
            </div>
            <Switch
              checked={pushNotifications.achievements}
              onCheckedChange={(checked) =>
                setPushNotifications({ ...pushNotifications, achievements: checked })
              }
            />
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

export default NotificationSettings;
