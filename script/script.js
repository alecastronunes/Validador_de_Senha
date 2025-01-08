let passwordInput = document.querySelector(".password");
let progressBar = document.querySelector(".progress .bar");

passwordInput.addEventListener("keyup", () => {
  let strength = 0;

  //  Verifica se a senha contém letras maiúsculas e minúsculas
  strength += renderRule(
    ".low-upper-case",
    passwordInput.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)
  );

  //  Verifica se a senha contém números
  strength += renderRule(".one-numer", passwordInput.value.match(/([0-9])/));

  //  Verifica se a senha contém caracteres especiais
  strength += renderRule(
    ".one-especial-char",
    passwordInput.value.match(/[!@#$%^&*(),.?":{}|<>_+-]/)
  );

  //  Verifica se a senha tem pelo menos 6 caracteres
  strength += renderRule(".min-char", passwordInput.value.length >= 6);

  //   Constrói a barra de progresso
  let percent = Math.floor((strength / 4) * 100);
  progressBar.style.width = `${percent}%`;

  //   if (passwordInput.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
  //     // strength += 1;
  //     renderRule(".low-upper-case", true);
  //   } else {
  //     renderRule(".low-upper-case", false);
  //   }
});

function renderRule(ruleClass, valid) {
  let ruleArea = document.querySelector(ruleClass);
  ruleArea.querySelector(".valid-point").style.backgroundColor = valid
    ? "green"
    : "red";

  return valid ? 1 : 0;
}
