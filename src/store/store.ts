import { reactive, readonly, inject } from "vue";
import { Resource, ResourceList, NewsPostList, CalendarEventList } from "@/types/types"

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

    public getState() {
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

    public getResourceCategories(): string[] {
        if (this.state.resources.loaded) {
            return [... new Set(this.state.resources.all.map(r => r.Category))];
        } else {
            return []
        }
    }

    public getPinnedResources(): Resource[] {
        if (!this.state.resources.loaded) {
            return []
        }

        return this.state.resources.all.filter(r => r.Pinned == true);
    }

    public getResourcesInCategory(category: string): Resource[] {
        if (!this.state.resources.loaded) {
            return [];
        }

        return this.state.resources.all.filter(r => r.Category == category);
    }
}

// Create store and load all data
const store = new Store(initialState());
store.loadAll();

export default store

export const useStore = (): Store => {
    // Return the injected store object, or the store object itself
    return inject<Store>("store") ?? store;
}