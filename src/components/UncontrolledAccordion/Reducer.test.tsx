import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";
import {action} from "@storybook/addon-actions";

test("reducer should change value to opposite value", () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
    expect(() => reducer(state, {type: "FAKE-TYPE"})).toThrowError()
})

export default 1;