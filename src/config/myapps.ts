export { myApps }

export interface myApp {
    name: string;
    description: string;
    route: string;
}

const myApps = [
    { name: "RLH University", description: "Central Hub for all brand approved training courses", route: "#" },
    { name: "Reputation Performance Platform", description: "Review and monitor your online reputation score", route: "#" },
    { name: "RLH ePay", description: "Manage your franchise invoices", route: "#" },
]