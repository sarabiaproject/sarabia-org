"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <Card className="group flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Link href={href || "#"} target="_blank" className="block cursor-pointer">
        <div className="flex items-center p-4">
          <Avatar className="size-12 bg-muted dark:bg-foreground transition-transform duration-300 group-hover:scale-105">
            <AvatarImage src={logoUrl} alt={altText} />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex-grow">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base group-hover:text-primary transition-colors duration-300">
                {title}
              </CardTitle>
              <ChevronRight className="h-5 w-5 transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            <time className="font-sans text-xs text-muted-foreground">
              {period}
            </time>
          </div>
        </div>
      </Link>
      <CardContent className="px-4 pt-0">
        {description && (
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        )}
        {badges && badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-1 py-0 text-[10px]"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
