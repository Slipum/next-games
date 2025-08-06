'use client';
import { classNames } from '@/shared/lib/classNames';
import Image from 'next/image';

interface AvatarPickerProps {
  selected: string | null;
  onSelect: (path: string) => void;
}

export function AvatarPicker({ selected, onSelect }: AvatarPickerProps) {
  const avatars = Array.from({ length: 8 }, (_, i) => `/avatars/ava${i + 1}.jpg`);

  return (
    <div className="grid grid-cols-4 gap-4">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt="avatar"
          width={1024} // TODO: можно изменять качество подгружаемой картинки
          height={1024}
          className={classNames(
            'w-16 h-16 rounded-full cursor-pointer hover:ring-2',
            selected === src && 'ring-4 ring-primary',
          )}
          onClick={() => onSelect(src)}
        />
      ))}
    </div>
  );
}
