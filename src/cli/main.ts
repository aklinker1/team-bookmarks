import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
// @ts-expect-error - path is only for node
import path from "path";
// @ts-expect-error - child_process is only for node
import { execSync } from "child_process";

import * as vite from "vite";

// @ts-expect-error - process is a node type
const cwd: string = process.cwd();

// function vite(command: string) {
//   execSync(`vite ${command}`, { stdio: "inherit", cwd })
// }

// @ts-expect-error - process is a node type
const cli = yargs(hideBin(process.argv))
  .option("config", {
    alias: "c",
    type: "string",
  })
  .option("bookmarks", {
    alias: "b",
    default: "bookmarks.ts",
  });

cli.command(
  "dev",
  "Alias for 'vite dev'",
  (command) => command,
  async ({ bookmarks, config }) => {
    const bookmarksPath = path.resolve(bookmarks);
    const server = await vite.createServer({
      resolve: {
        alias: {
          "~bookmarks": bookmarksPath,
        },
      },
    });
    server.listen();
  }
);

cli.command(
  "build",
  "Alias for 'vite build'",
  (command) => command,
  ({ bookmarks, config }) => {
    const bookmarksPath = path.resolve(bookmarks);
    vite.build();
  }
);

cli.argv;
