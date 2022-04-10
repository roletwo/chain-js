import { T_block } from "@mosteast/chain/src/type/block";
import { T_page } from "../type/type";
import { post } from "../utility/request";

const base = "https://api.role2.com/";

/**
 * List blocks from public chain
 */
export async function read(
  page?: number,
  cli?: boolean
): Promise<T_page<T_block>> {
  const res = await post(base + "call/block_public/read", {
    page: { index: page },
  });
  const d: any = await res.json();
  if (res.ok) {
    cli && console.info(JSON.stringify(d.data, null, 2));
  } else {
    cli && console.error(d);
    cli && process.exit(1);
  }
  return d.data;
}
