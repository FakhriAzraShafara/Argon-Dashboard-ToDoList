import { defineStore } from "pinia";
import * as s$todo from '@/services/dashboard/todo'

const d$todo = defineStore({
    id: 'todo',
    state: () => ({
        list: [],
    }),
    actions: {
        async a$list() {
            try {
                const { data } = await s$todo.list();
                this.list = data;
            } catch (e) {
                console.error('actions todo get list error', e);
                this.list = [];
                throw e;
            }
        },
        async a$update(id, updatedItem, body) {
            try {
                await s$todo.update(id, updatedItem, body);
            } catch (e) {
                console.error('actions todo update error', e);
                throw e;
            }
        },
        async a$getById(id) {
            try {
                await s$todo.getById(id);
            } catch (e) {
                console.error('actions todo update error', e);
                throw e;
            }
        },
        async a$add(body) {
            try {
                await s$todo.add(body);
            } catch (e) {
                console.error('actions todo add error', e);
                throw e;
            }
        },
        async a$delete(id) {
            try {
                await s$todo.del(id);
            } catch (e) {
                console.error('actions todo delete error', e);
                throw e;
            }
        },
    },
    getters: {
        g$list: ({ list }) => list,
    },
});

export default d$todo;