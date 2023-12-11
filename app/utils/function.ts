interface CookieOptions {
  name: string;
  value: string;
  expires?: Date;
  path?: string;
}

export function setCookie({
  name,
  value,
  expires,
  path = "/",
}: CookieOptions): void {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; path=${path}`;

  if (expires) {
    cookieString += `; expires=${expires.toUTCString()}`;
  }

  document.cookie = cookieString;
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const decodedName = encodeURIComponent(name);
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const trimmedCookie = cookie.trim();

    if (trimmedCookie.indexOf(`${decodedName}=`) === 0) {
      return decodeURIComponent(
        trimmedCookie.substring(decodedName.length + 1)
      );
    }
  }

  return null;
}
