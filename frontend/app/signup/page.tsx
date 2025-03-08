"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import Link from "next/link";

export default function SignupForm() {
  // State for real-time feedback
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);

  // Define form with react hook form
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Watch password field value
  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  // Simulated username availability check
  const handleUsernameChange = (value: string) => {
    if (value.length > 8) {
      setIsAvailable(value.length > 8);
    } else {
      setIsAvailable(null);
    }
    return value;
  };

  // Password strength validation
  const handlePasswordChange = (value: string) => {
    if (value.length > 8) {
      setPasswordStrength("Strong password");
    } else if (value.length > 4) {
      setPasswordStrength("Weak password");
    } else {
      setPasswordStrength("");
    }

    // Update password match status when password changes
    if (confirmPassword) {
      setPasswordMatch(value === confirmPassword);
    }
    
    return value;
  };

  // Password match validation
  const handleConfirmPasswordChange = (value: string) => {
    if (value.length > 8) {
      setPasswordMatch(password === value);
    } else {
      setPasswordMatch(null);
    }
    return value;
  };

  // Handle form submission
  const onSubmit = async (formData: any) => {
    const { username, password } = formData;

    const response = await fetch("../api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    const responseData = await response.json();
    console.error(responseData.message || responseData.error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent mx-4">
      <Card className="w-full max-w-sm bg-gray-700 text-white shadow-lg rounded-lg border-none">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Create Account</CardTitle>
          <p className="text-center text-gray-400 text-sm">Join our exclusive platform</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Username</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter username" 
                        className="mt-1 bg-gray-800 border-none" 
                        {...field} 
                        onChange={(e) => {
                          field.onChange(handleUsernameChange(e.target.value));
                        }}
                      />
                    </FormControl>
                    {isAvailable !== null && (
                      <FormDescription 
                        className={`text-sm ${isAvailable ? "text-green-400" : "text-red-400"}`}
                      >
                        {isAvailable ? "Username is valid" : "Username is invalid (must me at least 8 charaters long)"}
                      </FormDescription>
                    )}
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="••••••••" 
                        className="mt-1 bg-gray-800 border-none" 
                        {...field} 
                        onChange={(e) => {
                          field.onChange(handlePasswordChange(e.target.value));
                        }}
                      />
                    </FormControl>
                    {passwordStrength && (
                      <FormDescription className="text-sm text-green-400">
                        {passwordStrength}
                      </FormDescription>
                    )}
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Confirm Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="••••••••" 
                        className="mt-1 bg-gray-800 border-none" 
                        {...field} 
                        onChange={(e) => {
                          field.onChange(handleConfirmPasswordChange(e.target.value));
                        }}
                      />
                    </FormControl>
                    {passwordMatch !== null && (
                      <FormDescription 
                        className={`text-sm ${passwordMatch ? "text-green-400" : "text-red-400"}`}
                      >
                        {passwordMatch ? "Passwords match" : "Passwords do not match"}
                      </FormDescription>
                    )}
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Signup Button */}
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r py-6 rounded-full from-purple-500 to-blue-500 text-white hover:opacity-80"
              >
                Create Account
              </Button>
            </form>
          </Form>

          {/* Already have an account? */}
          <p className="text-center text-gray-400 text-sm mt-4">
            Already have an account?{" "}
            <Link href="/" className="text-blue-400 hover:underline">Sign In</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
