import React from "react";
import { create } from "react-test-renderer";
import { Landing } from "../Landing";

it("renders", () => {
  expect(
    create(<Landing repositoryURL="" signIn={async () => undefined} />).toJSON()
  ).toMatchSnapshot();
});
