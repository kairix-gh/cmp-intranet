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
                        componentId: "LoyaltyMemberArrivals"
                    },
                }
            },
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
            isRoute: false,
            route: null,
            action: {
                title: "Waiver Management",
                componentId: "BrandStandardWaivers"
            },
        }
    },
    {
        name: "Action Items",
        subItems: null,
        action: {
            isRoute: false,
            route: null,
            action: {
                title: "Action Items",
                componentId: "ActionItems"
            }
        }
    },
    {
        name: "Branding",
        subItems: null,
        action: {
            isRoute: false,
            route: null,
            action: {
                title: "Branding - Creative Resources",
                componentId: "CreativeResources"
            }
        }
    },
    {
        name: "User Management",
        subItems: null,
        action: {
            isRoute: false,
            route: null,
            action: {
                title: "User Management",
                componentId: "UserManagement"
            }
        }
    },
]