import React, { useState } from "react";
import { Pokemon } from "../domain/entities/Pokemon";
import { Move } from "../domain/entities/Move";
import { Stats } from "../domain/entities/Stats";
import { BattleService } from "@services/BattleService";
import { PokemonType } from "../domain/enums/PokemonType";

const pikachuStats: Stats = { hp: 100, attack: 55, defense: 40, speed: 90 };
const bulbasaurStats: Stats = { hp: 100, attack: 49, defense: 49, speed: 45 };

const thunderbolt: Move = {
	name: "Thunderbolt",
	type: PokemonType.Electric,
	power: 90,
};
const tackle: Move = { name: "Tackle", type: PokemonType.Grass, power: 40 };

const pikachu = new Pokemon(
	25,
	"Pikachu",
	[PokemonType.Electric],
	pikachuStats,
	[thunderbolt],
);
const bulbasaur = new Pokemon(
	1,
	"Bulbasaur",
	[PokemonType.Grass, PokemonType.Poison],
	bulbasaurStats,
	[tackle],
);

const battleService = new BattleService(pikachu, bulbasaur);

const Battle: React.FC = () => {
	const [message, setMessage] = useState<string>("");
	const [pokemon1HP, setPokemon1HP] = useState<number>(pikachu.getStats().hp);
	const [pokemon2HP, setPokemon2HP] = useState<number>(bulbasaur.getStats().hp);

	const handleBattleTurn = () => {
		battleService.battleTurn();
		// setMessage(result);
		setPokemon1HP(pikachu.getStats().hp);
		setPokemon2HP(bulbasaur.getStats().hp);
	};

	return (
		<div>
			<h1>Pokemon Battle</h1>
			<div>
				<h2>
					{pikachu.name} (HP: {pokemon1HP})
				</h2>
				<h2>
					{bulbasaur.name} (HP: {pokemon2HP})
				</h2>
			</div>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={handleBattleTurn}>Next Turn</button>
			<p>{message}</p>
		</div>
	);
};

export default Battle;
