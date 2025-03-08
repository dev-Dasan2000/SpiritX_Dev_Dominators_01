import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <Card className="w-[350px] bg-gray-800 text-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Welcome Back</CardTitle>
          <p className="text-center text-gray-400 text-sm">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label className="text-gray-300" htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username" className="mt-1" />
            </div>
            <div>
              <Label className="text-gray-300" htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-80 cursor-pointer">
              Sign In
            </Button>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-400 hover:underline">Create One</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}