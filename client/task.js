const Task = {
    data() {
        return {
            input: true,
            local: this.task
        }
    },
    template: 
    `
        <li>
            <template v-if="!input">
                <span @dblclick="input=true"> {{task}} </span>
                <button @click="remove"> Remove </button>
                <button @click="input=true"> Modify </button>
            </template>
            <template v-else>
                <input type="text" v-model.trim="local" 
                  @keyup.enter="modify" @keyup.esc="escape"
                  ref="refInput" />
                <button @click="modify"> Ok </button>
                <button @click="clear"> Clear </button>
            </template>
        </li>
    `,
    props: ["task", "index"],
    methods: {
        remove() {
            // process the click on the Remove button
            this.$emit("remove", { index: this.index });
        },
        modify() {
            let value = this.local;
            // value entered in the field delete this field
            this.input = false;
            // update task in list
            this.$emit("modify", { index: this.index, value: value});
        },
        clear() {
            let value = "";
            // value entered in the field delete this field
            this.local = value;
        },
        escape() {
            this.local = this.task;

            this.input = false;
        }
    },
    emits: ["remove", "modify"],
    mounted() {
        // check that the ref="refInput" attribute exists, and
        // if so, give focus to the input field
         if (this.$refs.refInput) this.$refs.refInput.focus();
    },
    updated() {
        // check that the ref="refInput" attribute exists, and
        // if so, give focus to the input field
         if (this.$refs.refInput) this.$refs.refInput.focus();
    }
}

export default Task;