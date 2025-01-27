import React from "react";
import { Settings as SettingsIcon, User, Bell, Shield, Sliders } from "lucide-react";

// shadcn
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

// components
import ProfileSettings from "../components/settings/profile";
import NotificationSettings from "../components/settings/notifications";
import SecuritySettings from "../components/settings/security";
import PreferencesSettings from "../components/settings/preferences";

// layout
import AuthenticatedLayout from "@/layout/authenticatedLayout";

const SettingsPage = () => {
  // TODO: add a global state for user settings
  // TODO: connect to the backend
  return (
    <AuthenticatedLayout>
      <div className="">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white py-4">
          <div className="mx-auto px-4">
            <div className="flex items-center h-16">
              <div className="flex items-center space-x-2">
                <SettingsIcon className="w-6 h-6 text-emerald-600" />
                <h1 className="text-xl font-semibold">Settings</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto px-6 py-8 rounded-3xl bg-gray-100">
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-emerald-800/10 to-emerald-600/10 border-none p-8 mb-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold mb-4">Account Settings</h1>
              <p className="text-gray-600">
                Manage your account settings and set preferences for your experience.
              </p>
            </div>
          </Card>

          {/* Settings Tabs */}
          <Card className="p-6">
            <Tabs defaultValue="profile" className="w-ful">
              <TabsList className="flex space-x-2 bg-muted mb-6 rounded-3xl px-2 py-6">
                { settingsTabs.map((tab) => (
                  <SettingsTabsTrigger key={tab.value} tabs={tab} />
                )) }
              </TabsList>

              <div className="mt-4">
                <TabsContent value="profile">
                  <ProfileSettings />
                </TabsContent>
                <TabsContent value="notifications">
                  <NotificationSettings />
                </TabsContent>
                <TabsContent value="security">
                  <SecuritySettings />
                </TabsContent>
                <TabsContent value="preferences">
                  <PreferencesSettings />
                </TabsContent>
              </div>
            </Tabs>
          </Card>
        </main>
      </div>
    </AuthenticatedLayout>
  );
};

const settingsTabs = [
  {
    value: "profile",
    label: "Profile",
    icon: <User className="w-4 h-4" />,
  },
  {
    value: "notifications",
    label: "Notifications",
    icon: <Bell className="w-4 h-4" />,
  },
  {
    value: "security",
    label: "Security",
    icon: <Shield className="w-4 h-4" />,
  },
  {
    value: "preferences",
    label: "Preferences",
    icon: <Sliders className="w-4 h-4" />,
  },
];

const SettingsTabsTrigger = ({ tabs }) => {
  return (
    <TabsTrigger 
      value={tabs.value} 
      className="flex items-center gap-2 data-[state=active]:bg-white w-full rounded-2xl p-2"
    >
      <User className="w-4 h-4" />
      {tabs.label}
    </TabsTrigger>
  )
}

export default SettingsPage;
