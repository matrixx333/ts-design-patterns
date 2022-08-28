(() => {
    interface Strategy {
        doAlgorithm(data: string[]): string[];
    }

    class Context {
        private strategy: Strategy;

        constructor(strategy: Strategy) {
            this.strategy = strategy;
        }

        setStrategy(strategy: Strategy) {
            this.strategy = strategy;
        }

        doSomeBusinessLogic(): void {
            console.log(`Context: Sorting data using the strategy (not sure how it'll do it)`);
            const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
            console.log(result.join(','));
        }
    }

    class ConcreteStrategyA implements Strategy{
        doAlgorithm(data: string[]): string[] {
            return data.sort();
        }
    }

    class ConcreteStrategyB implements Strategy {
        doAlgorithm(data: string[]): string[] {
            return data.reverse();
        }

    }

    const context = new Context(new ConcreteStrategyA());
    console.log(`Client: Strategy is set to normal sorting.`);
    context.doSomeBusinessLogic();

    console.log('');

    console.log('Client: Strategy is set to reverse sorting.');
    context.setStrategy(new ConcreteStrategyB());
    context.doSomeBusinessLogic();
})();