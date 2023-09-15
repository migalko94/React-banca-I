import * as apiModel from "./api";
import * as viewModel from "./account.vm";
import { mapAccountFromVmToApi } from "./account-mapper";

describe("account.mapper specs", () => {
  it("should return an account with same properties", () => {
    // Arrange
    const vmAccount: viewModel.Account = {
      name: "name test",
      type: "type test",
    };

    const expectedApiAccount: apiModel.Account = {
      name: "name test",
      type: "type test",
    };

    // Act
    const result: apiModel.Account = mapAccountFromVmToApi(vmAccount);

    // Assert
    expect(result).toEqual(expectedApiAccount);
  });
});
