import { GuestLoginForm } from '@/features/auth/guest/ui/GuestLoginForm';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <GuestLoginForm />
    </main>
  );
}
