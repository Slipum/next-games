'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function useGuestAuth() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedName = Cookies.get('guest_name');
    const savedAvatar = Cookies.get('guest_avatar');
    if (savedName) setName(savedName);
    if (savedAvatar) setAvatar(savedAvatar);
    setIsReady(true);
  }, []);

  const login = () => {
    if (!name || !avatar) return;
    Cookies.set('guest_name', name, { expires: 7 });
    Cookies.set('guest_avatar', avatar, { expires: 7 });
    // TODO: после успешного «логина» редиректим в лоби
  };

  return { name, setName, avatar, setAvatar, login, isReady };
}
