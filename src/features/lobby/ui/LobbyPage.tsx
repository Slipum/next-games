'use client';

import { useGuestAuth } from '@/features/auth/guest/model/useGuestAuth';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui';
import { v4 as uuidv4 } from 'uuid';

interface LobbyPageProps {
  lobbyId: string;
}

interface Player {
  id: string;
  name: string;
  avatar: string;
}

export function LobbyPage({ lobbyId }: LobbyPageProps) {
  const { name, avatar } = useGuestAuth();
  const [players, setPlayers] = useState<Player[]>([]);

  // Имитация входа игрока и добавления в localStorage
  useEffect(() => {
    if (!name || !avatar) return;

    const playerId = uuidv4();
    const newPlayer = { id: playerId, name, avatar };

    const storageKey = `lobby-${lobbyId}-players`;
    const saved = localStorage.getItem(storageKey);
    const playerList: Player[] = saved ? JSON.parse(saved) : [];

    const updatedList = [...playerList, newPlayer];
    localStorage.setItem(storageKey, JSON.stringify(updatedList));
    setPlayers(updatedList);

    // Очистка при выходе со страницы
    return () => {
      const remaining = updatedList.filter((p) => p.id !== playerId);
      localStorage.setItem(storageKey, JSON.stringify(remaining));
    };
  }, [name, avatar, lobbyId]);

  return (
    <div className="space-y-4 p-8">
      <h1 className="text-3xl font-bold">Лобби #{lobbyId}</h1>
      <h2 className="text-xl font-medium">Игроки:</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex flex-col items-center space-y-2 rounded-md bg-muted p-4"
          >
            <Avatar className="size-16">
              <AvatarImage src={player.avatar} />
              <AvatarFallback>{player.name[0]}</AvatarFallback>
            </Avatar>
            <span>{player.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
