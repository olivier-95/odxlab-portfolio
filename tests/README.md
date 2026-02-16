# Test Suite

This directory contains unit and integration tests for the ODxLab Portfolio project.

## Quick Start

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on file changes)
npm run test:watch

# Run tests with UI
npm run test:ui
```

## Test Files

### Regression Tests

**`layout-url-regression.test.ts`** - URL bug regression tests (17 tests)
- Tests URL construction logic in Layout.astro
- Prevents reoccurrence of TypeError when Astro.site is undefined
- Covers canonical URLs, OG images, and edge cases

**`layout-integration.test.ts`** - Layout component integration tests (13 tests)
- Tests Layout.astro behavior with mock Astro runtime
- Tests props handling and meta tag generation
- Tests development vs production scenarios

**`config.test.ts`** - Configuration validation tests (8 tests)
- Validates astro.config.mjs has site configuration
- Prevents accidental removal of site config
- Ensures URL construction is possible

## Test Structure

All tests follow the **AAA pattern**:
- **Arrange:** Set up test data and mocks
- **Act:** Execute the code under test
- **Assert:** Verify the results

Example:
```typescript
it('should create valid canonical URL with configured site', () => {
  // Arrange
  const site = new URL('https://odxlab.com');
  const pathname = '/';
  
  // Act
  const canonicalURL = new URL(pathname, site);
  
  // Assert
  expect(canonicalURL.toString()).toBe('https://odxlab.com/');
});
```

## Testing Framework

- **Test Runner:** Vitest v4.0.18
- **Test Environment:** happy-dom
- **Assertion Library:** Vitest (expect API)

## Writing New Tests

1. Create a new file: `tests/your-feature.test.ts`
2. Import test utilities:
   ```typescript
   import { describe, it, expect } from 'vitest';
   ```
3. Write tests following AAA pattern
4. Run tests: `npm test`

## Test Coverage

Current coverage focuses on:
- ✅ Layout.astro URL construction
- ✅ Configuration validation
- ✅ Edge cases and error handling

To add coverage for new components:
1. Create a test file in `tests/`
2. Follow existing test patterns
3. Update this README

## Continuous Integration

Tests run automatically on:
- Every commit (recommended)
- Pull requests
- Pre-deployment

Add to CI/CD pipeline:
```yaml
- name: Install dependencies
  run: npm install

- name: Run tests
  run: npm test
```

## Test Performance

Current test suite:
- **Total tests:** 38
- **Execution time:** ~400ms
- **Files:** 3
- **Status:** ✅ All passing

## Debugging Tests

```bash
# Run a specific test file
npx vitest run tests/layout-url-regression.test.ts

# Run tests matching a pattern
npx vitest run --grep "URL construction"

# Run tests in UI mode for debugging
npm run test:ui
```

## Common Issues

**Issue:** Tests fail with `TypeError: Invalid URL`
- **Solution:** Check that fallback logic exists in Layout.astro
- **Prevention:** Regression tests will catch this

**Issue:** Config tests fail
- **Solution:** Ensure astro.config.mjs has `site` property
- **Prevention:** config.test.ts validates configuration

**Issue:** Tests are slow
- **Current:** Tests run in ~400ms, no optimization needed
- **Future:** If tests exceed 1s, consider parallelization

## References

- [Vitest Documentation](https://vitest.dev/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [TEST_SUMMARY.md](./TEST_SUMMARY.md) - Detailed test breakdown

---

**Maintained by:** ODxLab Development Team  
**Last Updated:** February 16, 2026
