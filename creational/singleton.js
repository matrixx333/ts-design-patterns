"use strict";
(() => {
    class Singleton {
        constructor() { }
        static getInstance() {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }
        someBusinessLogic() {
            console.log('Some business logic.');
        }
    }
    function clientCode() {
        const s1 = Singleton.getInstance();
        const s2 = Singleton.getInstance();
        if (s1 === s2) {
            console.log('Singleton works! both variables contain the same instance.');
        }
        else {
            console.log('Singleton failed, variables contain different instances.');
        }
    }
    clientCode();
})();
