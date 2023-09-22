import * as apiModel from "./api/account.api-model";

import { mapAccountFromApiToVm } from "./account.mapper";

describe("pages/movement-list/account.mapper specs", () => {
  describe("mapAccountFromApiToVm", () => {
    it("should return empty object when it feeds empty object", () => {
      // Arrange
      const account: any = {};

      // Act
      const result = mapAccountFromApiToVm(account);

      // Assert
      expect(result).toEqual({});
    });

    it("should return the same object but using VM model structure", () => {
      // Arrange
      const account: apiModel.Account = {
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        type: "1",
        name: "Gastos mes",
        balance: 1490,
        lastTransaction: "2019-12-09T21:30:00",
      };

      // Act
      const result = mapAccountFromApiToVm(account);

      // Assert
      expect(result).toEqual({
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "Gastos mes",
        balance: 1490,
      });
    });
  });
});
