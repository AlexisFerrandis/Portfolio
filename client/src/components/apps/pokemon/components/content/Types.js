// types
export const pokemonTypes = {
	normal: {
		Name: "Normal",
		InternalName: "NORMAL",
		Weaknesses: ["FIGHTING"],
		Resistances: [""],
		Immunities: "GHOST",
	},
	fighting: {
		Name: "Fighting",
		InternalName: "FIGHTING",
		Weaknesses: ["FLYING", "PSYCHIC", "FAIRY"],
		Resistances: ["ROCK", "BUG", "DARK"],
	},
	flying: {
		Name: "Flying",
		InternalName: "FLYING",
		Weaknesses: ["ROCK", "ELECTRIC", "ICE"],
		Resistances: ["FIGHTING", "BUG", "GRASS"],
		Immunities: "GROUND",
	},
	poison: {
		Name: "Poison",
		InternalName: "POISON",
		Weaknesses: ["GROUND", "PSYCHIC"],
		Resistances: ["FIGHTING", "POISON", "BUG", "GRASS", "FAIRY"],
	},
	ground: {
		Name: "Ground",
		InternalName: "GROUND",
		Weaknesses: ["WATER", "GRASS", "ICE"],
		Resistances: ["POISON", "ROCK"],
		Immunities: "ELECTRIC",
	},
	rock: {
		Name: "Rock",
		InternalName: "ROCK",
		Weaknesses: ["FIGHTING", "GROUND", "STEEL", "WATER", "GRASS"],
		Resistances: ["NORMAL", "FLYING", "POISON", "FIRE"],
	},
	bug: {
		Name: "Bug",
		InternalName: "BUG",
		Weaknesses: ["FLYING", "ROCK", "FIRE"],
		Resistances: ["FIGHTING", "GROUND", "GRASS"],
	},
	ghost: {
		Name: "Ghost",
		InternalName: "GHOST",
		Weaknesses: ["GHOST", "DARK"],
		Resistances: ["POISON", "BUG"],
		Immunities: ["NORMAL", "FIGHTING"],
	},
	steel: {
		Name: "Steel",
		InternalName: "STEEL",
		Weaknesses: ["FIGHTING", "GROUND", "FIRE"],
		Resistances: ["NORMAL", "FLYING", "ROCK", "BUG", "STEEL", "GRASS", "PSYCHIC", "ICE", "DRAGON", "FAIRY"],
		Immunities: "POISON",
	},
	fire: {
		Name: "Fire",
		InternalName: "FIRE",
		IsSpecialType: true,
		Weaknesses: ["GROUND", "ROCK", "WATER"],
		Resistances: ["BUG", "STEEL", "FIRE", "GRASS", "ICE", "FAIRY"],
	},
	water: {
		Name: "Water",
		InternalName: "WATER",
		IsSpecialType: true,
		Weaknesses: ["GRASS", "ELECTRIC"],
		Resistances: ["STEEL", "FIRE", "WATER", "ICE"],
	},
	grass: {
		Name: "Grass",
		InternalName: "GRASS",
		IsSpecialType: true,
		Weaknesses: ["FLYING", "POISON", "BUG", "FIRE", "ICE"],
		Resistances: ["GROUND", "WATER", "GRASS", "ELECTRIC"],
	},
	electric: {
		Name: "Electric",
		InternalName: "ELECTRIC",
		IsSpecialType: true,
		Weaknesses: "GROUND",
		Resistances: ["FLYING", "STEEL", "ELECTRIC"],
	},
	psychic: {
		Name: "Psychic",
		InternalName: "PSYCHIC",
		IsSpecialType: true,
		Weaknesses: ["BUG", "GHOST", "DARK"],
		Resistances: ["FIGHTING", "PSYCHIC"],
	},
	ice: {
		Name: "Ice",
		InternalName: "ICE",
		IsSpecialType: true,
		Weaknesses: ["FIGHTING", "ROCK", "STEEL", "FIRE"],
		Resistances: "ICE",
	},
	dragon: {
		Name: "Dragon",
		InternalName: "DRAGON",
		IsSpecialType: true,
		Weaknesses: ["ICE", "DRAGON", "FAIRY"],
		Resistances: ["FIRE", "WATER", "GRASS", "ELECTRIC"],
	},
	dark: {
		Name: "Dark",
		InternalName: "DARK",
		IsSpecialType: true,
		Weaknesses: ["FIGHTING", "BUG", "FAIRY"],
		Resistances: ["GHOST", "DARK"],
		Immunities: "PSYCHIC",
	},
	fairy: {
		Name: "Fairy",
		InternalName: "FAIRY",
		IsSpecialType: true,
		Weaknesses: ["POISON", "STEEL"],
		Resistances: ["FIGHTING", "BUG", "DARK"],
		Immunities: "DRAGON",
	},
};
