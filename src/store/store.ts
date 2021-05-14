import { reactive, readonly, inject } from "vue";
import { ResourceList, NewsPostList, CalendarEventList } from "./types"

import { mockResources } from "../mockups/resources"
import { mockNewsPosts } from "../mockups/newsposts"
import { mockCalendarEvents } from "@/mockups/calendarevents";

const initialResourceList = (): ResourceList => ({ all: [], loaded: false })
const initialNewsPostList = (): NewsPostList => ({ all: [], loaded: false })
const initialEventList = (): CalendarEventList => ({ all: [], loaded: false })

const initialState = (): State => ({
    resources: initialResourceList(),
    newsPosts: initialNewsPostList(),
    calendarEvents: initialEventList(),
})

interface State {
    resources: ResourceList,
    newsPosts: NewsPostList,
    calendarEvents: CalendarEventList,
}

class Store {
    protected state: State;

    constructor(initialState: State) {
        this.state = reactive(initialState);
    }

    public getState(): State {
        return readonly(this.state);
    }

    public async loadResources() {
        this.state.resources.all = mockResources;
        this.state.resources.loaded = true;
    }

    public async loadNewsPosts() {
        this.state.newsPosts.all = mockNewsPosts;
        this.state.newsPosts.loaded = true;
    }

    public async loadCalendarEvents() {
        this.state.calendarEvents.all = mockCalendarEvents;
        this.state.calendarEvents.loaded = true;
    }

    public async loadAll() {
        await this.loadResources();
        await this.loadNewsPosts();
        await this.loadCalendarEvents();
    }
}

const store = new Store(initialState());
store.loadAll();

export default store

export const useStore = (): Store => {
    return inject<Store>("store")!;
}