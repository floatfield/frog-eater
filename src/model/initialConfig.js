const initialConfig = [
    {
        id: Date.now(),
        header: "do the stuff",
        description: "do as much stuff as you can",
        timeScope: "year",
        priority: 10,
        createdAt: new Date(),
        completedAt: null
    },
    {
        id: Date.now() + 1,
        header: "do something else",
        description: "don't do anything",
        timeScope: "month",
        priority: 5,
        createdAt: new Date(),
        completedAt: new Date()
    }
];

export default initialConfig;
