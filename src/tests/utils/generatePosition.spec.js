import sinon from "sinon";

import { generatePosition } from "../../utils/generatePosition";
import { config } from "../../Domain/config";

let stub;

describe("generatePosition(pageNumber, idx)", function() {
  beforeEach(function() {
    stub = sinon.stub(config, "RESULTS_PER_PAGE").returns(10);
  });

  afterEach(function() {
    stub.restore();
  });

  it("returns 1 for first element in the first page", function() {
    expect(generatePosition(1, 1)).to.equal(1);
  });

  it("returns 2 for second element in the first page", function() {
    expect(generatePosition(1, 2)).to.equal(2);
  });

  it("returns 11 for first element in the second page", function() {
    expect(generatePosition(2, 1)).to.equal(11);
  });
});
