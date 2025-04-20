export interface ChatMessage {
    id: string;
    sender: 'user' | 'bot'; // Map 'left' to 'bot' and 'right' to 'user'
    content: string;
    timestamp: Date;
    type: 'text' | 'image' | 'file' | 'booking';
    images?: string[];
    file?: {
      name: string;
      size: string;
      url: string;
    };
    avatar?: string;
  }