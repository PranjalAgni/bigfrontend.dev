
class AsyncTaskQueue {
    private concurrency: number;
    private asyncQ: any[];
    private numRunning: number;
    constructor(concurrency: number) {
        // Initialize the queue with the specified concurrency limit
        this.concurrency = concurrency;
        this.asyncQ = [];
        this.numRunning = 0;
    }

    queue(task: () => Promise<void>) {
        this.asyncQ.push(task);
        this.pollRunner();
    }

    smartPollRunner() {
        // What steps need to be taken here??
        // 1. Instead of incr/decr vars we can do something else
        // think think think

        // concurrent queue
        // waiting queue
        
        
        // waiting queue mein add kra dia
        // we check if concurrent queue slot is empty 
        // fill the concurrent queue
        // concurrent queue starts executing things once done it removes tasks from itself


        // we need some sort of constant checker
        // which monitors concurrent queue asap a slot is empty
        // we transfer task from waiting queue to concurrent queue

        // ?? reading from a queue only

        if (this.asyncQ.length > 0) {
            const task = this.asyncQ.shift();
            this.run(task);

        }
    }

    pollRunner() {
        if (this.numRunning <= this.concurrency) {
            this.numRunning += 1;
            const task = this.asyncQ.shift();
            this.run(task);
        } else {
            // max concurrent task running right now
            // what we can do here as we have something in queue
            // pollRunner called again maybe???

            const totalTasks = this.asyncQ.length;
            if (totalTasks > 0) {
                // we have something 
                setTimeout(this.pollRunner, 100);
            }
        }
    }

    run(task: () => Promise<void>) {
        task().finally(() => {
            this.numRunning -= 1;
        });
    }
}

