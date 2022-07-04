

export const ACTION = {
    ADD_TO_CART: "add_to_cart",
    REMOVE_FROM_CART: "remove_from_cart",
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };
  

export function CartReducer(state, action) {
    const newState = [...state];
    const productIndex = newState.findIndex((val) => val.id == action.payload.id);
  
    switch (action.type) {
      case ACTION.ADD_TO_CART:
        if (productIndex < 0) {
          newState.push(action.payload);
        } else newState[productIndex].quantity++;
        return newState;
      case ACTION.INCREMENT:
        newState[action.payload.idx].quantity++;
        return newState;
      case ACTION.DECREMENT:
        if (newState[action.payload.idx].quantity > 1)
          newState[action.payload.idx].quantity--;
        else return newState.filter((item) => item.id !== action.payload.id);
        return newState;
      case ACTION.REMOVE_FROM_CART:
        return newState.filter((item) => item.id !== action.payload);
      default:
        return;
    }
  }

  