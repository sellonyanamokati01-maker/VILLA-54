import { useState } from 'react';
import type { RoomOption } from '../types';

interface RoomCardProps {
  room: RoomOption;
}

export default function RoomCard({ room }: RoomCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`room-card${flipped ? ' active' : ''}`}
      onClick={() => setFlipped((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((prev) => !prev);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="room-inner">
        <div className="room-face front">
          <h3>{room.title}</h3>
          <p>{room.subtitle}</p>
        </div>
        <div className="room-face back">
          <img src={room.image} alt={room.title} />
          <div className="room-features">
            <ul>
              {room.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
