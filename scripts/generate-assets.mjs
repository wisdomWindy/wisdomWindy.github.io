import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'

const outputDirectory = new URL('../public/images/', import.meta.url)
await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ deviceScaleFactor: 1 })

const baseStyles = `
  * { box-sizing: border-box; }
  html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; }
  body {
    font-family: Inter, ui-sans-serif, system-ui, "Microsoft YaHei", sans-serif;
    color: #171a1d;
    background: #f5f7f8;
  }
  .canvas { position: relative; width: 100vw; height: 100vh; overflow: hidden; }
  .grid {
    position: absolute; inset: 0;
    background-size: 48px 48px;
    background-image:
      linear-gradient(#d9dfe3 1px, transparent 1px),
      linear-gradient(90deg, #d9dfe3 1px, transparent 1px);
    opacity: .72;
  }
  .rule { position: absolute; background: #171a1d; }
  .label { position: absolute; font: 700 15px/1 ui-monospace, monospace; color: #155eef; }
  .meta { position: absolute; font: 650 13px/1.4 ui-monospace, monospace; color: #5e6871; }
  .title { position: absolute; margin: 0; font-weight: 850; line-height: .95; letter-spacing: 0; }
  .accent-blue { background: #155eef; }
  .accent-green { background: #16794b; }
  .accent-coral { background: #e25544; }
`

const render = async ({ width, height, name, content, type = 'webp' }) => {
  await page.setViewportSize({ width, height })
  await page.setContent(`<style>${baseStyles}</style>${content}`)
  await page.screenshot({
    path: fileURLToPath(new URL(`${name}.${type}`, outputDirectory)),
    type,
  })
}

await render({
  width: 960,
  height: 960,
  name: 'identity-wisdom-windy',
  content: `
    <main class="canvas" aria-label="wisdomWindy abstract identity">
      <div class="grid"></div>
      <div class="rule" style="left:72px;top:72px;width:2px;height:816px"></div>
      <div class="rule accent-coral" style="right:72px;top:72px;width:180px;height:18px"></div>
      <div style="position:absolute;left:132px;top:128px;width:620px;height:620px;border:3px solid #171a1d;border-radius:50%"></div>
      <div style="position:absolute;left:220px;top:214px;width:450px;height:450px;border:2px solid #155eef;border-radius:50%"></div>
      <h1 class="title" style="left:122px;top:260px;font-size:360px">W</h1>
      <div class="label" style="left:94px;top:98px">IDENTITY / 001</div>
      <div class="meta" style="right:74px;bottom:72px;text-align:right">BUILD<br>TEST<br>REFINE</div>
      <div class="rule accent-green" style="left:94px;bottom:72px;width:84px;height:12px"></div>
    </main>`,
})

const waitForImages = () => page.waitForFunction(() =>
  [...document.images].every((image) => image.complete && image.naturalWidth > 0),
)

const captureProjectPage = async ({ name, url }) => {
  await page.setViewportSize({ width: 1200, height: 750 })
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 })
  await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {})
  await waitForImages()
  await page.screenshot({
    path: fileURLToPath(new URL(`${name}.webp`, outputDirectory)),
    type: 'webp',
  })
}

const captureProjectImage = async ({ name, url, alt }) => {
  await page.setViewportSize({ width: 1200, height: 750 })
  await page.setContent(`
    <style>
      html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #f4f5f6; }
      img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top left; }
    </style>
    <img src="${url}" alt="${alt}" />
  `)
  await waitForImages()
  await page.screenshot({
    path: fileURLToPath(new URL(`${name}.webp`, outputDirectory)),
    type: 'webp',
  })
}

await captureProjectImage({
  name: 'project-bilicatch',
  url: 'https://raw.githubusercontent.com/wisdomWindy/bili-catch/main/docs/requests/bilicatch-v1-desktop/module-runs/parse-download-center/verification/evidence/bilicatch-1280.png',
  alt: 'BiliCatch download center',
})

await captureProjectPage({
  name: 'project-skill-hub',
  url: 'https://wisdomwindy.github.io/skill-hub/',
})

await render({
  width: 1200,
  height: 630,
  name: 'og-default',
  type: 'png',
  content: `
    <main class="canvas" aria-label="wisdomWindy portfolio social preview" style="background:#101214;color:#f4f5f6">
      <div style="position:absolute;inset:42px;border:1px solid #343a3f"></div>
      <div class="label" style="left:82px;top:78px;color:#73a4ff">PORTFOLIO / FRONTEND ENGINEER</div>
      <h1 class="title" style="left:78px;bottom:152px;font-size:118px">wisdomWindy</h1>
      <p style="position:absolute;left:84px;bottom:76px;margin:0;color:#aab2b9;font-size:28px">项目案例 · 技术文章 · 工程实践</p>
      <div style="position:absolute;right:84px;top:78px;width:132px;height:132px;border:2px solid #e25544;border-radius:50%"></div>
      <div style="position:absolute;right:122px;top:104px;font-size:72px;font-weight:850">W</div>
      <div class="rule accent-green" style="right:84px;bottom:76px;width:112px;height:12px"></div>
    </main>`,
})

await browser.close()
