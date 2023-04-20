import { ComponentService } from "../service/component.service";
import { ErrorService } from "../service/error.service";
import { parseInput } from "../utils/parse-input";
import { validateInputs } from "../utils/validate-input";

export const app = () => {
  const componentService = new ComponentService();
  const errorService = new ErrorService();
  const calTotal = () => {
    errorService.hideError();

    // Parse Input
    // const inputs = [priceInput.value, quantityInput.value, shippingInput.value];
    const inputs = componentService.getInput();
    const numbers = parseInput(...inputs); // [1,2,4] , ...[1,2,4] == 1,2,4

    // Validate Input
    const valid = validateInputs(...numbers);
    //   console.log(valid);
    // pass : caltotal
    // fail : show Error
    if (valid) {
      const [price, quantity, shipping] = numbers;
      const totalPrice = price * quantity + shipping;
      componentService.setPrice(totalPrice);
    } else {
      // showError();
      errorService.showErrorMessage(inputs, numbers);
      resultBox.innerText = "";
    }
  };
  // totalBtn.addEventListener("click", calTotal);
  componentService.onClick(calTotal);
};

// app();

// calTotal
