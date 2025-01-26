import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const SecuritySettings = () => {
  const [confirmText, setConfirmText] = useState("");

  const handleDelete = () => {
    if (confirmText.toLowerCase() === "confirm") {
      console.log("Account Deleted");
      // Call API to delete account
    } else {
      alert("Please type 'confirm' to proceed.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#C4D6D9] mb-4">Privacy & Security</h2>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove all data.
            </DialogDescription>
          </DialogHeader>

          <Input
            placeholder="Type 'confirm' to delete"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
          />

          <Button variant="destructive" onClick={handleDelete}>Confirm Delete</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SecuritySettings;
