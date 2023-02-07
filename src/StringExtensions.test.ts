import { v4 as uuid } from "uuid";
import "./StringExtensions.ts";

describe("contains", () => {
  it("value", () => {
    const text = uuid().toString();
    const substring = text.substring(2, 5);

    expect((text as any).contains(substring)).toBeTruthy();
  });

  it("value, case not ignored", () => {
    const text = uuid().toString();
    const substring = text.substring(2, 5);

    expect((text as any).contains(substring, false)).toBeTruthy();
  });

  it("value not", () => {
    const text = uuid().toString();
    const substring = uuid().toString();

    expect((text as any).contains(substring)).toBeFalsy();
  });

  it("value not, case not ignored", () => {
    const text = uuid().toString().toLowerCase();
    const substring = text.substring(2, 5).toUpperCase();

    expect(text.contains(substring, false)).toBeFalsy();
  });
});
