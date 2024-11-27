export interface Character {
  id: string;
  name: string;
  model: string;
  animations: string[];
}

export interface Choice {
  id: string;
  text: string;
  consequence: string;
  morality: number;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  characters: Character[];
  choices: Choice[];
  environment: string;
  requiredScore: number;
}