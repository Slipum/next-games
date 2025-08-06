import { LobbyPage } from '@/features/lobby/ui/LobbyPage';

interface LobbyPageParams {
  params: { id: string };
}

export default function LobbyRoute({ params }: LobbyPageParams) {
  return <LobbyPage lobbyId={params.id} />;
}
