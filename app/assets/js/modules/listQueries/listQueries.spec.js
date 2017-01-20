import {expect, assert} from "chai";
import "./../../main-test";
import {listQueries} from "./listQueries";

describe('listQueries', () => {

  it('should have a init method', () => {
    expect(listQueries().init).to.exist;
  });
  it('should have a destroy method', () => {
    expect(listQueries().destroy).to.exist;
  });
});
