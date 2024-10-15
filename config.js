const myQuestAPI = {
    system: {
        inactive: "myQuestAPI is inactive", // Se mostrará si MyQuestAPI no está activa.
        enable: true, // Establezca en verdadero para habilitar y falso para deshabilitar
		tag: "op" // etiqueta quién puede ver las misiones cuando el sistema[enable = false] ||  /etiqueta @s agregar op
    },
    getIdentifier: {
        author: "§5MenGamer", // Nombre del Autor 
        title: "§lMisiones Tutorial", // Titulo
        description: "Termina las Misiones" // Descripción
        },
    getQuest: {
    	isNamespace: { 
			isDefault: false,  // Inútil por ahora.  Si es verdadero, usará el espacio de nombres predeterminado
    							 	 // entonces ya no necesitas escribir espacio de nombres
			namespace: "minecraft:" // Sólo funciona si "isDefault: true"
		},
        itemHand: "minecraft:book",
        items: [
            "minecraft:coal",
            "minecraft:iron_ingot",
            "minecraft:copper_ingot",
            "minecraft:gold_ingot",
            "minecraft:diamond",
            "minecraft:netherite_ingot",
            "minecraft:stone_pickaxe"
        ],
        rewards: [
        	["minecraft:apple", 1],
        	["minecraft:carrot", 1],
        	["minecraft:potato", 1],
        	["minecraft:sugar_cane", 1],
        	["minecraft:wheat", 1],
        	["minecraft:potion", 1],
        	["minecraft:stone", 10]
        ]
    },
    getForm: {
    	title: {
    		enable: true, // Cambie a falso para generar el título automáticamente
    		title: [
    			// no es necesario completar este campo si el título[enable = true]
    			"Title here",
    			"Title here",
    			"Title here",
    			"Title here",
    			"Title here",
    			"Title here"
    		]
    	},
    	description: {
    		description: [
    			"Colecciona Carbón",
    			"Colecciona Hierro",
    			"Colecciona Cobre",
    			" ", // Puedes omitir la descripción escribiendo un espacio.
    			"Colecciona diamantes",
    			"Colecciona Netherita",
    			"Has tu primer pico"
    		],
    		complated: "Completado",
    		notComplated: "En Progreso"
    	},
    	icon: {
    		enable: true, // Establezca en verdadero para habilitar y falso para deshabilitar
    		confirm: `textures/ui/confirm`,
    		items: [
    			"items/coal",
    			"items/iron_ingot",
    			"items/copper_ingot",
    			"items/gold_ingot",
    			"items/diamond",
    			"items/netherite_ingot",
    			"items/stone_pickaxe"
			]
    	},
    	button: {
        	back: "§l§4Salir", // Boton Salir
        	check: "§l§qProbar", // Boton check
        	about: "§l§6Acerca De..."  // Boton AcercaDe...
    	}
    }
}

export {myQuestAPI}
