import {Head} from "next/document"
import {readFileSync} from "fs"
import {join} from "path"
import React from "react";
import fs from "fs";

const exportDir = 'dist'; // I don't use "out"

export class NextHeadWithInlineCss extends Head {

	getCssLinks() {
		//return super.getCssLinks();
		const {assetPrefix, files} = this.context._documentProps;
		if (!files || files.length === 0) return null;

		// Return parent version if DEV/HMR mode
		// if (this.context._documentProps.isDevelopment) {
		// 	// @ts-ignore
		// 	return super.getCssLinks();
		// }

		// Inline CSS
		return files.filter((file: any) => /\.css$/.exec(file)).map((file: any) => {

			const filePath = join(process.cwd(), exportDir, '_next', file);

			if (!fs.existsSync(file)) {
				console.warn('[getCssLinks] missing file', filePath);

				return (
				<link
					key={file}
					nonce={this.props.nonce}
					rel="stylesheet"
					href={`${assetPrefix}/_next/${file}`}
					crossOrigin={this.props.crossOrigin}
				/>
				);

			}

			return (
			<style
				key={file}
				nonce={this.props.nonce}
				data-href={`${assetPrefix}/_next/${file}`}
				dangerouslySetInnerHTML={{
					__html: readFileSync(join(process.cwd(), exportDir, '_next', file), "utf-8")
				}}
			/>

		)
			}
		
		)
	}
}