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

const profileSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
});

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    username: "Elkan",
    email: "elkan@example.com",
    avatar: "/assets/avatar-placeholder.png",
  });

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: profile,
  });

  const onSubmit = (data) => {
    console.log("Updated Profile:", data);
    setProfile(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#C4D6D9] mb-4">Profile</h2>

      {/* Avatar + Delete/Update Buttons */}
      <div className="flex items-center space-x-6">
        <Avatar>
          <AvatarImage src={profile.avatar} />
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
        <Button variant="destructive">Delete</Button>
        <Button>Update</Button>
      </div>

      <Separator className="my-6" />

      {/* Display Username & Email (Static) */}
      <div className="mb-4">
        <label className="block text-[#F1AEC6] text-sm font-bold mb-1">Username</label>
        <p className="text-lg">{profile.username}</p>
      </div>

      <div className="mb-4">
        <label className="block text-[#F1AEC6] text-sm font-bold mb-1">Email</label>
        <p className="text-lg">{profile.email}</p>
      </div>

      {/* Edit Profile Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-black'>Edit Your Profile</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Save Changes</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileSettings;
