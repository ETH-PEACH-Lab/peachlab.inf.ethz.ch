"use client";
import { Note } from "@geist-ui/core";

export default function ClientNote({ children, ...props }) {
  return <Note {...props}>{children}</Note>;
}
