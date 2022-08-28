(() => {
    class Target {
        request(): string {
            return 'Target: The default target\'s behavior';
        }
    }
    
    class Adaptee {
        specificRequest(): string {
            return '.eetpadA eht fo roivaheb laicepS';
        }
    }
    
    class Adapter extends Target {
        constructor(private adaptee: Adaptee) {
            super();
        }
    
        request(): string {
            const result = this.adaptee.specificRequest().split('').reverse().join('');
            return `Adapter: (TRANSLATED) ${result}`;
        }
    }
    
    function clientCode(target: Target) {
        console.log(target.request());
    }
    
    const target = new Target();
    clientCode(target);
    
    console.log('');
    
    const adaptee = new Adaptee();
    console.log('Client: The adaptee class has a weird interface. See, I don\'t understandit:');
    console.log(`Adaptee: ${adaptee.specificRequest()}`);
    
    console.log('');
    
    console.log('Client: But I can work with it via the Adapter:');
    const adapter = new Adapter(adaptee);
    clientCode(adapter);

})();