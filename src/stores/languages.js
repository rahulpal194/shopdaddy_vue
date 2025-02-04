import { defineStore } from "pinia";

export const useLanguageStore = defineStore('languages', {
    state: () => {
        return {
            languages: {
                init: "",
                data: [
                    { 
                        flag: "/images/flag/united-states.png", 
                        format: "en", 
                        name: "english", 
                        dir: "ltr", 
                        tag: "en-US", 
                        currency: "USD", 
                        isChecked: true 
                    },
                    { 
                        flag: "/images/flag/saudi-arabia.png", 
                        format: "ar", 
                        name: "العربية", 
                        dir: "rtl", 
                        tag: "ar-SA", 
                        currency: "SAR", 
                        isChecked: false  
                    }
                ]
            }
        }
    },
    getters: {
        langFormat() {
            const formatName = localStorage.getItem('selectFormat')
            return formatName
        },
        langTag() {
            const tagName = localStorage.getItem('selectTag')
            return tagName
        },
        langDir(state) {
            return state.languages.init.dir
        },
    },
    actions: {
        defaultLanguage() {
            if(localStorage.getItem('selectLang') == null) {
                const selectLang = this.languages.data.find(item => item.isChecked == true);
                localStorage.setItem('selectLang', JSON.stringify(selectLang));
                localStorage.setItem('selectFormat', selectLang.format);
                localStorage.setItem('selectTag', selectLang.tag);
            }
            console.log("ok default");
            
            const getSelection = localStorage.getItem('selectLang');
            const convertObject = JSON.parse(getSelection);
            this.languages.init = convertObject
        },
        changeLanguage(param) {
            const trueChecking = this.languages.data.find(item => item.isChecked == true);
            trueChecking.isChecked = false;
            param.isChecked = true;
            console.log("ok change");
            localStorage.setItem('selectLang', JSON.stringify(param));
            localStorage.setItem('selectFormat', param.format);
            localStorage.setItem('selectTag', param.tag);
            window.location.reload();
        },
    }
})