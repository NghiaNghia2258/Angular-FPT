export class CookieUtils {
    static setCookie(
        name: string,
        value: string,
        options: {
          expires?: number;
          path?: string;
          secure?: boolean;
          sameSite?: 'Strict' | 'Lax' | 'None';
        } = {}
      ): void {
        let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;
    
        if (options.expires) {
          const date = new Date();
          date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
          cookieString += `expires=${date.toUTCString()};`;
        }
    
        cookieString += `path=${options.path || '/'};`;
    
        if (options.secure) {
          cookieString += 'secure;';
        }
    
        if (options.sameSite) {
          cookieString += `SameSite=${options.sameSite};`;
        }
    
        document.cookie = cookieString;
      }
      static getCookie(name: string): string | null {
        const match = document.cookie.match(new RegExp(`(^| )${encodeURIComponent(name)}=([^;]+)`));
        return match ? decodeURIComponent(match[2]) : null;
      }
      static deleteCookie(name: string, path: string = '/'): void {
        document.cookie = `${encodeURIComponent(name)}=;path=${path};expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      }
      static hasCookie(name: string): boolean {
        return new RegExp(`(^| )${encodeURIComponent(name)}=`).test(document.cookie);
      }
      static getAllCookies(): { [key: string]: string } {
        const cookies: { [key: string]: string } = {};
        const cookieArray = document.cookie.split(';');
    
        cookieArray.forEach(cookie => {
          const [key, value] = cookie.split('=').map(c => c.trim());
          if (key) {
            cookies[decodeURIComponent(key)] = decodeURIComponent(value);
          }
        });
    
        return cookies;
      }
}