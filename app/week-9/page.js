"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log("User authenticated, redirecting to /shopping-list");
      router.push("/week-9/shopping-list");
    }
  }, [user, router]);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      console.log("Sign-in successful, user:", user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      console.log("Sign-out successful");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="p-8 bg-slate-700 shadow rounded-xl text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Shopping List App</h1>
        {user ? (
          <div>
            <p className="text-white mb-4">
              Welcome, {user.displayName} ({user.email})
            </p>
            <Link href="/week-9/shopping-list">
              <button className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl">
                Go to Shopping List
              </button>
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl"
          >
            Sign In with GitHub
          </button>
        )}
      </div>
    </div>
  );
}