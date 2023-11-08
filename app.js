import{
    createApp,
    ref,
}from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
    setup(){

        const amount = ref();
        const percentageTip = ref();
        const tipAmount = ref();
        const total= ref();

        const calculateTip = ()=>{
            tipAmount.value = +amount.value * (percentageTip.value / 100);
            total.value = +amount.value + tipAmount.value;
        }


        return{
            amount,
            percentageTip,
            tipAmount,
            total,
            calculateTip
        }
    }
}).mount("#app");