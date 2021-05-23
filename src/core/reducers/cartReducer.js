const initState = {
  catalog: [
    {
      title: "Cat",
      src: "/assets/cat1.webp",
    },
    {
      title: "Dog",
      src: "/assets/dog1.jpeg",
    },
    {
      title: "Cat",
      src: "/assets/cat2.webp",
    },
    {
      title: "Dog",
      src: "/assets/dog2.jpeg",
    },
    {
      title: "cat",
      src: "/assets/cat3.jpeg",
    },
    {
      title: "Dog",
      src: "/assets/dog3.jpeg",
    },
  ],
  itemsInCart: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 15,
    };
  } else {
    return state;
  }
};

export default cartReducer;
