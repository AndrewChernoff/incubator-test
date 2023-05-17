import appSlice, { initialize } from "../appSlice"

test('should be initialized', () => {

    const previousState = {
        isInit: false as boolean
    }

    const action = initialize()

    const newState = appSlice(previousState, action)
    
    expect(newState.isInit).toBe(true)
  })
  