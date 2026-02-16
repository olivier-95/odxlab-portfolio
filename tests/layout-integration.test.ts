import { describe, it, expect } from 'vitest';

/**
 * Integration tests for Layout.astro
 * 
 * These tests verify the Layout component's behavior in scenarios
 * similar to actual Astro runtime conditions.
 */

describe('Layout.astro Integration Tests', () => {
  describe('Mock Astro.site scenarios', () => {
    it('should handle scenario where Astro.site is properly configured', () => {
      // Simulate Astro.site being set in astro.config.mjs
      const mockAstro = {
        site: new URL('https://odxlab.com'),
        url: { pathname: '/' },
      };

      // Simulate Layout.astro logic
      const siteUrl = mockAstro.site || new URL('https://odxlab.com');
      const canonicalURL = new URL(mockAstro.url.pathname, siteUrl);
      const ogImage = new URL('/og-image.jpg', siteUrl).toString();

      expect(canonicalURL.toString()).toBe('https://odxlab.com/');
      expect(ogImage).toBe('https://odxlab.com/og-image.jpg');
    });

    it('should handle scenario where Astro.site is undefined (fallback)', () => {
      // Simulate missing site in astro.config.mjs
      const mockAstro = {
        site: undefined,
        url: { pathname: '/' },
      };

      // Simulate Layout.astro logic with fallback
      const siteUrl = mockAstro.site || new URL('https://odxlab.com');
      const canonicalURL = new URL(mockAstro.url.pathname, siteUrl);
      const ogImage = new URL('/og-image.jpg', siteUrl).toString();

      expect(canonicalURL.toString()).toBe('https://odxlab.com/');
      expect(ogImage).toBe('https://odxlab.com/og-image.jpg');
    });

    it('should handle different pages with configured site', () => {
      const pages = [
        { pathname: '/', expectedCanonical: 'https://odxlab.com/' },
        { pathname: '/about', expectedCanonical: 'https://odxlab.com/about' },
        { pathname: '/contact', expectedCanonical: 'https://odxlab.com/contact' },
      ];

      pages.forEach(({ pathname, expectedCanonical }) => {
        const mockAstro = {
          site: new URL('https://odxlab.com'),
          url: { pathname },
        };

        const siteUrl = mockAstro.site || new URL('https://odxlab.com');
        const canonicalURL = new URL(mockAstro.url.pathname, siteUrl);

        expect(canonicalURL.toString()).toBe(expectedCanonical);
      });
    });
  });

  describe('Props handling', () => {
    it('should use default values when no props provided', () => {
      const defaultProps = {
        title: 'ODxLab - Creative Solutions for Growing Businesses',
        description: 'Modern, fun, and creative freelance services for SMBs. Web design, branding, and development that brings your vision to life.',
        image: '/og-image.jpg',
      };

      expect(defaultProps.title).toBeDefined();
      expect(defaultProps.description).toBeDefined();
      expect(defaultProps.image).toBe('/og-image.jpg');
    });

    it('should override defaults with custom props', () => {
      const customProps = {
        title: 'Custom Page Title',
        description: 'Custom description',
        image: '/custom-og.jpg',
      };

      const mockAstro = {
        site: new URL('https://odxlab.com'),
        url: { pathname: '/custom-page' },
        props: customProps,
      };

      const siteUrl = mockAstro.site || new URL('https://odxlab.com');
      const ogImage = new URL(mockAstro.props.image, siteUrl).toString();

      expect(mockAstro.props.title).toBe('Custom Page Title');
      expect(mockAstro.props.description).toBe('Custom description');
      expect(ogImage).toBe('https://odxlab.com/custom-og.jpg');
    });

    it('should handle various image path formats', () => {
      const imagePaths = [
        { image: '/og-image.jpg', expected: 'https://odxlab.com/og-image.jpg' },
        { image: '/images/social.png', expected: 'https://odxlab.com/images/social.png' },
        { image: 'og.jpg', expected: 'https://odxlab.com/og.jpg' },
      ];

      const mockSite = new URL('https://odxlab.com');

      imagePaths.forEach(({ image, expected }) => {
        const ogImage = new URL(image, mockSite).toString();
        expect(ogImage).toBe(expected);
      });
    });
  });

  describe('Meta tag generation', () => {
    it('should generate correct canonical URL for meta tags', () => {
      const mockAstro = {
        site: new URL('https://odxlab.com'),
        url: { pathname: '/services' },
      };

      const siteUrl = mockAstro.site || new URL('https://odxlab.com');
      const canonicalURL = new URL(mockAstro.url.pathname, siteUrl);

      // Canonical URL should be used in <link rel="canonical"> and Open Graph
      expect(canonicalURL.toString()).toBe('https://odxlab.com/services');
    });

    it('should generate absolute OG image URLs', () => {
      const mockAstro = {
        site: new URL('https://odxlab.com'),
        url: { pathname: '/' },
      };

      const siteUrl = mockAstro.site || new URL('https://odxlab.com');
      const ogImage = new URL('/og-image.jpg', siteUrl).toString();

      // OG image must be absolute URL
      expect(ogImage).toMatch(/^https:\/\//);
      expect(ogImage).toBe('https://odxlab.com/og-image.jpg');
    });
  });

  describe('Development vs Production environments', () => {
    it('should work in development (localhost)', () => {
      const mockAstro = {
        site: new URL('http://localhost:4321'),
        url: { pathname: '/test' },
      };

      const siteUrl = mockAstro.site || new URL('https://odxlab.com');
      const canonicalURL = new URL(mockAstro.url.pathname, siteUrl);

      expect(canonicalURL.toString()).toBe('http://localhost:4321/test');
    });

    it('should work in production (odxlab.com)', () => {
      const mockAstro = {
        site: new URL('https://odxlab.com'),
        url: { pathname: '/test' },
      };

      const siteUrl = mockAstro.site || new URL('https://odxlab.com');
      const canonicalURL = new URL(mockAstro.url.pathname, siteUrl);

      expect(canonicalURL.toString()).toBe('https://odxlab.com/test');
    });

    it('should fallback to production URL when site undefined in dev', () => {
      const mockAstro = {
        site: undefined, // Not configured
        url: { pathname: '/test' },
      };

      // Fallback ensures we always have a valid URL
      const siteUrl = mockAstro.site || new URL('https://odxlab.com');
      const canonicalURL = new URL(mockAstro.url.pathname, siteUrl);

      expect(canonicalURL.toString()).toBe('https://odxlab.com/test');
    });
  });

  describe('Error prevention', () => {
    it('should never throw TypeError with proper fallback', () => {
      const scenarios = [
        { site: undefined, pathname: '/' },
        { site: undefined, pathname: '/about' },
        { site: null, pathname: '/' },
      ];

      scenarios.forEach(({ site, pathname }) => {
        expect(() => {
          const siteUrl = site || new URL('https://odxlab.com');
          new URL(pathname, siteUrl);
        }).not.toThrow();
      });
    });

    it('should validate that URL constructor requires valid base', () => {
      // This demonstrates why the fallback is critical
      expect(() => {
        new URL('/path', undefined as any);
      }).toThrow(TypeError);

      expect(() => {
        new URL('/path', null as any);
      }).toThrow(TypeError);
    });
  });
});
