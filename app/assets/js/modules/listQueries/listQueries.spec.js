import {expect, assert} from "chai";
import {listQueries} from "./listQueries";


describe('listQueries', () => {
  it('should have a init method', () => {
    expect(deviceReducer(undefined, {})).to.eql([]);
  });
});
