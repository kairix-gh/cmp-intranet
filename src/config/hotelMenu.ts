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
    action(): void | null
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
                    action: function (): void {
                        console.log("enroll a new member!");
                    },
                }
            },
            {
                name: "Member Lookup",
                action: {
                    isRoute: false,
                    route: null,
                    action: null,
                }
            },
            {
                name: "Member Arrivals",
                action: {
                    isRoute: false,
                    route: null,
                    action: null,
                }
            },
            {
                name: "Manual Member Stay",
                action: {
                    isRoute: false,
                    route: null,
                    action: null,
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