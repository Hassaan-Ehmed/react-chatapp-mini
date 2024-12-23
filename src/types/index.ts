export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'voice';
  senderId: string;
  receiverId: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
}

export interface Chat {
  id: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
}