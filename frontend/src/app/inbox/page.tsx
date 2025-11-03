import Conversation from "@/components/inbox/Conversation";

export default function InboxPage() {
  return (
    <div>
      <h1 className="text-2xl font-medium mb-6">Inbox</h1>
      <div className="flex flex-col gap-4">
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </div>
  );
}
