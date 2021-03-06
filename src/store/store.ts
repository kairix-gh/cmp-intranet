import { reactive, readonly, inject } from "vue";
import {
    Resource, ResourceList,
    NewsPost, NewsPostList,
    CalendarEvent, CalendarEventList,
    BrandWaiver,
    TaskItem,
    LoyaltyMemberInfo, LoyaltyMemberArrival, LoyaltyMemberTier,
    CreativeResource,
    UserProfile,
} from "@/types/types"

import { mockResources } from "@/mockups/resources"
import { mockNewsPosts } from "@/mockups/newsposts"
import { mockCalendarEvents } from "@/mockups/calendarevents";
import { mockWaivers } from "@/mockups/waviers"
import { mockTasks } from "@/mockups/tasks"
import { mockLoyaltyArrivals } from "@/mockups/loyaltyMemberArrivals"
import { mockLoyaltyMembers } from "@/mockups/loyaltyMembers"
import { mockLoyaltyMemberTiers } from "@/mockups/loyaltyMemberTiers"
import { mockCreativeResources } from "@/mockups/creativeResources"
import { mockUserProfiles } from "@/mockups/userProfiles"

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

        return this.state.resources.all.filter(r => r.Category.toLowerCase() == category.toLowerCase());
    }

    public getNewsPosts(count?: number): Array<NewsPost> {
        if (!this.state.newsPosts.loaded) {
            return []
        }

        const sortedPosts = this.state.newsPosts.all.sort((a, b) => Date.parse(b.PublishDate) - Date.parse(a.PublishDate));
        if (count === undefined) {
            return sortedPosts;
        } else {
            return sortedPosts.slice(0, 0 + count);
        }
    }

    public getNewsPost(id: number) {
        if (!this.state.newsPosts.loaded) {
            return null;
        }

        const post = this.state.newsPosts.all.find(e => e.Id == id);

        return post;
    }

    public getCalendarEvents(count?: number): Array<CalendarEvent> {
        if (!this.state.calendarEvents.loaded) {
            return [];
        }

        const sortedEvents = this.state.calendarEvents.all.sort((a, b) => Date.parse(b.StartDate) - Date.parse(a.StartDate));
        if (count === undefined) {
            return sortedEvents;
        } else {
            return sortedEvents.slice(0, 0 + count);
        }
    }

    // eslint-disable-next-line
    public getWaiversForProperty(propertyCode?: string): BrandWaiver[] {
        return mockWaivers;
    }

    // eslint-disable-next-line
    public getTasksForProperty(propertyCode?: string): TaskItem[] {
        return mockTasks;
    }

    public getLoyaltyTiers(): LoyaltyMemberTier[] {
        return mockLoyaltyMemberTiers;
    }

    // eslint-disable-next-line
    public getLoyaltyMemberInfo(searchCriteria: string): LoyaltyMemberInfo[] {
        return mockLoyaltyMembers;
    }

    // eslint-disable-next-line
    public getLoyaltyMemberArrivals(propertyCode?: string, arrivalDate?: Date): LoyaltyMemberArrival[] {
        return mockLoyaltyArrivals;
    }

    // eslint-disable-next-line
    public getCreativeResourcesForProperty(propertyCode?: string): CreativeResource[] {
        return mockCreativeResources;
    }

    // eslint-disable-next-line
    public getUserProfilesForProperty(propertyCode?: string): UserProfile[] {
        return mockUserProfiles;
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