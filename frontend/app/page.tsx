"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [userNameText, setUserNameText] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  const isReturningUser = searchParams.get("welcomeBack") === "true";

  useEffect(() => {
    handleUsername();
  }, [username]);

  useEffect(() => {
    handlePassword();
  }, [password]);

  function handleUsername() {
    if (username.length > 0) {
      if (username.length < 8) {
        setUsernameError("Username must be at least 8 characters long");
        setUserNameText("");
      }
      else {
        setUsernameError("");
        setUserNameText("Username is valid");
      }
    }
  }

  function handlePassword() {
    if (password.length > 0) {
      if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters long");
        setPasswordText("");
      }
      else if (!/[A-Z]/.test(password)) {
        setPasswordError("Password must include at least one uppercase letter");
        setPasswordText("");
      }
      else if (!/[0-9]/.test(password)) {
        setPasswordError("Password must include at least one number");
        setPasswordText("");
      }
      else if (!/[!@#$%^&*(),.?":{}|<>_-]/.test(password)) {
        setPasswordError("Password must include at least one special character");
        setPasswordText("");
      }
      else {
        setPasswordError("");
        setPasswordText("Password is valid");
      }
    }
  }


  // Define form with react-hook-form
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false
    }
  });

<<<<<<< Updated upstream
  // Handle form submission on click
  function onSubmit(data : any) {
    console.log(data);
    // Add your authentication logic here
=======
  // Handle form submission
  function onSubmit() {
    console.log(username, password, rememberMe);

>>>>>>> Stashed changes
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
                  <>
                    <FormItem className="relative">
                      <FormLabel className="text-gray-300">Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter username"
                          className="mt-1 bg-gray-800 border-none"
                          {...field}
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                          value={username}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                    <div className="h-2 flex items-center">
                      {usernameError && <p className="text-red-400">{usernameError}</p>}
                      {userNameText && <p className="text-green-400">{userNameText}</p>}
                    </div>
                  </>
                )}

              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel className="text-gray-300">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="mt-1 bg-gray-800 border-none"
                          {...field}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          value={password}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                    <div className="h-2 flex items-center">
                      {passwordError && <p className="text-red-400">{passwordError}</p>}
                      {passwordText && <p className="text-green-400">{passwordText}</p>}
                    </div>
                  </>

                )}
              />
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0 justify-center">
                    <FormControl>
                      <Checkbox
                        checked={rememberMe}
                        onCheckedChange={()=>{
                          setRememberMe(!rememberMe);}}
                      />
                    </FormControl>
                    <FormLabel className="text-gray-300 cursor-pointer justify-center">
                      Remember Me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <div className="h-2 flex items-center">
                {authError && <p className="text-red-400">{authError}</p>}
              </div>
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
