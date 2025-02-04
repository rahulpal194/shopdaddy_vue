import { defineStore } from "pinia";

export const useCurrencyStore = defineStore('currencys', {
    state: () => {
        return {
            currencys: {
                init: "",
                data: [
                    { 
                        dir: "ltr", 
                        name: "USD", 
                        isChecked: true 
                    },
                    { 
                        dir: "rtl", 
                        name: "SAR", 
                        isChecked: false  
                    }
                ]
            }
        }
    },
    getters: {
        currencyDir(state) {
            return state.currencys.init.dir
        },
    },
    actions: {
        defaultCurrency() {
            if(localStorage.getItem('selectcurrency') == null) {
                const selectcurrency = this.currencys.data.find(item => item.isChecked == true);
                localStorage.setItem('selectcurrency', JSON.stringify(selectcurrency));
            }
            const getSelection = localStorage.getItem('selectcurrency');
            const convertObject = JSON.parse(getSelection);
            this.currencys.init = convertObject
        },
        changeCurrency(param) {
            const trueChecking = this.currencys.data.find(item => item.isChecked == true);
            trueChecking.isChecked = false;
            param.isChecked = true;
            localStorage.setItem('selectcurrency', JSON.stringify(param));
            window.location.reload();
        },
    }
})