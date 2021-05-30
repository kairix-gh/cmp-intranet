export interface Resource {
    Id: number,
    Title: string,
    Category: string,
    Subcategory: string | null,
    Pinned: boolean,
    File: SPFileObject,
}

export interface SPFileObject {
    Name: string,
    ServerRelativeUrl: string,
}

export interface SPUrlObject {
    Description: string,
    Url: string,
}

export interface NewsPost {
    Id: number,
    Title: string,
    Category: string,
    ImageUrl: SPUrlObject,
    PublishDate: string,
    Post: string,
    Description: string,
    Emphasized: boolean,
}

export interface CalendarEvent {
    Id: number,
    Title: string,
    Description: string,
    StartDate: string,
    EndDate: string,
    Url: SPUrlObject
}

export interface ResourceList {
    all: Array<Resource>
    loaded: boolean
}

export interface NewsPostList {
    all: Array<NewsPost>
    loaded: boolean
}

export interface CalendarEventList {
    all: Array<CalendarEvent>
    loaded: boolean
}

export interface BrandWaiver {
    approved: string
    standard: string
    justification: string
    expiration: string
}

export interface TaskItem {
    task: string
    assignedBy: string
    due: string
}

export interface LoyaltyMemberInfo {
    name: string
    id: string
    email: string
    level: string
    balance: number
}

export interface LoyaltyMemberArrival {
    name: string
    id: string
    email: string
    level: string
    balance: number
    arrival: string
    departure: string
}

export interface LoyaltyMemberTier {
    name: string
    style: string
}

export interface CreativeResource {
    name: string
    category: string
    description: string
    creator: string
    created: string
    url: string
}

export interface UserProfile {
    id: number
    firstName: string
    lastName: string
    role: string
    title: string | null
    brandEmail: string | null
    personalEmail: string
    phone: number | null
}