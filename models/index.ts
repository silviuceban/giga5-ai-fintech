export interface Message {
  sender: "user" | "model";
  message: string;
  date: string;
}

export interface UserData {
  userId: string;
  messages: Message[];
}
