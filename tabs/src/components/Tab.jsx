import { useState } from "react"

function Tab() {
    // const tabHeading = ["Overview", "Analytics", "Reports", "Settings"]
    const tabContent = [
        {
            heading: "Overview",
            content:
                "View your key metrics and recent project activity. Track progress across all your active projects.\nYou have 12 active projects and 3 pending tasks.",
        },
        {
            heading: "Analytics",
            content:
                "Track performance and user engagement metrics. Monitor trends and identify growth opportunities.\nPage views are up 25% compared to last month.",
        },
        {
            heading: "Reports",
            content:
                "Generate and download your detailed reports. Export data in multiple formats for analysis.\nYou have 5 reports ready and available to export.",
        },
        {
            heading: "Settings",
            content:
                "Manage your account preferences and options. Customize your experience to fit your needs.\nConfigure notifications, security, and themes.",
        },
    ];
    const [tab, setTab] = useState(0)

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center gap-6">
                {tabContent.map((element, index) => (
                    <button
                        key={index}
                        className={`${tab === index ? "font-bold" : "hover:font-bold"} `}
                        onClick={() => setTab(index)}
                    >
                        {element.heading}
                    </button>
                ))}
            </div>
            <p className="w-[40%] mt-8">{tabContent[tab].content}</p>
        </div>
    )
}

export default Tab