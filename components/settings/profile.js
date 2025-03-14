import React, { useState } from "react";

// components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// hooks
import { useToast } from "@/hooks/use-toast";

// context
import { useUser } from "@/contexts/UserContext";

// axios
import { useAxiosInstance } from "@/axios/axios";

const ProfileSettings = () => {
  const axiosInstance = useAxiosInstance("settings");
  const { user } = useUser();
  const { toast } = useToast();

  const [profile, setProfile] = useState({
    fullName: user?.fullName || "",
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
  });

  const handleUpdate = async () => {
    try {
      // await axiosInstance.put(`settings/${user.id}/profile`, {
      //   full_name: profile.fullName,
      //   username: profile.username,
      //   email: profile.email,
      //   phone_number: profile.phone,
      //   bio: profile.bio,
      // });

      toast({ title: "Profile updated!", description: "Your changes have been saved.", variant: "default" });
    } catch (error) {
      toast({ title: "Error updating profile", description: "Something went wrong.", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-8">
      {/* Profile Photo Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Profile Photo</h3>
        <div className="flex items-center gap-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>{profile.username.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input value={profile.fullName} onChange={(e) => setProfile({ ...profile, fullName: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Username</Label>
            <Input value={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Email (Read-Only)</Label>
            <Input value={profile.email} readOnly />
          </div>
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Bio</h3>
        <textarea
          className="w-full min-h-[100px] p-3 rounded-md border border-gray-200"
          placeholder="Write a short bio..."
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleUpdate}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettings;
