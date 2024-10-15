const myQuestAPI = {
    system: {
        inactive: "myQuestAPI is inactive", 
        enable: true, 
        tag: "op" 
    },
    getIdentifier: {
        author: "§5MenGamer", 
        title: "§lMisiones apocalipticas", 
        description: "Termina las Misiones" 
    },
    getQuest: {
        isNamespace: { 
            isDefault: false,  
            namespace: "minecraft:"
        },
        itemHand: "minecraft:book",
        items: [
            "minecraft:coal",
            "minecraft:iron_ingot",
            "minecraft:copper_ingot",
            "minecraft:gold_ingot",
            "minecraft:diamond",
            "minecraft:netherite_ingot",
            "minecraft:stone_pickaxe",
            "minecraft:obsidian",
            "minecraft:ender_pearl",
            "minecraft:nether_star"
        ],
        rewards: [
            ["minecraft:apple", 1],
            ["minecraft:carrot", 1],
            ["minecraft:potato", 1],
            ["minecraft:sugar_cane", 1],
            ["minecraft:wheat", 1],
            ["minecraft:potion", 1],
            ["minecraft:stone", 10],
            ["minecraft:golden_apple", 1],
            ["minecraft:diamond_sword", 1],
            ["minecraft:elytra", 1]
        ]
    },
    getForm: {
        title: {
            enable: true, 
            title: [
                "Colecciona Carbón",
                "Colecciona Lingotes de Hierro",
                "Colecciona Lingotes de Cobre",
                "Colecciona Lingotes de Oro",
                "Colecciona Diamantes",
                "Colecciona Netherita",
                "Haz tu primer Pico de Piedra",
                "Colecciona Obsidiana",
                "Encuentra una Perla de Ender",
                "Consigue una Estrella del Nether"
            ]
        },
        description: {
            description: [
                "Colecciona 10 Carbones",
                "Colecciona 10 Lingotes de Hierro",
                "Colecciona 10 Lingotes de Cobre",
                "Colecciona 10 Lingotes de Oro",
                "Colecciona 5 Diamantes",
                "Colecciona 1 Netherita",
                "Crea tu primer Pico de Piedra",
                "Colecciona 5 Bloques de Obsidiana",
                "Colecciona 1 Perla de Ender",
                "Consigue una Estrella del Nether"
            ],
            complated: "Completado",
            notComplated: "En Progreso"
        },
        icon: {
            enable: true, 
            confirm: `textures/ui/confirm`,
            items: [
                "items/coal",
                "items/iron_ingot",
                "items/copper_ingot",
                "items/gold_ingot",
                "items/diamond",
                "items/netherite_ingot",
                "items/stone_pickaxe",
                "items/obsidian",
                "items/ender_pearl",
                "items/nether_star"
            ]
        },
        button: {
            back: "§l§4Salir", 
            check: "§l§qProbar", 
            about: "§l§6Acerca De..." 
        }
    }
}

export {myQuestAPI}
