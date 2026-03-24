"use client";

import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
}

export function ImagePlaceholder({
  label = "Screenshot Placeholder",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-slate-100 aspect-video rounded-lg flex flex-col items-center justify-center gap-2 border border-dashed border-slate-300",
        className
      )}
    >
      <ImageIcon className="w-8 h-8 text-slate-400" />
      <span className="text-sm text-slate-400">{label}</span>
    </div>
  );
}
