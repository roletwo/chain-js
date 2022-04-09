import { read } from "./read";

describe("read", () => {
  it("common", async () => {
    const r = await read();
    expect(r.ok).toBeTruthy();
    expect(r.data.count).toBeTruthy();
  });

  it("with page argument", async () => {
    const r = await read(10);
    expect(r.ok).toBeTruthy();
    expect(r.data.count).toBeTruthy();
  });
});
