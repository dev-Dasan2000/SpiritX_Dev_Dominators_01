"use client"

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LogOut } from "lucide-react";
import { useRouter } from 'next/navigation';

// Type for user data
interface UserData {
  name: string;
  id: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch the user data from your API
    const fetchUserData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/user');
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      // Replace with your actual logout endpoint
      await fetch('/api/logout', {
        method: 'POST',
      });
      
      // Redirect to login page after logout
      router.push('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <Card className="w-full max-w-md mx-4 shadow-lg bg-gray-700 border-none">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-200">
              Welcome, {user?.name || 'User'}
            </h1>
            <p className="text-gray-300">
              You have successfully logged in
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center pb-6">
          <Button 
            onClick={handleLogout}
            className="w-full max-w-xs cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500"
            size="lg"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
          <p className="mt-4 text-sm text-gray-300">
            Thank you for using our services
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}