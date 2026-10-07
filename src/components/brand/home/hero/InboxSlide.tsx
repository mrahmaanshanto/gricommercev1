"use client";

import { CheckCheck, CircleCheck, Pencil, Search, ShoppingBag, Sparkles, Tag } from "lucide-react";
import { cn } from "@/lib/cn";
import { AppFrame, Appear, Avatar, Card, ChannelLogo, Chip, FloatPanel, Ping, TypingDots, type Channel, type SlideProps } from "./shared";

/**
 * Beats: 1 list · 2 new messages land · 3 the comment · 4 GridAI drafting ·
 * 5 draft ready · 6 sent · 7 customer replies in Messenger · 8 order created.
 */
export const INBOX_CUES = [300, 900, 1600, 2500, 3900, 5500, 6900, 8300];
export const INBOX_DURATION = 11000;

const CONVERSATIONS: { name: string; channel: Channel; text: string; tag?: string; tone?: "royal" | "warning" | "success" | "neutral"; unread?: number; arrives?: number }[] = [
  { name: "Farzana Karim", channel: "facebook", text: "Price koto? 3 ta nile discount ache?", tag: "Price ask", tone: "royal", unread: 1 },
  { name: "Arafat Hossain", channel: "messenger", text: "Redmi Note 13 er warranty koto din?", tag: "New lead", tone: "royal", unread: 1, arrives: 2 },
  { name: "@rumana.s", channel: "instagram", text: "Size chart ta diben? Kameez M size…", unread: 2, arrives: 2 },
  { name: "Rakib Uddin", channel: "whatsapp", text: "TrxID 8FJ2K4LP · ৳3,520", tag: "Payment claim", tone: "success", unread: 1 },
  { name: "@tanvir.rides", channel: "tiktok", text: "Price koto vai? Link den. Earbuds…", tag: "New lead", tone: "royal", unread: 1 },
  { name: "Karim Saheb", channel: "web", text: "Chattogram e delivery charge koto?", tone: "neutral" },
];

const CHANNEL_COUNTS: { channel: Channel; count: number }[] = [
  { channel: "messenger", count: 7 },
  { channel: "whatsapp", count: 4 },
  { channel: "instagram", count: 3 },
  { channel: "facebook", count: 22 },
];

