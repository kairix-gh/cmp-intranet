export { HotelMenuItems }

export interface HotelMenuItem {
    name: string;
    subItems: HotelMenuSubItem[] | null;
    action?: HotelMenuAction | null;
}

export interface HotelMenuSubItem {
    name: string;
    action: HotelMenuAction | null;
}

export interface HotelMenuAction {
    isRoute: boolean;
    route: unknown | null;
    action: HotelPanelContent | null;
}

export interface HotelPanelContent {
    title: string;
    componentId: string;
}

const HotelMenuItems = [
    {
        name: "Loyalty Program",
        subItems: [
            {
                name: "Enroll New Member",
                action: {
                    isRoute: false,
                    route: null,
                    action: {
                        title: "Loyalty Member Enrollment",
                        componentId: "LoyaltyEnrollmentPanelContent",
                    },
                }
            },
            {
                name: "Member Lookup",
                action: {
                    isRoute: false,
                    route: null,
                    action: {
                        title: "Loyalty Member Lookup",
                        componentId: "LoyaltyMemberLookupPanelContent"
                    },
                }
            },
            {
                name: "Member Arrivals",
                action: {
                    isRoute: false,
                    route: null,
                    action: {
                        title: "Loyalty Member Arrivals",
                        componentId: ""
                    },
                }
            },
            {
                name: "Manual Member Stay",
                action: {
                    isRoute: false,
                    route: null,
                    action: {
                        title: "Process Manual Stay",
                        componentId: ""
                    },
                }
            }
        ],
    },
    {
        name: "Reporting",
        subItems: [
            {
                name: "Revenue Analysis",
                action: {
                    isRoute: true,
                    route: null,
                    action: null,
                }
            },
            {
                name: "Market Share Report",
                action: {
                    isRoute: true,
                    route: null,
                    action: null,
                }
            }
        ],
    },
    {
        name: "Brand Waivers",
        subItems: null,
        action: {
            isRoute: true,
            route: null,
            action: null
        }
    },
    {
        name: "Improvement Plans",
        subItems: null,
        action: {
            isRoute: true,
            route: null,
            action: null
        }
    },
    {
        name: "Branding",
        subItems: null,
        action: {
            isRoute: true,
            route: null,
            action: null
        }
    },
    {
        name: "User Management",
        subItems: null,
        action: {
            isRoute: true,
            route: null,
            action: null
        }
    },
]