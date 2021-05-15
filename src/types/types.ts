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