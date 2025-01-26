import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileSettings from "../../components/settings/profile";
import NotificationSettings from "../../components/settings/notifications";
import SecuritySettings from "../../components/settings/security";
import PreferencesSettings from "../../components/settings/preferences";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#E8F3E2] text-gray-900 font-mona p-6">
      <h1 className="text-3xl font-bold text-[#C4D6D9] mb-6">Settings</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="flex space-x-4 bg-white p-2 rounded-md shadow-md">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Privacy & Security</TabsTrigger>
          <TabsTrigger value="preferences">App Preferences</TabsTrigger>
        </TabsList>

        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <TabsContent value="profile"><ProfileSettings /></TabsContent>
          <TabsContent value="notifications"><NotificationSettings /></TabsContent>
          <TabsContent value="security"><SecuritySettings /></TabsContent>
          <TabsContent value="preferences"><PreferencesSettings /></TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
