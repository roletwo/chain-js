import { cli as c } from "@mosteast/chain";
import { read } from "../chain/read";

export const cli = c.command({
  command: "read [page]",
  describe: "Verify a block with hash",
  builder(argv) {
    return argv.positional("page", {
      describe: "page number, default: 0",
      type: "number",
    });
  },
  async handler({ page }) {
    await read(page as number, true);
  },
});
