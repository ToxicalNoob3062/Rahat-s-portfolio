export const scroll = (title, stack) => {
  const latest = document.querySelector(`.${title} .c-${stack}`);
  const top = document.querySelector(`.${title} .top`);
  const mid = document.querySelector(`.${title} .middle`);
  const bottom = document.querySelector(`.${title} .bottom`);
  latest.classList.remove("hidden");
  latest.classList.add("bottom");
  bottom.classList.add("middle");
  bottom.classList.remove("bottom");
  mid.classList.add("top");
  mid.classList.remove("middle");
  top.classList.remove("top");
  top.classList.add("hidden");
};

export const clearRepeatation = (rep) => {
  console.log("clearing");
  clearInterval(rep);
};
