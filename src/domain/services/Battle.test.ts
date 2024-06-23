import { Pokemon } from "@entities/Pokemon";
import { PokemonType } from "@enums/PokemonType";
import { Stats } from "@entities/Stats";
import { Move } from "@entities/Move";
import { Battle } from "@services/Battle";

describe("Battle", () => {
	let pikachu: Pokemon;
	let bulbasaur: Pokemon;
	let battle: Battle;

	beforeEach(() => {
		const pikachuStats: Stats = { hp: 100, attack: 55, defense: 40, speed: 90 };
		const bulbasaurStats: Stats = {
			hp: 100,
			attack: 49,
			defense: 49,
			speed: 45,
		};

		const thunderbolt: Move = {
			name: "Thunderbolt",
			type: PokemonType.Electric,
			power: 90,
		};
		const tackle: Move = {
			name: "Tackle",
			type: PokemonType.Normal,
			power: 40,
		};

		pikachu = new Pokemon(25, "Pikachu", [PokemonType.Electric], pikachuStats, [
			thunderbolt,
		]);
		bulbasaur = new Pokemon(
			1,
			"Bulbasaur",
			[PokemonType.Grass, PokemonType.Poison],
			bulbasaurStats,
			[tackle],
		);

		battle = new Battle(pikachu, bulbasaur);
	});

	test("バトルを1回実行", () => {
		battle.battleTurn();
		expect(bulbasaur.getStats().hp).toBeLessThanOrEqual(10); // Bulbasaur takes 90 damage
		expect(pikachu.getStats().hp).toBe(60); // Pikachu takes 40 damage
	});

	test("バトルを2回実行し、ピカチュウが勝利", () => {
		battle.battleTurn(); // First turn
		battle.battleTurn(); // Second turn
		expect(pikachu.getStats().hp).toBe(60); // Pikachu takes 40 damage
		expect(bulbasaur.getStats().hp).toBeLessThanOrEqual(0); // Bulbasaur is defeated
	});
});
