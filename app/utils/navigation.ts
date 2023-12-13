import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["tr", "en"] as const;
export const localePrefix = "always"; // Default

type AnyPath = string;

export const pathnames: Pathnames<typeof locales> = {
  // Example paths
  "/": "/",
  "/academy": "/academy",
  "/cankaya": "/cankaya",
  "/league-information": "/league-information",
  "/contact": "/contact",
  "/our-mission": "/our-mission",
  "/reservation": "/reservation",
  "/private-lessons": "/private-lessons",
  // ...
} as Record<AnyPath, string>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
