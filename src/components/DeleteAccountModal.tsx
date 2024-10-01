import { useState } from "react";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/stores/authStore";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function DeleteAccountModal({ onClose }: { onClose: () => void }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const deleteAccount = useAuthStore((state) => state.deleteAccount);
  const router = useRouter();
  const { data: session } = useSession();

  const handleDelete = async () => {
    if (!session) {
      setError("You must be logged in to delete your account.");
      return;
    }

    setIsDeleting(true);
    setError(null);
    try {
      await deleteAccount();
      onClose();
      router.push('/');
    } catch (error) {
      console.error("Failed to delete account:", error);
      setError("Failed to delete account. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-stone-800 p-6 rounded-lg">
        <h2 className="text-xl font-pixel text-stone-200 mb-4">Are you sure you want to delete your account?</h2>
        <p className="text-stone-300 mb-4">This action cannot be undone.</p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-end space-x-2">
          <Button onClick={onClose} className="bg-stone-700 hover:bg-stone-600 text-stone-200 font-pixel text-xs">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            disabled={isDeleting || !session}
            className="bg-red-600 hover:bg-red-700 text-white font-pixel text-xs"
          >
            {isDeleting ? "Deleting..." : "Delete Account"}
          </Button>
        </div>
      </div>
    </div>
  );
}