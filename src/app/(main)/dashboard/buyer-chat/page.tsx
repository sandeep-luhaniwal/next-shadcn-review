"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Paperclip,
  Send,
  MoreVertical,
  Loader2,
  Check,
  CheckCheck,
  Smile,
  ArrowLeft,
} from "lucide-react";
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

// Dummy chat data
const chats = [
  { id: "seller1", name: "Seller Support", avatar: "https://i.pravatar.cc/100?img=12", last: "How can I help you today?", online: true, responseTime: "~2 min" },
  { id: "seller2", name: "Blue Store", avatar: "https://i.pravatar.cc/100?img=8", last: "Your order has been shipped 🚚", online: false, responseTime: "~1 hour" },
  { id: "seller3", name: "Tech Hub", avatar: "https://i.pravatar.cc/100?img=20", last: "We restocked the M-size jacket!", online: true, responseTime: "~5 min" },
];

// Dummy messages data
const messagesData: { [key: string]: any[] } = {
  seller1: [
    { id: "m1", author: "them", text: "Hi! Welcome 👋 How can I help you today?", time: "14:59" },
    { id: "m2", author: "me", text: "I’m interested in the blue jacket, size M.", time: "15:01", status: "seen" },
    { id: "m3", author: "them", text: "Great choice! It’s in stock. Would you like COD or prepaid?", time: "15:02" },
  ],
  seller2: [
    { id: "m4", author: "them", text: "Your order #12345 has been shipped! 🚚", time: "10:30" },
    { id: "m5", author: "me", text: "Awesome, thanks for the update!", time: "10:32", status: "delivered" },
  ],
  seller3: [
    { id: "m6", author: "them", text: "Good news! The M-size jacket you were interested in is back in stock.", time: "yesterday" },
  ],
};

