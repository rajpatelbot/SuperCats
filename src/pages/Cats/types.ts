export interface CatResponseType {
  id: string;
  url: string;
  height: number;
  width: string;
  breeds: CatBreedTypes[];
}

export interface CatBreedTypes {
  adaptability: number;
  alt_names: string;
  child_friendly: number;
  description: string;
  dog_friendly: number;
  energy_level: number;
  health_issues: number;
  id: string;
  intelligence: number;
  life_span: string;
  name: string;
  origin: string;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  wikipedia_url: string;
}
