import { Pokemon } from "@entities/Pokemon";
import { Move } from "@entities/Move";

export class Battle {
	constructor(
		private pokemon1: Pokemon,
		private pokemon2: Pokemon,
	) {}

	// ダメージを計算するメソッド
	private calculateDamage(attacker: Pokemon, move: Move): number {
		return move.power;
	}

	// 攻撃を実行するメソッド
	private performMove(attacker: Pokemon, defender: Pokemon, move: Move): void {
		const damage = this.calculateDamage(attacker, move);
		defender.receiveDamage(damage);
		console.log(
			`${attacker.name} used ${move.name}. It dealt ${damage} damage.`,
		);
	}

	public battleTurn(): void {
		// ポケモン1の攻撃
		const move1 = this.pokemon1.getMoves()[0];
		console.log("=======HIT8 move1: ", move1);
		this.performMove(this.pokemon1, this.pokemon2, move1);

		// 勝敗のチェック
		if (this.pokemon2.getStats().hp <= 0) {
			console.log(`${this.pokemon1.name} wins!`);
			return;
		}
		console.log(
			"=======HIT8 this.pokemon2.getStats().hp: ",
			this.pokemon2.getStats().hp,
		);

		// ポケモン2の攻撃
		const move2 = this.pokemon2.getMoves()[0];
		console.log("=======HIT8 move2: ", move2);
		this.performMove(this.pokemon2, this.pokemon1, move2);

		// 勝敗のチェック
		if (this.pokemon1.getStats().hp <= 0) {
			console.log(`${this.pokemon2.name} wins!`);
			return;
		}
		console.log(
			"=======HIT8 this.pokemon1.getStats().hp: ",
			this.pokemon1.getStats().hp,
		);
	}
}
