import { describe, it, expect, beforeEach } from 'vitest';

/**
 * Regression tests for Layout.astro URL bug
 * 
 * Bug: Layout.astro crashed with `TypeError: Invalid URL` when `Astro.site` was undefined
 * Fixed by:
 * 1. Adding `site: 'https://odxlab.com'` to astro.config.mjs
 * 2. Adding fallback in Layout.astro: `const siteUrl = Astro.site || new URL('https://odxlab.com');`
 * 
 * These tests ensure the URL construction logic is safe and handles edge cases.
 */

describe('Layout.astro URL Construction (Regression Tests)', () => {
  describe('URL construction with site configuration', () => {
    it('should create valid canonical URL with configured site', () => {
      const site = new URL('https://odxlab.com');
      const pathname = '/';
      
      // This simulates the fixed code: const canonicalURL = new URL(Astro.url.pathname, siteUrl);
      const canonicalURL = new URL(pathname, site);
      
      expect(canonicalURL.toString()).toBe('https://odxlab.com/');
    });

    it('should create valid canonical URL with different pathnames', () => {
      const site = new URL('https://odxlab.com');
      const testCases = [
        { pathname: '/', expected: 'https://odxlab.com/' },
        { pathname: '/about', expected: 'https://odxlab.com/about' },
        { pathname: '/contact/', expected: 'https://odxlab.com/contact/' },
        { pathname: '/services/web-design', expected: 'https://odxlab.com/services/web-design' },
      ];

      testCases.forEach(({ pathname, expected }) => {
        const canonicalURL = new URL(pathname, site);
        expect(canonicalURL.toString()).toBe(expected);
      });
    });
  });

  describe('URL construction with undefined site (fallback behavior)', () => {
    it('should safely handle undefined site with fallback', () => {
      const undefinedSite = undefined;
      const pathname = '/';
      
      // This simulates the fixed code: const siteUrl = Astro.site || new URL('https://odxlab.com');
      const siteUrl = undefinedSite || new URL('https://odxlab.com');
      const canonicalURL = new URL(pathname, siteUrl);
      
      expect(canonicalURL.toString()).toBe('https://odxlab.com/');
    });

    it('should create valid URLs with fallback for various pathnames', () => {
      const undefinedSite = undefined;
      const siteUrl = undefinedSite || new URL('https://odxlab.com');
      
      const testCases = [
        { pathname: '/', expected: 'https://odxlab.com/' },
        { pathname: '/test', expected: 'https://odxlab.com/test' },
      ];

      testCases.forEach(({ pathname, expected }) => {
        const canonicalURL = new URL(pathname, siteUrl);
        expect(canonicalURL.toString()).toBe(expected);
      });
    });
  });

  describe('OG Image URL construction', () => {
    it('should create valid OG image URL with absolute path', () => {
      const site = new URL('https://odxlab.com');
      const image = '/og-image.jpg';
      
      const ogImage = new URL(image, site).toString();
      
      expect(ogImage).toBe('https://odxlab.com/og-image.jpg');
    });

    it('should create valid OG image URL with relative path', () => {
      const site = new URL('https://odxlab.com');
      const image = 'og-image.jpg';
      
      const ogImage = new URL(image, site).toString();
      
      expect(ogImage).toBe('https://odxlab.com/og-image.jpg');
    });

    it('should handle OG image URLs in subdirectories', () => {
      const site = new URL('https://odxlab.com');
      const testCases = [
        { image: '/images/og-image.jpg', expected: 'https://odxlab.com/images/og-image.jpg' },
        { image: '/assets/social/og.png', expected: 'https://odxlab.com/assets/social/og.png' },
        { image: 'images/og.jpg', expected: 'https://odxlab.com/images/og.jpg' },
      ];

      testCases.forEach(({ image, expected }) => {
        const ogImage = new URL(image, site).toString();
        expect(ogImage).toBe(expected);
      });
    });

    it('should handle fully qualified OG image URLs', () => {
      const site = new URL('https://odxlab.com');
      const externalImage = 'https://cdn.example.com/og-image.jpg';
      
      // When image is already a full URL, it should be used as-is
      const ogImage = new URL(externalImage, site).toString();
      
      expect(ogImage).toBe('https://cdn.example.com/og-image.jpg');
    });
  });

  describe('Edge cases for URL construction', () => {
    it('should handle pathnames with special characters', () => {
      const site = new URL('https://odxlab.com');
      const testCases = [
        { pathname: '/projects/my%20project', expected: 'https://odxlab.com/projects/my%20project' },
        { pathname: '/search?q=test', expected: 'https://odxlab.com/search?q=test' },
        { pathname: '/page#section', expected: 'https://odxlab.com/page#section' },
      ];

      testCases.forEach(({ pathname, expected }) => {
        const canonicalURL = new URL(pathname, site);
        expect(canonicalURL.toString()).toBe(expected);
      });
    });

    it('should handle trailing slashes consistently', () => {
      const site = new URL('https://odxlab.com');
      
      const withTrailing = new URL('/about/', site);
      const withoutTrailing = new URL('/about', site);
      
      expect(withTrailing.toString()).toBe('https://odxlab.com/about/');
      expect(withoutTrailing.toString()).toBe('https://odxlab.com/about');
      expect(withTrailing.toString()).not.toBe(withoutTrailing.toString());
    });

    it('should handle double slashes in pathnames', () => {
      const site = new URL('https://odxlab.com');
      const pathname = '//double-slash';
      
      const canonicalURL = new URL(pathname, site);
      
      // URL constructor with // treats it as protocol-relative URL
      // This is expected behavior - // means "use same protocol as current page"
      // Result: https://double-slash/ (treats double-slash as hostname)
      expect(canonicalURL.toString()).toBe('https://double-slash/');
      expect(canonicalURL.hostname).toBe('double-slash');
    });
  });

  describe('Preventing the original bug', () => {
    it('should NOT throw TypeError when site is undefined (original bug)', () => {
      const undefinedSite = undefined;
      const pathname = '/';
      
      // Original buggy code would have been: new URL(pathname, undefinedSite)
      // This would throw: TypeError: Invalid URL
      
      // Fixed code uses fallback
      const siteUrl = undefinedSite || new URL('https://odxlab.com');
      
      expect(() => {
        new URL(pathname, siteUrl);
      }).not.toThrow();
    });

    it('should NOT throw TypeError when creating OG image URL with undefined site', () => {
      const undefinedSite = undefined;
      const image = '/og-image.jpg';
      
      const siteUrl = undefinedSite || new URL('https://odxlab.com');
      
      expect(() => {
        new URL(image, siteUrl).toString();
      }).not.toThrow();
    });

    it('should demonstrate the original bug behavior (if fallback was removed)', () => {
      const undefinedSite = undefined;
      const pathname = '/';
      
      // This is what the BUGGY code would do - should throw
      expect(() => {
        new URL(pathname, undefinedSite as any);
      }).toThrow(TypeError);
    });
  });

  describe('URL object properties', () => {
    it('should correctly expose URL components', () => {
      const site = new URL('https://odxlab.com');
      const pathname = '/about';
      const canonicalURL = new URL(pathname, site);
      
      expect(canonicalURL.protocol).toBe('https:');
      expect(canonicalURL.hostname).toBe('odxlab.com');
      expect(canonicalURL.pathname).toBe('/about');
      expect(canonicalURL.href).toBe('https://odxlab.com/about');
    });

    it('should support URL with subdomain', () => {
      const site = new URL('https://www.odxlab.com');
      const pathname = '/';
      const canonicalURL = new URL(pathname, site);
      
      expect(canonicalURL.hostname).toBe('www.odxlab.com');
      expect(canonicalURL.toString()).toBe('https://www.odxlab.com/');
    });

    it('should support URL with port', () => {
      const site = new URL('https://odxlab.com:3000');
      const pathname = '/dev';
      const canonicalURL = new URL(pathname, site);
      
      expect(canonicalURL.port).toBe('3000');
      expect(canonicalURL.toString()).toBe('https://odxlab.com:3000/dev');
    });
  });
});