export default function ChatLayout() {
  const [activeChat, setActiveChat] = useState(chats[0].id);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleChatSelect = (chatId: string) => {
    setActiveChat(chatId);
    setIsChatVisible(true);
  };

  const selectedChat = chats.find(c => c.id === activeChat);

  return (
    <TooltipProvider>
      <div className="flex h-[calc(100vh-82px)] md:h-[calc(100vh-112px)] w-full overflow-hidden bg-background">
        {/* Chat List */}
        <div className={`w-full lg:w-[42%] xl:w-[30%] 2xl:w-[27%] lg:flex flex-col bg-muted/30 p-3 lg:ps-0 ${isChatVisible ? 'hidden' : 'flex'}`}>
          <h2 className="mb-3 text-lg font-semibold">Chats</h2>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-4">
              {chats.map((chat) => (
                <Button
                  key={chat.id}
                  variant={chat.id === activeChat ? "secondary" : "ghost"}
                  className="flex cursor-pointer w-full items-center justify-start gap-3 rounded-xl p-2.5 h-auto"
                  onClick={() => handleChatSelect(chat.id)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={chat.avatar} />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-between w-full gap-5">
                    <div className="flex flex-col w-full max-w-max items-start">
                      <span className="truncate text-sm font-medium">{chat.name}</span>
                      <span className="truncate text-xs text-muted-foreground max-w-[150px]">{chat.last}</span>
                    </div>
                    <div className="flex w-full max-w-max justify-end">
                      <span className="truncate text-xs text-black max-w-[150px]">3.14 PM</span>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className={`w-full lg:w-[58%] xl:w-[70%] 2xl:w-[73%] flex-col h-full ${isChatVisible ? 'flex' : 'hidden'} lg:flex`}>
          {selectedChat && <BuyerChat chat={selectedChat} onBack={() => setIsChatVisible(false)} />}
        </div>
      </div>
    </TooltipProvider>
  );
}

function BuyerChat({ chat, onBack }: { chat: typeof chats[0], onBack: () => void }) {
  type Msg = {
    id: string;
    author: "me" | "them";
    text: string;
    time: string;
    status?: "sent" | "delivered" | "seen";
  };

  const [messages, setMessages] = useState<Msg[]>(messagesData[chat.id] || []);
  const [value, setValue] = useState("");
  const [typing, setTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const endRef = useRef<HTMLDivElement | null>(null);
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);
  const emojiButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMessages(messagesData[chat.id] || []);
  }, [chat.id]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node) &&
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(event.target as Node)
      ) {
        setShowEmoji(false);
      }
    }
    if (showEmoji) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmoji]);

  function timeNow() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }

  function handleSend() {
    const text = value.trim();
    if (!text) return;

    const newMsg: Msg = { id: crypto.randomUUID(), author: "me", text, time: timeNow(), status: "sent" };
    setMessages((prev) => [...prev, newMsg]);
    setValue("");

    setTimeout(() => setMessages((prev) => prev.map((m) => (m.id === newMsg.id ? { ...m, status: "delivered" } : m))), 400);
    setTimeout(() => {
      setMessages((prev) => prev.map((m) => (m.id === newMsg.id ? { ...m, status: "seen" } : m)));
      setTyping(true);
    }, 900);
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), author: "them", text: "Noted! I can apply a 5% buyer discount. Proceed?", time: timeNow() }]);
      setTyping(false);
    }, 1600);
  }

  function StatusIcon({ status }: { status?: Msg["status"] }) {
    if (status === "sent") return <Check className="h-3.5 w-3.5" />;
    if (status === "delivered") return <CheckCheck className="h-3.5 w-3.5" />;
    if (status === "seen") return <CheckCheck className="h-3.5 w-3.5 text-blue-500" />;
    return null;
  }

  return (
    <Card className="flex flex-col h-full !gap-4 !py-3 rounded-none border-l">
      <CardHeader className="flex flex-row items-center !p-3 !pt-0 justify-between border-b shrink-0">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarImage src={chat.avatar} alt={chat.name} />
            <AvatarFallback>{chat.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">{chat.name}</CardTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {chat.online ? (
                <Badge variant="secondary" className="rounded-full px-2 py-0 bg-green-500 text-white">online</Badge>
              ) : (
                <Badge variant="secondary" className="rounded-full px-2 py-0">offline</Badge>
              )}
              <span>Time: {chat.responseTime}</span>
            </div>
          </div>
        </div>
        <Tooltip>
          <TooltipTrigger asChild><Button size="icon" variant="ghost" className="rounded-2xl"><MoreVertical className="h-5 w-5" /></Button></TooltipTrigger>
          <TooltipContent>More</TooltipContent>
        </Tooltip>
      </CardHeader>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto flex w-full flex-col gap-3">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.author === "me" ? "justify-end" : "justify-start"}`}>
              {m.author === "them" && <Avatar className="mr-2 h-8 w-8 self-end"><AvatarImage src={chat.avatar} /><AvatarFallback>{chat.name[0]}</AvatarFallback></Avatar>}
              <div className={`relative max-w-xs rounded-2xl px-3 py-2 text-sm shadow-sm sm:max-w-sm ${m.author === "me" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                <div className={`mt-1 flex items-center gap-1 text-[10px] justify-end ${m.author === "me" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  <span>{m.time}</span>
                  {m.author === "me" && <StatusIcon status={m.status} />}
                </div>
              </div>
              {m.author === "me" && <Avatar className="ml-2 h-8 w-8 self-end"><AvatarImage src="https://i.pravatar.cc/100?img=32" /><AvatarFallback>ME</AvatarFallback></Avatar>}
            </div>
          ))}
          {typing && (
            <div className="flex justify-start"><div className="flex items-center gap-2"><Avatar className="mr-2 h-8 w-8 self-end"><AvatarImage src={chat.avatar} /><AvatarFallback>{chat.name[0]}</AvatarFallback></Avatar><div className="rounded-2xl bg-muted px-3 py-2 text-sm shadow-sm"><div className="flex items-center gap-1"><Loader2 className="h-4 w-4 animate-spin" /><span>typing…</span></div></div></div></div>
          )}
          <div ref={endRef} />
        </div>
      </div>

      <div className="shrink-0 border-t p-3 pb-0 flex items-end gap-2 relative">
        <div className="flex w-full items-center gap-2 rounded-2xl border bg-background px-3 py-2 shadow-sm">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button ref={emojiButtonRef} type="button" variant="ghost" size="icon" className="rounded-2xl" onClick={() => setShowEmoji(!showEmoji)}>
                <Smile className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Emoji</TooltipContent>
          </Tooltip>
          <Input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }} placeholder="Write a message…" className="border-0 focus-visible:ring-0 h-auto py-0" />
          <Tooltip>
            <TooltipTrigger asChild><Button type="button" variant="ghost" size="icon" className="rounded-2xl"><Paperclip className="h-5 w-5" /></Button></TooltipTrigger>
            <TooltipContent>Attach file</TooltipContent>
          </Tooltip>
          <Button onClick={handleSend} size="sm" className="rounded-2xl cursor-pointer"><Send className="mr-1 h-4 w-4" />Send</Button>
        </div>
        {showEmoji && (
          <div ref={emojiPickerRef} className="absolute bottom-16 left-0 z-50 rounded-xl border bg-background p-2 shadow-lg">
            <Picker onEmojiClick={(emojiData) => setValue((prev) => prev + emojiData.emoji)} />
          </div>
        )}
      </div>
    </Card>
  );
}