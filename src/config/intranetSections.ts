export { IntranetSections }

export interface IntranetSection {
    name: string
    description: string
    route: string
    icon: string
}

const IntranetSections = [
    {
        name: 'Calendar',
        description: 'Review events and training opportunities.',
        route: '##',
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                <rect width="48" height="48" rx="8" fill="#EEEEEE" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke="#999999" stroke-width="2" d="m20,19l0,-4m8,4l0,-4m-9,8l10,0m-12,10l14,0a2,2 0 0 0 2,-2l0,-12a2,2 0 0 0 -2,-2l-14,0a2,2 0 0 0 -2,2l0,12a2,2 0 0 0 2,2z"" />
            </svg>
        `,
    },
    {
        name: 'Vendors',
        description: 'Explore brand approved vendors',
        route: '##',
        icon: `
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden='true' xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="8" fill="#EEEEEE" />
                <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#898989" stroke-width="2" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z" stroke="#999999" stroke-width="2" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z" stroke="#999999" stroke-width="2" />
            </svg>
        `,
    },
] as Array<IntranetSection>