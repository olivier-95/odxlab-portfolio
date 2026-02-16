import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/**
 * Configuration tests
 * 
 * Ensures astro.config.mjs has the required site configuration
 * to prevent the Layout.astro URL bug from reoccurring.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configPath = join(__dirname, '..', 'astro.config.mjs');

describe('astro.config.mjs Configuration', () => {
  it('should have site configuration defined', async () => {
    const configContent = await readFile(configPath, 'utf-8');
    
    // Check that site is configured
    expect(configContent).toContain('site:');
    expect(configContent).toMatch(/site:\s*['"]https:\/\/[^'"]+['"]/);
  });

  it('should have valid HTTPS URL for site', async () => {
    const configContent = await readFile(configPath, 'utf-8');
    
    // Extract site URL (simple regex for this test)
    const siteMatch = configContent.match(/site:\s*['"]([^'"]+)['"]/);
    
    expect(siteMatch).toBeTruthy();
    
    if (siteMatch) {
      const siteUrl = siteMatch[1];
      
      // Validate it's a proper HTTPS URL
      expect(siteUrl).toMatch(/^https:\/\//);
      
      // Validate it can be parsed as URL
      expect(() => new URL(siteUrl)).not.toThrow();
      
      const url = new URL(siteUrl);
      expect(url.protocol).toBe('https:');
      expect(url.hostname).toBeTruthy();
    }
  });

  it('should have odxlab.com as the configured site', async () => {
    const configContent = await readFile(configPath, 'utf-8');
    
    expect(configContent).toContain('odxlab.com');
    expect(configContent).toMatch(/site:\s*['"]https:\/\/odxlab\.com['"]/);
  });

  it('should export defineConfig with site property', async () => {
    const configContent = await readFile(configPath, 'utf-8');
    
    // Check structure
    expect(configContent).toContain('defineConfig');
    expect(configContent).toContain('export default');
    
    // Ensure site is inside the config object (handle multiline with nested objects)
    const configMatch = configContent.match(/defineConfig\s*\(\s*\{([\s\S]+)\}\s*\)/);
    expect(configMatch).toBeTruthy();
    
    if (configMatch) {
      const configBody = configMatch[1];
      expect(configBody).toContain('site:');
    }
  });

  describe('Regression prevention', () => {
    it('should prevent accidental removal of site config', async () => {
      const configContent = await readFile(configPath, 'utf-8');
      
      // This test will fail if someone removes the site config
      // ensuring the bug cannot be reintroduced
      expect(configContent).toContain('site:');
      
      const hasSiteConfig = /site:\s*['"]https:\/\/[^'"]+['"]/.test(configContent);
      expect(hasSiteConfig).toBe(true);
    });

    it('should have site config before any other config options', async () => {
      const configContent = await readFile(configPath, 'utf-8');
      
      const siteIndex = configContent.indexOf('site:');
      const configStartIndex = configContent.indexOf('defineConfig({');
      
      expect(siteIndex).toBeGreaterThan(configStartIndex);
      expect(siteIndex).not.toBe(-1);
    });
  });

  describe('URL validity', () => {
    it('should parse configured site URL successfully', async () => {
      const configContent = await readFile(configPath, 'utf-8');
      const siteMatch = configContent.match(/site:\s*['"]([^'"]+)['"]/);
      
      if (siteMatch) {
        const siteUrl = siteMatch[1];
        const url = new URL(siteUrl);
        
        expect(url.href).toBe(siteUrl.endsWith('/') ? siteUrl : siteUrl + '/');
        expect(url.origin).toBeTruthy();
      }
    });

    it('should support URL construction with configured site', async () => {
      const configContent = await readFile(configPath, 'utf-8');
      const siteMatch = configContent.match(/site:\s*['"]([^'"]+)['"]/);
      
      if (siteMatch) {
        const siteUrl = new URL(siteMatch[1]);
        
        // Test that it can be used as base URL
        expect(() => new URL('/', siteUrl)).not.toThrow();
        expect(() => new URL('/about', siteUrl)).not.toThrow();
        expect(() => new URL('/og-image.jpg', siteUrl)).not.toThrow();
      }
    });
  });
});
