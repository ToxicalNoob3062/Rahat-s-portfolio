const phrases = ["a web developer", "a frontend designer", "a backend achitecturer", "a programmer!"];
export function test(array = phrases) {
  let i = 1;
  let j = 0;
  const text_content = document.getElementById("typewriter_text__SvPl1");
  let start = setInterval(() => operator(true), 100);
  function operator(swtch) {
    const my = "" + array[j].slice(0, i);
    text_content.innerHTML = my;
    swtch ? i++ : i--;
    if (i > array[j].length) {
      clearInterval(start);
      i--;
      if (j < array.length - 1) start = setInterval(() => operator(false), 60);
    }
    if (i < 1) {
      j++;
      clearInterval(start);
      start = setInterval(() => operator(true), 100);
    }
  }
}
