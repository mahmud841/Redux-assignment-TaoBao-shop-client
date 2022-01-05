import React from "react";
import {render} from "@testing-library/react";
import useFirebase from "./useFirebase"

describe("useFirebase", () => {
it("  When isLoading is true then the loading text should be displaying", () => {
render(<useFirebase isDrawnerOpen={false} closeDrawer={jest.fn()}/>)
});
// it.skip("When isLoading is false and data exist then render the list of data")
});