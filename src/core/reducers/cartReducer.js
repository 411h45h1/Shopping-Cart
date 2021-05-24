import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/types/cartActionTypes";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const initState = {
  catalog: [
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Kitten",
      src: "/assets/cat1.webp",
      price: 350,
      desc: placeholderText,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Puppy",
      src: "/assets/dog1.jpeg",
      price: 400,
      desc: placeholderText,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Kitten",
      src: "/assets/cat2.webp",
      price: 350,
      desc: placeholderText,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "CatDog",
      src: "/assets/dog2.jpeg",
      price: 1500,
      desc: placeholderText,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Kittens",
      src: "/assets/cat3.jpeg",
      price: 700,
      desc: placeholderText,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Puppies",
      src: "/assets/dog3.jpeg",
      price: 650,
      desc: placeholderText,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Doge",
      src: "/assets/doge.jpeg",
      price: 650,
      desc: placeholderText,
    },
  ],
  itemsInCart: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let isolatedItem = state.catalog.find((item) => item.id === action.id);
    let isItemInCart = state.itemsInCart.find((item) => action.id === item.id);

    if (isItemInCart) {
      isolatedItem.quantity += 1;
      return {
        ...state,
        total: state.total + isolatedItem.price,
      };
    } else {
      isolatedItem.quantity = 1;

      return {
        ...state,
        itemsInCart: [...state.itemsInCart, isolatedItem],
        total: state.total + isolatedItem.price,
      };
    }
  }

  if (action.type === REMOVE_FROM_CART) {
    let removeTarget = state.itemsInCart.find((item) => action.id === item.id);
    let cartWithoutTarget = state.itemsInCart.filter(
      (item) => action.id !== item.id
    );
    return {
      ...state,
      itemsInCart: cartWithoutTarget,
      total: state.total - removeTarget.price * removeTarget.quantity,
    };
  } else {
    return state;
  }
};

export default cartReducer;
