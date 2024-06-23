import { Pokemon } from "@entities/Pokemon";
import type { Stats } from "@entities/Stats";
import type { Move } from "@entities/Move";
import { PokemonType } from "@enums/PokemonType"

describe("Pokemon Entity", () => {
	it("should initialize with correct properties", () => {
		const stats: Stats = { hp: 100, attack: 50, defense: 30, speed: 40 };
		const moves: Move[] = [
			{ name: "Tackle", type: PokemonType.Electric, power: 40 },
			{ name: "Thunderbolt", type: PokemonType.Electric, power: 90 },
		];
		const pokemon = new Pokemon(
			25,
			"Pikachu",
			[PokemonType.Electric],
			stats,
			moves,
		); // タイプを配列で渡す
		expect(pokemon.name).toBe("Pikachu");
		expect(pokemon.type).toEqual([PokemonType.Electric]);
		expect(pokemon.getStats().hp).toBe(100);
		expect(pokemon.getStats().attack).toBe(50);
	});
});
