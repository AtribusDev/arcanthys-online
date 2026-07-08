import esbuild from "esbuild";
import fs from "fs";
import path from "path";

const srcPath = ".quartz/plugins/graph/src/components/scripts/graph.inline.ts";
let text = fs.readFileSync(srcPath, "utf8");
text = text.replace(/^export default /gm, "");
text = text.replace(/^export /gm, "");

const resolveDir = path.dirname(srcPath);

const result = await esbuild.build({
  stdin: { contents: text, loader: "ts", resolveDir, sourcefile: srcPath },
  write: false,
  bundle: true,
  minify: true,
  platform: "browser",
  format: "esm",
  target: "es2020",
  sourcemap: false,
  external: ["http://*", "https://*"],
});

const js = result.outputFiles?.[0]?.text;
fs.writeFileSync("/tmp/graph_inline_new.js", js);
console.log("OK, length:", js.length);
