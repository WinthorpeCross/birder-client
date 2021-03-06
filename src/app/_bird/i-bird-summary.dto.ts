
// separate model for birds drop-down list... only need id, species, englishName and birderStatus
export interface IBirdSummary {
    birdId: number;
    species: string;
    englishName: string;
    populationSize: string;
    btoStatusInBritain: string;
    thumbnailUrl: string | null;
    conservationStatus: string;
    conservationListColourCode: string;
    birderStatus: string;
}
