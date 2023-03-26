const adviceId = document.querySelector("#advice-id-number");
const adviceText = document.querySelector(".advice-text");
const changeAdviceButton = document.querySelector(".change-advice");

const getAdvice = async () => {
    try {
        const res = await axios.get("https://api.adviceslip.com/advice");
        adviceText.innerHTML =`“${res.data.slip.advice}”`;
        adviceId.innerHTML = res.data.slip.id;
    } catch (err) {
        console.log("ERROR:", err);
    }
}
changeAdviceButton.addEventListener("click", () => {
    getAdvice();
})