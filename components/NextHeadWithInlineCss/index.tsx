// https://github.com/vercel/next.js/blob/a107dcb73268500e926856a224767788bcfa12fd/packages/next/pages/_document.tsx
// https://stackoverflow.com/questions/57057947/how-to-inline-css-in-the-head-tag-of-a-nextjs-project
import Document, {
	Main,
	NextScript,
	Head,
	Html
  } from 'next/document'
  
  import {readFileSync} from "fs"
  import {join} from "path"
import { ReactElement } from 'react';
  

  type DocumentFiles = {
	sharedFiles: readonly string[]
	pageFiles: readonly string[]
	allFiles: readonly string[]
  }

  function dedupe<T extends { file: string }>(bundles: T[]): T[] {
	const files = new Set<string>()
	const kept: T[] = []
  
	for (const bundle of bundles) {
	  if (files.has(bundle.file)) continue
	  files.add(bundle.file)
	  kept.push(bundle)
	}
	return kept
  }


  export class InlineStylesHead extends Head {
	getCssLinks(files: DocumentFiles): JSX.Element[] | null {
		const {
		  assetPrefix,
		  devOnlyCacheBusterQueryString,
		  dynamicImports,
		} = this.context;
	  const cssFiles = files.allFiles.filter((f) => f.endsWith('.css'))
	  const sharedFiles = new Set(files.sharedFiles)
  
	  // Unmanaged files are CSS files that will be handled directly by the
	  // webpack runtime (`mini-css-extract-plugin`).
	  let dynamicCssFiles = dedupe(
		dynamicImports.filter((f) => f.file.endsWith('.css'))
	  ).map((f) => f.file)
	  if (dynamicCssFiles.length) {
		const existing = new Set(cssFiles)
		dynamicCssFiles = dynamicCssFiles.filter(
		  (f) => !(existing.has(f) || sharedFiles.has(f))
		)
		cssFiles.push(...dynamicCssFiles)
	  }
  
	  let cssLinkElements: JSX.Element[] = [];
	  cssFiles.forEach((file) => {
  
		if (!process.env.__NEXT_OPTIMIZE_CSS) {
		  cssLinkElements.push(
			<style
			  key={file}
			  data-href={`${assetPrefix}/_next/${encodeURI(
				file
			  )}${devOnlyCacheBusterQueryString}`}
			  dangerouslySetInnerHTML={{
				__html: readFileSync(join(process.cwd(), '.next', file), 'utf-8'),
			  }}
			/>
		  )
		}
  
		cssLinkElements.push(
		  <style
			key={file}
			data-href={`${assetPrefix}/_next/${encodeURI(
			  file
			)}${devOnlyCacheBusterQueryString}`}
			dangerouslySetInnerHTML={{
			  __html: readFileSync(join(process.cwd(), '.next', file), 'utf-8'),
			}}
		  />
		)
	  })
  
	  if (
		process.env.NODE_ENV !== 'development' &&
		process.env.__NEXT_OPTIMIZE_FONTS
	  ) {
		cssLinkElements = this.makeStylesheetInert(
		  cssLinkElements
		) as ReactElement[];
	  }
  
	  return cssLinkElements.length === 0 ? null : cssLinkElements
	}
  
  }