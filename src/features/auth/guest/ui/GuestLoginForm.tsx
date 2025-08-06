'use client';
import { useRouter } from 'next/navigation';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { AvatarPicker } from './AvatarPicker';
import { useGuestAuth } from '../model/useGuestAuth';

export function GuestLoginForm() {
  const { name, setName, avatar, setAvatar, login, isReady } = useGuestAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push(`/lobby/new`);
  };

  if (!isReady) return null;

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 p-4">
      <div>
        <label className="mb-1 block">Ваше имя</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div>
        <label className="mb-1 block">Выберите аватар</label>
        <AvatarPicker selected={avatar} onSelect={setAvatar} />
      </div>

      <Button type="submit" disabled={!name || !avatar} className="w-full">
        Войти как гость
      </Button>
    </form>
  );
}
