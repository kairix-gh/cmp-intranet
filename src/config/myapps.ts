export { myApps }

export interface myApp {
    name: string;
    description: string;
    route: string;
}

const myApps = [
    { name: "Brand University", description: "Central Hub for all brand approved training courses", route: "#" },
    { name: "Social Scores", description: "Review and monitor your social presence", route: "#" },
    { name: "ePay", description: "Manage your franchise invoices", route: "#" },
]