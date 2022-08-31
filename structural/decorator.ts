(() => {
    interface Component
    {
        operation(): string
    }

    class ConcreteComponent implements Component
    {
        operation(): string {
            return 'ConcreteComponent';
        }
    }

    class Decorator implements Component 
    {
        protected component: Component;

        constructor(component: Component) {
            this.component = component;
        }

        operation(): string {
            return this.component.operation();
        }
    }

    class ConcreteDectoratorA extends Decorator
    {
        operation() {
            return `ConcreteDecoratorA(${super.operation()}})`
        }
    }

    class ConcreteDecoratorB extends Decorator 
    {
        operation() {
            return `ConcreteDecoratorB(${super.operation()})`
        }
    }

    function clientCode(component: Component) {
        console.log(`Result: ${component.operation()}`);
    }

    const simple = new ConcreteComponent();
    console.log(`Client: I've got a simple component:`);
    clientCode(simple);
    console.log(``);

    const decorator1 = new ConcreteDectoratorA(simple);
    const decorator2 = new ConcreteDecoratorB(decorator1);

    console.log(`Client: Now I've got a decorated component:`);
    clientCode(decorator2);
})();