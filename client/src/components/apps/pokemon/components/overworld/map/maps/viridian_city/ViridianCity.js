import mapDown from "../../../../../assets/graphics/maps/viridian_city/down.png";
import mapUp from "../../../../../assets/graphics/maps/viridian_city/up.png";
import { collisions, grass, bump } from './MapCollision';

import { asGridCoords, loadWall, withGrid, loadGrass, loadBump } from '../../../../../Utils';


import blank from "../../../../../assets/graphics/characters/blank.png";

import npcJImg from "../../../../../assets/graphics/characters/npcJ.png";
import npcGImg from "../../../../../assets/graphics/characters/npcG.png";
import npcIImg from "../../../../../assets/graphics/characters/npcI.png";
import npcWImg from "../../../../../assets/graphics/characters/npcW.png";
import npcXImg from "../../../../../assets/graphics/characters/npcX.png";
import npcYImg from "../../../../../assets/graphics/characters/npcY.png";
import npcZImg from "../../../../../assets/graphics/characters/npcZ.png";
import npc2Img from "../../../../../assets/graphics/characters/npc2.png";
import npcOImg from "../../../../../assets/graphics/characters/npcO.png";
import npcVImg from "../../../../../assets/graphics/characters/npcV.png";
import npc3Img from "../../../../../assets/graphics/characters/npc3.png";
import npc4Img from "../../../../../assets/graphics/characters/npc4.png";
import npcTeamRocketA from "../../../../../assets/graphics/characters/npcTeamRocketA.png";
import npcTeamRocketB from "../../../../../assets/graphics/characters/npcTeamRocketB.png";


import palletTownBg from "../../../../../assets/audio/background_music/PalletTown.ogg"
import pokeCenterMsc from "../../../../../assets/audio/background_music/PokeCenter.ogg"
import pokeMarketMsc from "../../../../../assets/audio/background_music/PokeMarket.ogg"
import ViridianForestBurning from "../../../../../assets/audio/background_music/ViridianForestBurning.ogg"

