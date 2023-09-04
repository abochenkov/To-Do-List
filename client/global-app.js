import Element from "./task.js";

const GlobalApp = {
    data() {
        return {
            tasks: []
        }
    },
    components: {
        Task: Element
    },
    
    template: 
    `
        <button id="add" @click="add()">Add Task</button>
        <ul>
            <Task v-for="(task, index) in tasks"
            :key="index" :task="task" 
            :index="index" @remove="remove($event)"
            @modify="modify($event)" />
        </ul>
    `,
    methods: {
        add() {
            let task = "Task " + (this.tasks.length + 1);
            this.tasks.push(task);
        },
        remove(params) {
            let index = params.index;
            this.tasks.splice(index, 1); //delete task in array
        },
        modify(params) {
            let index = params.index;
            let value = params.value;
            this.tasks[index] = value; //new task value
        }
    }
}

export default GlobalApp;