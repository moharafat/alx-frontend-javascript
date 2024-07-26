import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const d = new ClassRoom(19);
  const f = new ClassRoom(20);
  const g = new ClassRoom(34);
  return [d, f, g];
}
