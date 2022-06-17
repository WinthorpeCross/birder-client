import { IConservationStatus } from "../i-conservation-status.dto";

export interface IBirdDetail {
    birdId: number;
    class: string;
    order: string;
    family: string;
    genus: string;
    species: string;
    englishName: string;
    internationalName: string;
    category: string;
    populationSize: string;
    btoStatusInBritain: string;
    thumbnailUrl: string;
    creationDate: Date | string;
    lastUpdateDate: Date | string;
    birdConservationStatus: IConservationStatus;
    birderStatus: string;
}