export const ViridianCity = {
    id: "ViridianCity",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            canRun: true,
        }),
        npcA: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(20),
            src: npcJImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Il s'agit de la porte de réception pour la ligue Pokémon.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Tu as besoin des 8 badges pour continuer.", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(50),
            y: withGrid(26),
            src: npcIImg,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 2200},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "up", time: 3200},
                { type: "walk", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La forêt de Jade brûle !", facePlayer: "npcB" },
                        { type: "textMessage", text: "Mais j'ai trop peur d'aller voir.", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(47),
            y: withGrid(50),
            src: npcWImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 2200},
                { type: "stand", direction: "right", time: 3200},
            ],
            talking : [
                {
                    required: ["GET_RUNNING_SHOES"],
                    events: [
                        { type: "textMessage", text: "Ces chaussures te vont très bien.", facePlayer: "npcC"},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Nous vivons juste ici.", facePlayer: "npcC" },
                        { type: "textMessage", text: "Mon père fait don de ses vieilles chaussures.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        npcD: ({
            type: "Person",
            x: withGrid(25),
            y: withGrid(55),
            src: npcXImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 2200},
                { type: "stand", direction: "left", time: 3200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est la route de la ligue pokemon.", facePlayer: "npcD" },
                        { type: "textMessage", text: "Malheureusement, un dresseur m'a dépouillé!", facePlayer: "npcD" },
                    ]
                }
            ]
        }),
        npcE: ({
            type: "Person",
            x: withGrid(54),
            y: withGrid(71),
            src: npcZImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 2200},
                { type: "walk", direction: "right",},
                { type: "stand", direction: "right", time: 3200},
                { type: "walk", direction: "left",},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "L'arène est fermée.", facePlayer: "npcE" },
                        { type: "textMessage", text: "Ça fait longtemps qu'on n'a pas vu le champion.", facePlayer: "npcE" },
                    ]
                }
            ]
        }),
        npcF: ({
            type: "Person",
            x: withGrid(69),
            y: withGrid(57),
            src: npc2Img,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 2200},
                { type: "walk", direction: "right",},
                { type: "stand", direction: "right", time: 3200},
                { type: "walk", direction: "up",},
                { type: "stand", direction: "up", time: 3200},
                { type: "walk", direction: "left",},
                { type: "stand", direction: "left", time: 3300},
                { type: "walk", direction: "down",},
                
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'ai croisé un Mimiqui qui courait vers la fôret de Jade.", facePlayer: "npcF" },
                        { type: "textMessage", text: "Il avait l'air tout effrayé.", facePlayer: "npcF" },
                    ]
                }
            ]
        }),
        npcG: ({
            type: "Person",
            x: withGrid(58),
            y: withGrid(21),
            src: npcOImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 2200},
                
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "On voit la fumée de si loin.", facePlayer: "npcG" },
                    ]
                }
            ]
        }),
        npcH: ({
            type: "Person",
            x: withGrid(58),
            y: withGrid(22),
            src: npcVImg,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 2200},
                
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Ça sent le brûlé.", facePlayer: "npcH" },
                        { type: "textMessage", text: "J'ai entendu dire que c'était encore la Team Rocket.", facePlayer: "npcH" },
                    ]
                }
            ]
        }),
        npcI: ({
            type: "Person",
            x: withGrid(47),
            y: withGrid(36),
            src: npc3Img,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 2200},
                
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est vraiment impressionnant.", facePlayer: "npcI" },
                        { type: "textMessage", text: "Toutes ces flammes...", facePlayer: "npcI" },
                    ]
                }
            ]
        }),
        npcJ: ({
            type: "Person",
            x: withGrid(34),
            y: withGrid(9),
            src: npc4Img,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 4444},
                { type: "stand", direction: "down", time: 4444},
                
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Que font-ils...", facePlayer: "npcJ" },
                    ]
                }
            ]
        }),
        npcK: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(30),
            src: npcGImg,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 4444},
                { type: "stand", direction: "down", time: 4444},
                
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je n'ai clairement pas le niveau.", facePlayer: "npcK" },
                    ]
                }
            ]
        }),
        npcTeamRocketB: ({
            type: "Person",
            x: withGrid(55),
            y: withGrid(12),
            src: npcTeamRocketB,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 4444},
                
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Tout ne s'est pas passé comme prévu...", facePlayer: "npcTeamRocketB" },
                        { type: "textMessage", text: "La bête est déchaînée.", facePlayer: "npcTeamRocketB" },
                    ]
                }
            ]
        }),

        // trainers
        crazyLouis: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(52),
            src: npcYImg,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 2200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'essaie de voler les passants.", facePlayer: "crazyLouis" },
                    ]
                }
            ]
        }),
        teamRocketA: ({
            type: "Person",
            x: withGrid(30),
            y: withGrid(19),
            src: npcTeamRocketA,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 2200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Le feu a un petit peu dégénéré.", facePlayer: "teamRocketA" },
                    ]
                }
            ]
        }),

        // objects
        gymDoor: ({
            type: "Person",
            x: withGrid(66),
            y: withGrid(48),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "L'arène est fermée."},
                    ]
                },
            ]
        }),
        signA: ({
            type: "Person",
            x: withGrid(55),
            y: withGrid(75),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Route 1."},
                    ]
                },
            ]
        }),
        signB: ({
            type: "Person",
            x: withGrid(47),
            y: withGrid(70),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Jadielle."},
                    ]
                },
            ]
        }),
        signC: ({
            type: "Person",
            x: withGrid(47),
            y: withGrid(55),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Musée Pokémon en construction."},
                    ]
                },
            ]
        }),
        signD: ({
            type: "Person",
            x: withGrid(62),
            y: withGrid(48),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Arène de Jadielle."},
                    ]
                },
            ]
        }),
        signE: ({
            type: "Person",
            x: withGrid(18),
            y: withGrid(60),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Route 22."},
                    ]
                },
            ]
        }),
        signF: ({
            type: "Person",
            x: withGrid(16),
            y: withGrid(24),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Réception de la Ligue Pokémon."},
                    ]
                },
            ]
        }),
        signG: ({
            type: "Person",
            x: withGrid(47),
            y: withGrid(28),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La forêt de Jade au nord, la grotte Taupiqueur à l'est."},
                    ]
                },
            ]
        }),
        signH: ({
            type: "Person",
            x: withGrid(51),
            y: withGrid(11),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Forêt de Jade."},
                    ]
                },
            ]
        }),
        signI: ({
            type: "Person",
            x: withGrid(62),
            y: withGrid(12),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Grotte Taupiqueur"},
                    ]
                },
            ]
        }),
    },
    walls: loadWall(collisions),
    grass: loadGrass(grass),
    bump: loadBump(bump),
    cutsceneSpaces: {
        [asGridCoords(52, 75)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "PalletTown",
                        soundEffect: "stairs",
                        changeMusic: palletTownBg,
                        x: withGrid(40),
                        y: withGrid(7),
                        direction: 'down',
                    },
                ]
            }
        ],
        [asGridCoords(54, 65)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianPokeCenterFirstFloor",
                        soundEffect: "doors",
                        changeMusic: pokeCenterMsc,
                        x: withGrid(18),
                        y: withGrid(24),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(65, 58)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianPokeMarket",
                        soundEffect: "doors",
                        changeMusic: pokeMarketMsc,
                        x: withGrid(14),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(53, 57)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianHouseOne",
                        soundEffect: "doors",
                        x: withGrid(15),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(54, 50)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianHouseTwo",
                        soundEffect: "doors",
                        x: withGrid(15),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(53, 10)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianForest",
                        soundEffect: "stairs",
                        changeMusic: ViridianForestBurning,
                        setFilter: "fire",
                        x: withGrid(28),
                        y: withGrid(49),
                        direction: 'up',
                    },
                ]
            }
        ],

        // trainers 
        [asGridCoords(16, 52)]: [
            {
                events: [
                    { type: "battleTeasing", who: "crazyLouis" },
                    { who: "player",type: "stand", direction: "right"},
                    { type: "textMessage", text: "Tu as beaucoup trop d'espoir."},
                    { type: "battle", enemyId: "crazyLouis"},

                    { type: "textMessage", text: "Je t'ai sous-estimé."},
                    { type: "addStoryFlag", flag: "DEFEAT_CRAZY_LOUIS"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_CRAZY_LOUIS",
            },
        ],
        [asGridCoords(15, 52)]: [
            {
                events: [
                    { type: "battleTeasing", who: "crazyLouis" },
                    { who: "player",type: "stand", direction: "right"},
                    { who: "crazyLouis",type: "walk", direction: "left"},
                    { type: "textMessage", text: "Tu as beaucoup trop d'espoir."},
                    { type: "battle", enemyId: "crazyLouis" },

                    { type: "textMessage", text: "Je t'ai sous-estimé." },
                    { type: "addStoryFlag", flag: "DEFEAT_CRAZY_LOUIS"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_CRAZY_LOUIS",
            },
        ],

        [asGridCoords(31, 19)]: [
            {
                events: [
                    { type: "battleTeasing", who: "teamRocketA" },
                    { who: "player",type: "stand", direction: "left"},
                    { type: "textMessage", text: "Ils m'ont dit de ne laisser passer personne.", },
                    { type: "battle", enemyId: "teamRocketA" },

                    { type: "textMessage", text: "Nous ne pouvons plus contrôler le feu !", },
                    { type: "addStoryFlag", flag: "DEFEAT_TEAM_ROCKET_A"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_TEAM_ROCKET_A",
            },
        ],
        [asGridCoords(32, 19)]: [
            {
                events: [
                    { type: "battleTeasing", who: "teamRocketA" },
                    { who: "player",type: "stand", direction: "left"},
                    { who: "teamRocketA",type: "walk", direction: "right"},
                    { type: "textMessage", text: "Ils m'ont dit de ne laisser passer personne." },
                    { type: "battle", enemyId: "teamRocketA" },

                    { type: "textMessage", text: "Nous ne pouvons plus contrôler le feu !", },
                    { type: "addStoryFlag", flag: "DEFEAT_TEAM_ROCKET_A"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_TEAM_ROCKET_A",
            },
        ],
        [asGridCoords(33, 19)]: [
            {
                events: [
                    { type: "battleTeasing", who: "teamRocketA" },
                    { who: "player",type: "stand", direction: "left"},
                    { who: "teamRocketA",type: "walk", direction: "right"},
                    { who: "teamRocketA",type: "walk", direction: "right"},
                    { type: "textMessage", text: "Ils m'ont dit de ne laisser passer personne." },
                    { type: "battle", enemyId: "teamRocketA" },

                    { type: "textMessage", text: "Nous ne pouvons plus contrôler le feu !", },
                    { type: "addStoryFlag", flag: "DEFEAT_TEAM_ROCKET_A"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_TEAM_ROCKET_A",
            },
        ],
    }
}