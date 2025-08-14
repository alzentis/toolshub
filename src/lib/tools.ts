import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Files,
  FileArchive,
  Crop,
  Image,
  Droplets,
  QrCode,
  Link,
  Pilcrow,
  Lock,
  Braces,
  Pipette,
} from "lucide-react";

export type Tool = {
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  href: string;
};

export const categories = [
  "All",
  "Document Tools",
  "Image Tools",
  "Web Tools",
  "Other",
];

export const tools: Tool[] = [
  {
    name: "Convert PDF to Word",
    description: "Easily convert your PDF files to editable Word documents.",
    icon: FileText,
    category: "Document Tools",
    href: "#",
  },
  {
    name: "Merge PDF",
    description: "Combine multiple PDF files into a single document.",
    icon: Files,
    category: "Document Tools",
    href: "#",
  },
  {
    name: "Compress PDF",
    description: "Reduce the file size of your PDF documents.",
    icon: FileArchive,
    category: "Document Tools",
    href: "#",
  },
  {
    name: "Resize Image",
    description: "Change the dimensions of your images.",
    icon: Crop,
    category: "Image Tools",
    href: "#",
  },
  {
    name: "Convert JPG to PNG",
    description: "Convert JPG images to PNG format with transparency.",
    icon: Image,
    category: "Image Tools",
    href: "#",
  },
  {
    name: "Watermark Image",
    description: "Add a watermark to your images to protect them.",
    icon: Droplets,
    category: "Image Tools",
    href: "#",
  },
  {
    name: "QR Code Generator",
    description: "Create QR codes for URLs, text, and more.",
    icon: QrCode,
    category: "Web Tools",
    href: "#",
  },
  {
    name: "URL Shortener",
    description: "Create short, manageable links from long URLs.",
    icon: Link,
    category: "Web Tools",
    href: "#",
  },
  {
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text for your designs.",
    icon: Pilcrow,
    category: "Web Tools",
    href: "#",
  },
  {
    name: "Password Generator",
    description: "Create strong, secure passwords.",
    icon: Lock,
    category: "Other",
    href: "#",
  },
  {
    name: "JSON Formatter",
    description: "Format and validate your JSON data.",
    icon: Braces,
    category: "Other",
    href: "#",
  },
  {
    name: "Color Picker",
    description: "Pick colors from your screen or an image.",
    icon: Pipette,
    category: "Other",
    href: "#",
  },
];
