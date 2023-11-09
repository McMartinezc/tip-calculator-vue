import{
    createApp,
    ref,
}from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
    setup(){

        const billAmount = ref("");
        const percentageTip = ref("");
        const tipAmount = ref("");
        const total= ref("");

        const calculateTip = ()=>{
            tipAmount.value = billAmount.value * (percentageTip.value / 100);
            total.value = billAmount.value + tipAmount.value;
        }


        return{
            billAmount,
            percentageTip,
            tipAmount,
            total,
            calculateTip
        }
    }
}).mount("#app");