const baseId = Date.now();

const initialConfig = {
    drag: {
        id: null,
        enabled: false,
        startPos: null,
        mousePos: null
    },
    scopes: ["year", "months", "week", "day"],
    tasks: [
        {
            id: baseId,
            header: "do the stuff",
            description: "do as much stuff as you can",
            timeScope: "year",
            priority: 10,
            createdAt: new Date(),
            completedAt: null,
        },
        {
            id: baseId + 1,
            header: "do the stuff",
            description: "do as much stuff as you can",
            timeScope: "year",
            priority: 10,
            createdAt: new Date(),
            completedAt: null
        },
        {
            id: baseId + 2,
            header: "do something else",
            description: "don't do anything",
            timeScope: "week",
            priority: 5,
            createdAt: new Date(),
            completedAt: new Date()
        },
        {
            id: baseId + 3,
            header: "do something else",
            description: "don't do anything",
            timeScope: "week",
            priority: 5,
            createdAt: new Date(),
            completedAt: new Date()
        }
    ]
};

export default initialConfig;
