const calBtn = document.getElementById("calbtn");
const resetBtn = document.getElementById("resetbtn");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultArea = document.getElementById("result");

const calculateBmi = (e) => {
  e.preventDefault();

  const heightValue = heightInput.value;
  const weightValue = weightInput.value;

  const bmi = weightValue / (heightValue * heightValue);

  if(isNaN(bmi)){
      async function presentAlert(){
        const alert = document.createElement('ion-alert');
        alert.header = "Warning!";
        alert.message = "Not a number, please input correct numbers!!";
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        await alert.present();
      }
      presentAlert();
      return;
  }

  console.log(bmi);

  const resultElement = document.createElement("ion-card");
  resultElement.innerHTML = `
    <ion-card-header>
        <ion-card-title>BMI Result</ion-card-title>
    </ion-card-header>

    <ion-card-content>
        ${bmi}
    </ion-card-content>
    `;

  resultArea.append(resultElement);
};

const resetFunc = () => {
  heightInput.value = "";
  weightInput.value = "";
};

calBtn.addEventListener("click", calculateBmi);
resetBtn.addEventListener("click", resetFunc);
