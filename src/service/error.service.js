import { validateInputs } from "../utils/validate-input";

export class ErrorService {
  constructor() {
    this.errorbox = document.getElementById("error");
  }

  hideError = () => {
    this.errorbox.classList.add("invisible");
  };

  showError = () => {
    this.errorbox.classList.remove("invisible");
  };

  showErrorMessage = (inputs, number) => {
    const fullErrorMsg = inputs.reduce((msg, str, index) => {
      if (validateInputs(number[index])) {
        msg += "";
      } else {
        msg += `${str} is not a number. `;
      }
      return msg;
    }, "");

    // console.log(fullErrorMsg);
    this.errorbox.innerText = fullErrorMsg;
    this.showError();
  };
}
