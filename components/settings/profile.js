import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import { Label } from "@/components/ui/label";

const profileSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
});

const ProfileSettings = () => {
  // TODO: attach the useForm to the profile state
  // TODO: state management

  const [profile, setProfile] = useState({
    username: "Elkan",
    email: "elkan@example.com",
    avatar: "/assets/avatar-placeholder.png",
  });

  const [isEditing, setIsEditing] = useState(false);

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: profile,
  });

  const onSubmit = (data) => {
    console.log("Updated Profile:", data);
    setProfile(data);
  };

  return (
    <div className="space-y-8">
      {/* Profile Photo Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Profile Photo</h3>
        <div className="flex items-center gap-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Change Photo
            </Button>
            <p className="text-sm text-gray-500">
              JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="johndoe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Bio</h3>
        <textarea
          className="w-full min-h-[100px] p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Write a short bio about yourself..."
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettings;
