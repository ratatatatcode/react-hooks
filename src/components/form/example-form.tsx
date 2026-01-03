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

export default function ExampleForm() {
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
              <Input type="text" id="firstName" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm">
                Last Name
              </Label>
              <Input type="text" id="lastName" />
            </div>
          </div>
          <div>
            <Label htmlFor="username" className="text-sm">
              Username
            </Label>
            <Input type="text" id="username" />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <Input type="password" id="password" />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
            </Label>
            <Input type="password" id="confirmPassword" />
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <Label htmlFor="birthdate" className="text-sm">
                Confirm Password
              </Label>
              <Input type="date" id="birthdate" />
            </div>
            <div>
              <Label htmlFor="gender" className="text-sm">
                Gender
              </Label>
              <Select>
                <SelectTrigger className="w-[100px]">
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