export function InboxSlide({ beat, compact, narrow }: SlideProps) {
  const screen = (
    <AppFrame path="inbox" active="inbox" compact={compact} className="absolute inset-0">
      <div className="flex h-full">
        {/* Conversation list */}
        {!compact && (
          <div className={cn("flex shrink-0 flex-col border-r border-gc-line bg-white", narrow ? "w-[214px]" : "w-[268px]")}>
            <div className="flex items-center gap-1 whitespace-nowrap px-3 pt-3 text-[12px]">
              <span className="rounded-md bg-gc-royal-10 px-2 py-1 font-semibold text-gc-royal">Chats 7</span>
              <span className="px-2 py-1 text-gc-ink-50">Comments 22</span>
              {!narrow && <span className="px-2 py-1 text-gc-ink-50">Reviews</span>}
            </div>
            <div className="mx-3 mt-2 flex h-8 items-center gap-2 rounded-lg bg-[#F6F7FB] px-2.5 text-[12px] text-gc-ink-30 ring-1 ring-gc-line">
              <Search className="size-3.5" /> Search name, phone
            </div>
            <ul className="mt-2 flex-1 overflow-hidden">
              {CONVERSATIONS.map((c, i) => (
                <li key={c.name}>
                  <Appear
                    show={beat >= (c.arrives ?? 1)}
                    from="left"
                    delay={c.arrives ? i * 0.12 : i * 0.05}
                    className={cn(
                      "flex gap-2.5 border-b border-[#F1F3F7] px-3 py-2.5",
                      i === 0 && "border-l-[3px] border-l-gc-royal bg-gc-royal-10/60",
                    )}
                  >
                    <span className="relative">
                      <Avatar name={c.name.replace("@", "")} size={32} tone={i} />
                      <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-white p-[1.5px]">
                        <ChannelLogo channel={c.channel} size={12} />
                      </span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-[12.5px] font-semibold text-gc-ink">{c.name}</p>
                        {c.unread && (
                          <span className="grid size-[18px] place-items-center rounded-full bg-gc-royal text-[10px] font-semibold text-white">
                            {c.unread}
                          </span>
                        )}
                      </div>
                      <p className="truncate text-[11.5px] text-gc-ink-50">{c.text}</p>
                      {c.tag && (
                        <Chip tone={c.tone} className="mt-1 px-1.5 py-[2px] text-[10px]">
                          {c.tag}
                        </Chip>
                      )}
                    </div>
                  </Appear>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Thread */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-3 border-b border-gc-line bg-white px-4 py-2.5">
            <Avatar name="Farzana Karim" size={34} tone={0} />
            <div className="min-w-0 flex-1">
              <p className="text-[13.5px] font-semibold text-gc-ink">Farzana Karim</p>
              <p className="flex items-center gap-1.5 text-[11.5px] text-gc-ink-50">
                <ChannelLogo channel={beat >= 7 ? "messenger" : "facebook"} size={12} />
                {beat >= 7 ? "Messenger · moved from a comment" : "Comment on your “Eid drop” post"}
              </p>
            </div>
            <Chip tone="royal">
              <Tag className="size-3" /> Order intent
            </Chip>
          </div>

          <div className="flex flex-1 flex-col gap-3 overflow-hidden px-5 py-4">
            <p className="self-center rounded-full bg-white px-2.5 py-0.5 text-[10.5px] text-gc-ink-50 ring-1 ring-gc-line">Today · 1:22 PM</p>

            {/* Customer comment */}
            <Appear show={beat >= 3} from="left" className="flex max-w-[78%] items-end gap-2">
              <Avatar name="Farzana Karim" size={26} tone={0} />
              <div>
                <div className="rounded-[14px] rounded-bl-[4px] bg-white px-3.5 py-2 text-[13px] text-gc-ink ring-1 ring-gc-line">
                  Redmi Note 13 er price koto? 3 ta nile discount ache?
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-[10.5px] text-gc-ink-50">
                  <ChannelLogo channel="facebook" size={11} /> Public comment · 19m
                </p>
              </div>
            </Appear>

            {/* GridAI drafting → draft → sent */}
            {beat >= 4 && beat < 5 && (
              <Appear show from="right" className="flex items-center gap-2 self-end rounded-full bg-[#F1ECFE] px-3 py-1.5 text-[12px] font-medium text-[#6D3FD9]">
                <Sparkles className="size-3.5" /> GridAI is drafting from your price list
                <TypingDots />
              </Appear>
            )}

            {beat >= 5 && (
              <Appear show from="right" className="flex max-w-[82%] flex-col items-end self-end">
                <div
                  className={cn(
                    "rounded-[14px] rounded-br-[4px] px-3.5 py-2.5 text-[13px] leading-snug",
                    beat >= 6 ? "bg-gc-royal text-white" : "bg-white text-gc-ink ring-2 ring-[#C9B5FA]",
                  )}
                >
                  {beat < 6 && (
                    <p className="mb-1 flex items-center gap-1 text-[10.5px] font-semibold text-[#6D3FD9]">
                      <Sparkles className="size-3" /> GridAI draft
                    </p>
                  )}
                  Assalamualaikum Farzana! Redmi Note 13 (8/256) ৳23,999. 3 ta nile 5% discount, Dhaka te free delivery. Inbox e details pathalam 🙂
                </div>
                {beat >= 6 ? (
                  <p className="mt-1 flex items-center gap-1 text-[10.5px] text-gc-ink-50">
                    <CheckCheck className="size-3 text-gc-royal" /> Replied publicly and sent to Messenger
                  </p>
                ) : (
                  <div className="mt-1.5 flex gap-1.5">
                    <span className="inline-flex h-7 items-center gap-1 rounded-lg bg-white px-2.5 text-[11.5px] font-medium text-gc-ink ring-1 ring-gc-line">
                      <Pencil className="size-3" /> Edit
                    </span>
                    <span className="inline-flex h-7 items-center rounded-lg bg-gc-royal px-3 text-[11.5px] font-semibold text-white">Send reply</span>
                  </div>
                )}
              </Appear>
            )}

            {/* Customer replies in Messenger */}
            <Appear show={beat >= 7} from="left" className="flex max-w-[78%] items-end gap-2">
              <Avatar name="Farzana Karim" size={26} tone={0} />
              <div>
                <div className="rounded-[14px] rounded-bl-[4px] bg-white px-3.5 py-2 text-[13px] text-gc-ink ring-1 ring-gc-line">
                  Ok, 2 ta nibo. Mirpur 10, cash on delivery.
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-[10.5px] text-gc-ink-50">
                  <ChannelLogo channel="messenger" size={11} /> Messenger · just now
                </p>
              </div>
            </Appear>
          </div>

          {/* Suggested replies + composer */}
          <div className="border-t border-gc-line bg-white px-4 py-2.5">
            <div className="flex gap-1.5">
              {["Price and COD", "Delivery time", "Size chart"].map((s) => (
                <span key={s} className="rounded-full bg-[#F6F7FB] px-2.5 py-1 text-[11px] text-gc-ink-60 ring-1 ring-gc-line">
                  <Sparkles className="mr-1 inline size-3 text-[#6D3FD9]" />
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-2 flex h-9 items-center rounded-lg bg-[#F6F7FB] px-3 text-[12px] text-gc-ink-30 ring-1 ring-gc-line">
              Reply to Farzana · type / for saved replies
            </div>
          </div>
        </div>

        {/* Order panel */}
        {!compact && (
          <div className={cn("flex shrink-0 flex-col gap-3 border-l border-gc-line bg-[#FBFCFE] p-3", narrow ? "w-[180px]" : "w-[232px]")}>
            <Card className="p-3">
              <p className="text-[11.5px] text-gc-ink-50">Customer</p>
              <p className="mt-0.5 text-[13px] font-semibold text-gc-ink">Farzana Karim</p>
              <p className="text-[11.5px] text-gc-ink-50">2 past orders · Mirpur, Dhaka</p>
            </Card>
            <Card className="p-3">
              <p className="text-[11.5px] text-gc-ink-50">What people say on this post</p>
              <div className="mt-2 flex h-1.5 overflow-hidden rounded-full">
                <span className="w-[46%] bg-[#10B981]" />
                <span className="w-[40%] bg-[#CBD5E1]" />
                <span className="w-[14%] bg-[#F87171]" />
              </div>
              <div className="mt-2 space-y-1 text-[11.5px]">
                {[
                  ["Price ask", 9],
                  ["Order intent", 4],
                  ["Complaint", 1],
                ].map(([k, v]) => (
                  <p key={k} className="flex justify-between text-gc-ink-60">
                    {k} <span className="font-semibold text-gc-ink">{v}</span>
                  </p>
                ))}
              </div>
            </Card>
            <Appear show={beat >= 8} from="scale">
              <Card className="p-3 ring-2 ring-gc-royal/30">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-gc-royal">
                  <ShoppingBag className="size-3.5" /> Order #GC-10512
                </p>
                <p className="mt-1 text-[11.5px] text-gc-ink-60">Redmi Note 13 × 2</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-gc-ink">৳45,598</span>
                  <Chip tone="warning">COD</Chip>
                </div>
                <p className="mt-1.5 flex items-center gap-1 text-[10.5px] text-[#047857]">
                  <CircleCheck className="size-3" /> Created from the chat
                </p>
              </Card>
            </Appear>
          </div>
        )}
      </div>
    </AppFrame>
  );

  return (
    <div className="absolute inset-0">
      <div className={cn("absolute", compact ? "inset-x-0 top-[64px] bottom-0" : narrow ? "inset-y-0 left-[28px] right-[28px]" : "inset-y-0 left-[64px] right-[64px]")}>{screen}</div>

      {/* Channels landing in one inbox */}
      <div className={cn("absolute flex gap-2", compact ? "inset-x-0 top-[2px] justify-center gap-4" : narrow ? "left-0 top-[86px] flex-col gap-3" : "left-[14px] top-[86px] flex-col gap-3")}>
        {CHANNEL_COUNTS.map(({ channel, count }, i) => (
          <Appear key={channel} show={beat >= 2} from={compact ? "below" : "left"} delay={i * 0.1}>
            <div className="relative grid size-[46px] place-items-center rounded-full bg-white shadow-[0_14px_30px_-12px_rgba(10,91,207,0.45)] ring-1 ring-[#E3E8F0]">
              <ChannelLogo channel={channel} size={24} />
              <span className="absolute -right-1 -top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-gc-royal px-1 text-[10px] font-semibold text-white ring-2 ring-white">
                {count}
              </span>
            </div>
          </Appear>
        ))}
      </div>

      {!compact && (
        <Appear show={beat >= 5} from="right" className={cn("absolute right-0", narrow ? "bottom-[44px] w-[196px]" : "bottom-[64px] w-[226px]")}>
          <FloatPanel>
            <p className="flex items-center gap-2 text-[12px] font-semibold text-[#6D3FD9]">
              <span className="text-[#6D3FD9]">
                <Ping />
              </span>
              GridAI reply
            </p>
            <p className="mt-1.5 text-[12px] leading-snug text-gc-ink-60">
              Price, stock and delivery pulled from your catalogue. You approve before it’s sent.
            </p>
          </FloatPanel>
        </Appear>
      )}
    </div>
  );
}
