import { PokemonType } from "@enums/PokemonType";
import type { Move } from "@entities/Move";
import { Stats } from "@entities/Stats";

export class Pokemon {
	constructor(
		public readonly id: number,
		public readonly name: string, // ポケモンの名前
		public readonly type: PokemonType[], // ポケモンのタイプ
		private readonly stats: Stats, // ポケモンのステータス
		private readonly moves: Move[], // ポケモンの技
	) {
		if (moves.length > 4) {
			throw new Error("ポケモンは4つまでしか技を持てません。");
		}
	}

	// ステータスを取得するメソッド
	getStats(): Stats {
		return this.stats;
	}

	// 技を取得するメソッド
	getMoves(): Move[] {
		return this.moves;
	}

	// ダメージを受けるメソッド	
	receiveDamage(damage: number): void {
		this.stats.hp -= damage;
	}
}
