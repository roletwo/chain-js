import { read } from "./read";

describe("read", () => {
  it("common", async () => {
    const r = await read();
    console.log(r);
    expect(r.list).toBeTruthy();
    expect(r.count).toBeTruthy();
  });

  it("with page argument", async () => {
    const r = await read(10);
    expect(r.list).toBeTruthy();
    expect(r.count).toBeTruthy();
  });
});
