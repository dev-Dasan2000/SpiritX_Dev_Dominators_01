"use client"

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const isReturningUser = searchParams.get("welcome Back") === "true";

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <Card className="w-[350px] bg-gray-700 text-white shadow-lg rounded-lg border-none">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {isReturningUser ? "Welcome Back" : "Welcome"}
          </CardTitle>
          <p className="text-center text-gray-400 text-sm">
            {isReturningUser ? "Sign in to your account" : "Create an account to get started"}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label className="text-gray-300" htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username" className="mt-1 bg-gray-800 border-none" />
            </div>
            <div>
              <Label className="text-gray-300" htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1 bg-gray-800 border-none" />
            </div>
            <div className="flex flex-row gap-1">
              <Input type="checkbox" id="rememberMe" className="w-4 h-auto rounded-md"></Input>
              <Label htmlFor="rememberMe" className="text-gray-300">Remember Me</Label>
            </div>
            <Button className="w-full py-6 rounded-full cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-80">
              Sign In
            </Button>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">Create One</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
