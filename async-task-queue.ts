
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

