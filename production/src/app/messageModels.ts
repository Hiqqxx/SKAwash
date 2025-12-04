export interface Message {
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
}
