# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed

- Rebranded project metadata and content
  - Updated package name to `wedding` and version to `0.0.1`
  - Replaced all legacy branding and authoring references with `Huynh Duc Khoan`
  - Replaced old site URLs in `astro.config.mjs` and `public/robots.txt`
  - Updated navigation CTA labels/links and footer attribution to project-owned content
  - Simplified `README.md` and removed unrelated external links
  - Replaced external demo links in sample MDX content with internal links

- Migrated from pnpm to bun as the package manager
  - Removed `pnpm-lock.yaml`
  - Removed `.npmrc` (pnpm-specific configuration)
  - Added `packageManager` field to `package.json` specifying `bun@1.2.0`
  - Updated `.gitignore` to include `bun.lock` instead of `pnpm-debug.log*`
  - Generated new `bun.lock` lockfile

- Migrated from ESLint/Prettier to Biome for linting and formatting
  - Removed ESLint dependencies: `@eslint/js`, `eslint`, `eslint-plugin-astro`, `eslint-plugin-jsx-a11y`, `eslint-plugin-prettier`, `eslint-plugin-simple-import-sort`, `globals`, `typescript-eslint`
  - Removed Prettier dependencies: `prettier-plugin-astro`, `prettier-plugin-tailwindcss`
  - Added `@biomejs/biome` v1.9.4 as a single toolchain
  - Created `biome.json` with equivalent configuration
  - Deleted old config files: `eslint.config.mjs`, `.prettierrc.mjs`, `.prettierignore`
  - Updated package.json scripts: `format`, `lint`, and added `check`
  - Updated `.gitignore` to include `.biome/` cache directory
  - Fixed 24 files with auto-fixable issues

## [2.1.0] - Current

### Added

- Initial release with Astro 5.7.12
- Photography portfolio theme
- TailwindCSS 4.1.5 integration
- ESLint and Prettier configuration
