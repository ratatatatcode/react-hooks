'use client';

import FormContainer from '@/components/form/form-container';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ExampleForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [birthdate, setBirthdate] = useState(''); // max attribute (prevent future dates)
  const [gender, setGender] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // regex
    // confirm password
    // setCustomValidity
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // regex
    // setCustomValidity
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <FormContainer title="Form Container" desc="Describe your container">
        {/* children - labels/inputs (consider making these as your component) */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <div>
              <Label htmlFor="firstName" className="text-sm">
                First Name
              </Label>
              <Input type="text" id="firstName" required />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm">
                Last Name
              </Label>
              <Input type="text" id="lastName" required />
            </div>
          </div>
          <div>
            <Label htmlFor="username" className="text-sm">
              Username
            </Label>
            <Input type="text" id="username" required />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <Input type="password" id="password" required />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
            </Label>
            <Input type="password" id="confirmPassword" required />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input type="email" id="email" required />
          </div>
          <div>
            <Label htmlFor="contactNo" className="text-sm">
              Contact Number
            </Label>
            <Input type="text" id="contactNo" required />
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-full">
              <Label htmlFor="birthdate" className="text-sm">
                Birthdate
              </Label>
              <Input type="date" id="birthdate" required />
            </div>
            <div>
              <Label htmlFor="gender" className="text-sm">
                Gender
              </Label>
              <Select required>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Gender" id="gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-2 w-full" type="submit">
            Click Me
          </Button>
        </div>
      </FormContainer>
    </section>
  );
}
