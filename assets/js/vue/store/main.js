import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

import moduleA from "@jsDist/vue/store/modules/ModuleA";

const
    store = createStore({
        state: {
            routeName: 'home',
        },
        getters: {
            getRouteName: state => {
                return state.routeName
            }
        },
        mutations: {
            setRouteName: (state, payload) => {
                const {routeName} = payload;
                state.routeName = routeName;

            },
        },
        actions: {},
        plugins: [createPersistedState({storage: window.localStorage})],
        modules: {
            moduleA: moduleA,
        }
    });

export default store;
