const moduleA = {
    state: {
        outputData: {}
    },
    getters: {
        getOutputData: state => {
            return state.outputData
        },
    },
    mutations: {
        setOutputData: (state, payload) => {
            const { data } = payload;
            state.outputData = data;
        }
    },
    actions: {},
}

export default moduleA
