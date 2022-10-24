// 自定义window外部跳转链接方法


// import Pdfh5 from "pdfh5";
// import "pdfh5/css/pdfh5.css";
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            skip: () => {
                // setTimeout(() => {
                //     const pdfh5 = new Pdfh5("#demo", {
                //         pdfurl: "./1.pdf"
                //       });
                //       console.log(pdfh5,'1')  
                // }, 1000);
                
            }
        }
    }
})