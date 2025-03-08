"use client";

import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LogOut } from "lucide-react";
import { useRouter } from 'next/navigation';
import Loader2 from '@/components/Loader';

import authMethods from './../api/api-methods';
import apiMethods from './../api/api-methods';

interface UserData {
  name: string;
  id: string;
}

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted
  const hasRun = useRef(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    setIsMounted(true); // Ensure DOM is fully rendered
  }, []);

  useEffect(() => {
    if (isMounted) {
      authenticate();
    }
  }, [isMounted]);

  const handleLogout = async () => {
    setRedirecting(true);
    try {
      await apiMethods.LogOut().then(() => {
        router.push('/');
      });
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setRedirecting(false);
    }
  };

  const authenticate = async () => {
    if (hasRun.current) return;
    hasRun.current = true;

    try {
      const response = await authMethods.refreshToken();
      if (!(response.accessToken && response.username)) {
        router.push('/');
        return;
      }
      setUser(response.username);
    } catch (error) {
      console.error('Authentication error:', error);
      router.push('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <Card className="w-full max-w-md mx-4 shadow-lg bg-gray-700 border-none">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-200">
              Welcome, {user && user || 'User'}
            </h1>
            <p className="text-gray-300">You have successfully logged in</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center pb-6">
          <Button
            disabled={redirecting}
            onClick={handleLogout}
            className="w-full max-w-xs cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500"
            size="lg"
          >
            <LogOut className="mr-2 h-4 w-4" />
            {redirecting ? <Loader2 /> : "Logout"}
          </Button>
          <p className="mt-4 text-sm text-gray-300">Thank you for using our services</p>
        </CardFooter>
      </Card>
    </div>
  );
}
