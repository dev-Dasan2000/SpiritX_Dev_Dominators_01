"use client"

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import Link from "next/link";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const isReturningUser = searchParams.get("welcomeBack") === "true";

  // Define form with react-hook-form
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false
    }
  });

  // Handle form submission on click
  function onSubmit(data) {
    console.log(data);
    // Add your authentication logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent mx-4">
      <Card className="w-full max-w-sm bg-gray-700 text-white shadow-lg rounded-lg border-none">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {isReturningUser ? "Welcome Back" : "Welcome"}
          </CardTitle>
          <p className="text-center text-gray-400 text-sm">
            Sign in to your account
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
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
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0 justify-center">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-gray-300 cursor-pointer justify-center">
                      Remember Me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full py-6 rounded-full cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-80"
              >
                Sign In
              </Button>
            </form>
          </Form>
          <p className="text-center text-gray-400 text-sm mt-4">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">Create One</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
