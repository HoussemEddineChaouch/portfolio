import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL: string = "https://houssem-chaouch.vercel.app";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

const protectedRoutes: ProtectedRoutesConfig = {};

import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = { heading, body, label, code };

const style: StyleConfig = {
  theme: "dark",
  neutral: "gray",
  brand: "blue",
  accent: "indigo",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    size: "16",
    thickness: 1,
    angle: 45,
    gap: 8,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    size: "16",
    columns: "auto",
    rows: "auto",
    thickness: 1,
  },
};

const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: "Houssem Chaouch",
  description: home.description,
  email: "chaouch.eddinehoussem@gmail.com",
};

const socialSharing: SocialSharingConfig = {
  title: home.title,
  description: home.description,
  ogImage: home.image,
};

const sameAs: SameAsConfig = [
  "https://github.com/HoussemEddineChaouch",
  "https://www.linkedin.com/in/chaouch-houssem-eddine",
];

const mailchimp: MailchimpConfig = {
  action: "",
  effects: {
    mask: { cursor: false, x: 50, y: 0, radius: 100 },
    gradient: {
      display: true,
      x: 50,
      y: 0,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: "2",
      color: "brand-on-background-weak",
      opacity: 20,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
      size: "16",
      thickness: 1,
      angle: 45,
      gap: 8,
    },
    grid: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
      size: "16",
      columns: "auto",
      rows: "auto",
      thickness: 1,
    },
  },
};

const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "brand",
  height: 400,
  axis: {
    stroke: "var(--neutral-border-medium)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};
export {
  baseURL,
  routes,
  display,
  protectedRoutes,
  fonts,
  style,
  effects,
  schema,
  socialSharing,
  sameAs,
  mailchimp,
  dataStyle,
};
