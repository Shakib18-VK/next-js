
"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import {
  RefreshCcw,
  Loader2,
  Copy,
  Inbox,
  LayoutDashboard,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import MessageCard from "@/components/MessageCrads";
import type { Apiresponse } from "@/types/ApiResponse";
import { AcceptMessageSchema } from "@/schema/acceptedmessageSchem";

type MessageType = {
  _id: string;
  content: string;
  createdAt: string | Date;
};

type AcceptMessageForm = z.infer<typeof AcceptMessageSchema>;

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSwitchLoading, setIsSwitchLoading] = useState(false);

  const form = useForm<AcceptMessageForm>({
    resolver: zodResolver(AcceptMessageSchema),
    defaultValues: {
      acceptedMessage: false,
    },
  });

  const { watch, setValue } = form;
  const acceptMessages = watch("acceptedMessage");

  const fetchAcceptMessageStatus = useCallback(async () => {
    setIsSwitchLoading(true);

    try {
      const res = await axios.get<Apiresponse>(
        "/api/accepted-message-get-chk"
      );

      setValue(
        "acceptedMessage",
        res.data.isAcceptingMessages ?? false
      );
    } catch (error) {
      const axiosError = error as AxiosError<Apiresponse>;

      toast.error(
        axiosError.response?.data?.message ??
          "Failed to fetch settings"
      );
    } finally {
      setIsSwitchLoading(false);
    }
  }, [setValue]);

  const fetchMessages = useCallback(async (refresh = false) => {
    setIsLoading(true);

    try {
      const res = await axios.get<Apiresponse>("/api/get-message");

      // API response should contain string IDs.
      const fetchedMessages: MessageType[] = (
        res.data.messages ?? []
      ).map((message) => ({
        ...message,
        _id: String(message._id),
        createdAt: message.createdAt,
      }));

      setMessages(fetchedMessages);

      if (refresh) {
        toast.success("Refreshed messages");
      }
    } catch (error) {
      const axiosError = error as AxiosError<Apiresponse>;

      toast.error(
        axiosError.response?.data?.message ??
          "Failed to load messages"
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleDeleteMessage = (id: string) => {
    setMessages((previousMessages) =>
      previousMessages.filter((message) => message._id !== id)
    );
  };

  const handleSwitchChange = async (checked: boolean) => {
    setIsSwitchLoading(true);

    try {
      const res = await axios.post<Apiresponse>(
        "/api/accepted-messages",
        {
          acceptMessages: checked,
        }
      );

      setValue("acceptedMessage", checked);

      toast.success(
        res.data.message ?? "Message settings updated"
      );
    } catch (error) {
      const axiosError = error as AxiosError<Apiresponse>;

      toast.error(
        axiosError.response?.data?.message ??
          "Failed to update status"
      );
    } finally {
      setIsSwitchLoading(false);
    }
  };

  useEffect(() => {
    if (!session?.user) return;

    void fetchAcceptMessageStatus();
    void fetchMessages();
  }, [session?.user, fetchAcceptMessageStatus, fetchMessages]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="flex h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Access Denied</h2>
          <p className="text-muted-foreground">
            Please login to view your dashboard.
          </p>
        </div>
      </div>
    );
  }

  const username = session.user.username;

  const profileUrl =
    typeof window !== "undefined" && username
      ? `${window.location.origin}/u/${username}`
      : "";

  const copyToClipboard = async () => {
    if (!profileUrl) {
      toast.error("Profile link is not available");
      return;
    }

    try {
      await navigator.clipboard.writeText(profileUrl);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Unable to copy link");
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 text-2xl font-bold sm:text-4xl">
          <LayoutDashboard className="h-7 w-7 sm:h-8 sm:w-8" />
          User Dashboard
        </h1>

        <Button
          variant="outline"
          size="icon"
          onClick={() => void fetchMessages(true)}
          disabled={isLoading}
          aria-label="Refresh messages"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCcw className="h-4 w-4" />
          )}
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Unique Feedback Link</CardTitle>
          <CardDescription>
            Share this link to receive anonymous messages
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 sm:flex-row">
          <input
            readOnly
            value={profileUrl}
            aria-label="Your feedback link"
            className="min-w-0 flex-1 rounded-md border bg-background px-3 py-2"
          />

          <Button
            onClick={() => void copyToClipboard()}
            disabled={!profileUrl}
            className="shrink-0"
          >
            <Copy className="mr-1 h-4 w-4" />
            Copy
          </Button>
        </CardContent>
      </Card>

      <div className="mb-6 flex items-center justify-between gap-4 rounded-lg border p-4">
        <div>
          <h3 className="font-semibold">Accepting Messages</h3>
          <p className="text-sm text-muted-foreground">
            {acceptMessages
              ? "People can send you messages."
              : "Not accepting new messages."}
          </p>
        </div>

        <Switch
          checked={!!acceptMessages}
          disabled={isSwitchLoading}
          onCheckedChange={handleSwitchChange}
          aria-label="Accept messages"
        />
      </div>

      <Separator className="my-6" />

      <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
        <Inbox className="h-6 w-6" />
        Inbox
      </h2>

      {isLoading && messages.length === 0 ? (
        <div className="flex justify-center py-10">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      ) : messages.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {messages.map((message) => (
            <MessageCard
              key={message._id}
              message={message}
              onMessageDelete={handleDeleteMessage}
            />
          ))}
        </div>
      ) : (
        <p className="py-6 text-center text-muted-foreground">
          No messages yet
        </p>
      )}
    </div>
  );
}
