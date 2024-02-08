export class ToggleBg {
  static addTaskBg = (e, selector) => {
    const el = e.target.closest("li");
    el.classList.add(selector);
  };

  static removeTaskBg = (e, selector) => {
    const el = e.target.closest("li");
    el.classList.remove(selector);
  };
}
