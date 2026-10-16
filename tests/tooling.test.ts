import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

interface PackageManifest {
  engines?: { node?: string }
  scripts?: Record<string, string>
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}

const manifest = JSON.parse(readFileSync('package.json', 'utf8')) as PackageManifest
const allDependencies = {
  ...manifest.dependencies,
  ...manifest.devDependencies,
}

describe('Astro tooling contract', () => {
  it('provides the approved build and verification commands', () => {
    expect(manifest.scripts).toMatchObject({
      dev: 'astro dev',
      check: 'astro check',
      'build:astro': 'astro build',
      'build:index': 'pagefind --site dist',
      build: 'pnpm build:astro && pnpm build:index',
    })
  })

  it('keeps the deployment runtime compatible with Node 20', () => {
    expect(manifest.engines?.node).toBe('>=20.3.0')
  })

  it('does not retain the legacy Vue runtime', () => {
    expect(Object.keys(allDependencies)).not.toEqual(
      expect.arrayContaining(['vue', 'vue-router', 'pinia', 'element-plus']),
    )
  })
})
