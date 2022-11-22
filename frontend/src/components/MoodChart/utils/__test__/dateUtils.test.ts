import { timestampToHumanReadableDate } from "../dateUtils";

const timestamp = "2019-04-23T10:53:13+01:00";
const timestamp2 = "2020-02-29T23:50:00+00:00";

describe("dateUtils tests", () => {
  it("should convert dates with questionable quality", () => {
    expect(timestampToHumanReadableDate(timestamp)).toEqual("23/4/2019");
    expect(timestampToHumanReadableDate(timestamp2)).toEqual("29/2/2020");
  });
});
