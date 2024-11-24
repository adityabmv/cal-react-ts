import { Component } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';


interface LoginProps {}
interface LoginState {}

class LoginPage extends Component<LoginProps, LoginState> {
  render() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>

          {/* Form Section */}
          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <Label className="block mb-1 font-semibold text-sm" htmlFor="email">
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <Label className="block mb-1 font-semibold text-sm" htmlFor="password">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                className="w-full border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <Checkbox id="remember" className="mr-2" />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 focus:outline-none"
              >
                Login
              </Button>
            </div>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Signup Link */}
          <div className="text-center mt-2">
            <p className="text-sm">
              Don’t have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
