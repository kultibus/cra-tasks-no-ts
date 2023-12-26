export const close = (e, callback) => {
  if (e.key === "Escape") {
    callback(false);
  }
};


