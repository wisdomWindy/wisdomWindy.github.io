import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const root = resolve(import.meta.dirname, '..')

describe('deployment and legacy contracts', () => {
  it('provides a GitHub Pages workflow with verification and artifact deployment', () => {
    const workflowPath = resolve(root, '.github/workflows/main.yml')
    expect(existsSync(workflowPath)).toBe(true)
    expect(existsSync(resolve(root, '.github/workflows/deploy.yml'))).toBe(false)
    const workflow = readFileSync(workflowPath, 'utf8')

    expect(workflow).toContain('actions/configure-pages')
    expect(workflow).toContain('actions/upload-pages-artifact')
    expect(workflow).toContain('actions/deploy-pages')
    expect(workflow).toContain('pnpm check')
    expect(workflow).toContain('pnpm test')
    expect(workflow).toContain('pnpm build')
  })

  it('contains no legacy Vue runtime or entry files', () => {
    const packageJson = readFileSync(resolve(root, 'package.json'), 'utf8')
    for (const dependency of ['"vue"', 'pinia', 'element-plus', '@vitejs/plugin-vue']) {
      expect(packageJson).not.toContain(dependency)
    }

    for (const file of [
      'src/App.vue',
      'src/main.ts',
      'vite.config.ts',
      'index.html',
      '.eslintignore',
      '.eslintrc.cjs',
      'docs/index.html',
      'docs/favicon.ico',
      'docs/assets',
      'docs/images',
    ]) {
      expect(existsSync(resolve(root, file))).toBe(false)
    }
  })
})
