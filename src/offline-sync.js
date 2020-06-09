const offlineSync = (store) => (next) => (action) => {
  try {
    return next(action);
  } finally {
    localStorage.setItem("state", JSON.stringify(store.getState()));
  }
};

export default offlineSync;
