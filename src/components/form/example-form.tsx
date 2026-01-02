import FormContainer from '@/components/form/form-container';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ExampleForm() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <FormContainer title="Form Container" desc="Describe your container">
        {/* children - labels/inputs (consider making the these as your component) */}
        <div className="flex flex-col gap-2">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" />
          </div>
        </div>
      </FormContainer>
    </section>
  );
}
