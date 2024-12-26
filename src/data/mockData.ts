import type { User, Chat, Message } from '@/types';
import   profileDefault  from '../images/default-profile.png';

export const exploreImage = "https://cdn3d.iconscout.com/3d/premium/thumb/internet-search-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-web-engine-browser-seo-optimisation-pack-icons-5740290.png?f=webp";

export const currentUser: User = {
  id: '1',
  name: 'User',
  email: 'user@example.com',
  avatar: profileDefault,
  bio: 'Hey there I\'m using Chitchat !',
  isOnline: true,
};

export const mockChats: Chat[] = [
  {
    id: '1',
    participants: [
      currentUser,
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        isOnline: true,
      },
    ],

    lastMessage: {
      id: '1',
      content: 'Hey, how are you?',
      type: 'text',
      senderId: '2',
      receiverId: '1',
      timestamp: new Date(),
      status: 'delivered',
    },
    unreadCount: 2,
  },

  // {
  //   id: '2',
  //   participants: [
  //     currentUser,
  //     {
  //       id: '3',
  //       name: 'Alex Johnson',
  //       email: 'alex@example.com',
  //       avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //       isOnline: false,
  //     },
  //   ],
  //   lastMessage: {
  //     id: '2',
  //     content: 'See you tomorrow!',
  //     type: 'text',
  //     senderId: '1',
  //     receiverId: '3',
  //     timestamp: new Date(Date.now() - 1000 * 60 * 30),
  //     status: 'read',
  //   },
  //   unreadCount: 0,
  // },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Hey, how are you?',
    type: 'text',
    senderId: '2',
    receiverId: '1',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    status: 'read',
  },
  {
    id: '2',
    content: 'I\'m good, thanks! How about you?',
    type: 'text',
    senderId: '1',
    receiverId: '2',
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
    status: 'read',
  },
  // {
  //   id: '3',
  //   content: 'Pretty good! Working on some new projects.',
  //   type: 'text',
  //   senderId: '2',
  //   receiverId: '1',
  //   timestamp: new Date(Date.now() - 1000 * 60 * 3),
  //   status: 'read',
  // },
];