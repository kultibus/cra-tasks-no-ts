export const closeOnEsc = (modal, setModal) => {
  const close = (e) => {
    if (e.key === "Escape") {
      return setModal(false);
    }
  };

  if (modal) document.addEventListener("keydown", close);
  else document.removeEventListener("keydown", close);
};
