import { describe, expect, it } from "vitest";
import { Obj2 } from ".";
import { produce } from "..";

describe.concurrent("try returning directly from the producer", () => {
  it("can return the same type", async () => {
    const myObj: Obj2<number>[] = [
      {
        prop: {
          sub: 1,
        },
      },
    ];
    const result = produce(myObj, (draft) => {
      return [
        {
          prop: {
            sub: draft[0].prop.sub + 1,
          },
        },
      ];
    });
    expect(myObj).not.toBe(result);
    expect(result[0].prop.sub).toBe(2);
  });
  it("can return a different type", async () => {
    const myObj: Obj2<number>[] = [
      {
        prop: {
          sub: 1,
        },
      },
    ];
    const result = produce<typeof myObj, Obj2<string>[]>(myObj, (draft) => {
      return [
        {
          prop: {
            sub: "test" + draft[0].prop.sub,
          },
        },
      ];
    });
    expect(myObj).not.toBe(result);
    expect(result[0].prop.sub).toBe("test1");
  });
  it("can return and modify the draft in the same producer", async () => {
    const myObj: Obj2<number>[] = [
      {
        prop: {
          sub: 1,
        },
      },
    ];
    const result = produce<typeof myObj, Obj2<number>>(myObj, (draft) => {
      draft[0].prop.sub++;
      return draft[0];
    });
    expect(myObj).not.toBe(result);
    expect(myObj[0]).not.toBe(result);
    expect(result.prop.sub).toBe(2);
  });
});