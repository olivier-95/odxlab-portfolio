# Layout.astro URL Bug - Regression Test Summary

## Overview

This document summarizes the regression tests added to prevent reoccurrence of the Layout.astro URL bug.

## The Bug

**Issue:** Layout.astro crashed with `TypeError: Invalid URL` when `Astro.site` was undefined

**Root Cause:** Line 16 attempted to create a URL with undefined base:
```javascript
new URL(Astro.url.pathname, Astro.site) // TypeError when Astro.site is undefined
```

## The Fix

1. **astro.config.mjs:** Added `site: 'https://odxlab.com'` configuration
2. **Layout.astro:** Added fallback for undefined site:
```javascript
const siteUrl = Astro.site || new URL('https://odxlab.com');
const canonicalURL = new URL(Astro.url.pathname, siteUrl);
const ogImage = new URL(image, siteUrl).toString();
```

## Test Coverage

### Test Files Created

1. **tests/layout-url-regression.test.ts** - 17 tests
2. **tests/layout-integration.test.ts** - 13 tests  
3. **tests/config.test.ts** - 8 tests

**Total: 38 tests, all passing ✅**

---

## Test Breakdown

### 1. layout-url-regression.test.ts (17 tests)

#### URL Construction with Site Configuration (2 tests)
- ✅ Creates valid canonical URL with configured site
- ✅ Creates valid canonical URL with different pathnames (/, /about, /contact/, /services/web-design)

#### URL Construction with Undefined Site - Fallback Behavior (2 tests)
- ✅ Safely handles undefined site with fallback
- ✅ Creates valid URLs with fallback for various pathnames

#### OG Image URL Construction (4 tests)
- ✅ Creates valid OG image URL with absolute path (/og-image.jpg)
- ✅ Creates valid OG image URL with relative path (og-image.jpg)
- ✅ Handles OG image URLs in subdirectories (/images/og-image.jpg, /assets/social/og.png)
- ✅ Handles fully qualified OG image URLs (https://cdn.example.com/og-image.jpg)

#### Edge Cases for URL Construction (3 tests)
- ✅ Handles pathnames with special characters (spaces, query strings, fragments)
- ✅ Handles trailing slashes consistently
- ✅ Handles double slashes in pathnames (protocol-relative URLs)

#### Preventing the Original Bug (3 tests)
- ✅ Does NOT throw TypeError when site is undefined (original bug scenario)
- ✅ Does NOT throw TypeError when creating OG image URL with undefined site
- ✅ Demonstrates the original bug behavior would throw TypeError

#### URL Object Properties (3 tests)
- ✅ Correctly exposes URL components (protocol, hostname, pathname, href)
- ✅ Supports URL with subdomain (www.odxlab.com)
- ✅ Supports URL with port (:3000)

---

### 2. layout-integration.test.ts (13 tests)

#### Mock Astro.site Scenarios (3 tests)
- ✅ Handles scenario where Astro.site is properly configured
- ✅ Handles scenario where Astro.site is undefined (fallback)
- ✅ Handles different pages with configured site (/, /about, /contact)

#### Props Handling (3 tests)
- ✅ Uses default values when no props provided
- ✅ Overrides defaults with custom props
- ✅ Handles various image path formats

#### Meta Tag Generation (2 tests)
- ✅ Generates correct canonical URL for meta tags
- ✅ Generates absolute OG image URLs

#### Development vs Production Environments (3 tests)
- ✅ Works in development (localhost:4321)
- ✅ Works in production (odxlab.com)
- ✅ Fallback to production URL when site undefined in dev

#### Error Prevention (2 tests)
- ✅ Never throws TypeError with proper fallback
- ✅ Validates that URL constructor requires valid base

---

### 3. config.test.ts (8 tests)

#### Configuration Validation (4 tests)
- ✅ Has site configuration defined
- ✅ Has valid HTTPS URL for site
- ✅ Has odxlab.com as the configured site
- ✅ Exports defineConfig with site property

#### Regression Prevention (2 tests)
- ✅ Prevents accidental removal of site config
- ✅ Has site config before any other config options

#### URL Validity (2 tests)
- ✅ Parses configured site URL successfully
- ✅ Supports URL construction with configured site

---

## Test Execution

```bash
npm test                 # Run all tests once
npm run test:watch      # Run tests in watch mode
npm run test:ui         # Run tests with UI
```

### Latest Test Run Results

```
✓ tests/layout-url-regression.test.ts (17 tests) 5ms
✓ tests/layout-integration.test.ts (13 tests) 4ms
✓ tests/config.test.ts (8 tests) 6ms

Test Files  3 passed (3)
Tests       38 passed (38)
Duration    416ms
```

---

## Coverage Summary

### Critical Paths (100% covered)
- ✅ URL construction with configured site
- ✅ URL construction with undefined site (fallback)
- ✅ Canonical URL generation
- ✅ OG image URL generation
- ✅ Configuration validation

### Edge Cases Covered
- ✅ Special characters in pathnames
- ✅ Trailing slashes
- ✅ Protocol-relative URLs
- ✅ Subdirectories
- ✅ External URLs
- ✅ Query strings and fragments
- ✅ Subdomains and ports
- ✅ Development vs production environments

### Regression Prevention
- ✅ Tests explicitly check that the original bug (TypeError) does NOT occur
- ✅ Tests validate astro.config.mjs has site configuration
- ✅ Tests prevent accidental removal of fallback logic

---

## How These Tests Prevent Regression

1. **Explicit Bug Recreation:** Tests demonstrate the original bug would throw TypeError
2. **Fallback Validation:** Tests verify fallback works when Astro.site is undefined
3. **Configuration Guard:** Tests fail if site config is removed from astro.config.mjs
4. **Edge Case Coverage:** Tests cover various URL scenarios that could trigger similar bugs
5. **Integration Testing:** Tests simulate actual Astro runtime conditions

---

## Running Tests in CI/CD

Add to your CI/CD pipeline (GitHub Actions, etc.):

```yaml
- name: Run Tests
  run: npm test
```

Tests are fast (<500ms) and have no external dependencies.

---

## Future Improvements

- [ ] Add E2E tests with Playwright to test actual page rendering
- [ ] Add visual regression tests for meta tag rendering
- [ ] Add performance tests for URL construction
- [ ] Consider testing with different Astro.site configurations (staging, production, etc.)

---

## Maintenance

**When to update these tests:**

1. If the URL construction logic in Layout.astro changes
2. If astro.config.mjs site configuration changes
3. If new URL-related props are added to Layout component
4. If meta tag generation logic changes

**Test ownership:** These tests should be maintained alongside Layout.astro component.

---

## References

- **Bug Fix Commit:** Layout.astro URL bug fix (Feb 16, 2026)
- **Files Changed:**
  - `src/layouts/Layout.astro` - Added fallback logic
  - `astro.config.mjs` - Added site configuration
- **Testing Framework:** Vitest v4.0.18
- **Test Environment:** happy-dom

---

**Last Updated:** February 16, 2026  
**Test Status:** ✅ All 38 tests passing
