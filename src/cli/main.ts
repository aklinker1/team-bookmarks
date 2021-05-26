#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import path from "path";
import * as vite from "vite";

const cli = yargs(hideBin(process.argv))
  .option("config", {
    alias: "c",
    type: "string",
  })
  .option("bookmarks", {
    alias: "b",
    default: "bookmarks.json",
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
    vite.build({
      resolve: {
        alias: {
          "~bookmarks": bookmarksPath,
        },
      },
    });
  }
);

cli.argv;
