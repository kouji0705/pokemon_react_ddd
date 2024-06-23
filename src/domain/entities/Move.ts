import type { PokemonType } from "@enums/PokemonType";

export class Move {
	constructor(
		public readonly name: string,
		public readonly type: PokemonType,
		public readonly power: number,
	) {}
}
