import { IBirdDetail } from "../_bird/bird-detail/i-bird-detail.dto";
import { IBirdSummary } from "../_bird/i-bird-summary.dto"
import { IConservationStatus } from "../_bird/i-conservation-status.dto";


export const fakeIBirdDetail: IBirdDetail =
{
  birdId: 1002,
  class: "Aves",
  order: "Charadriiformes",
  family: "Stercorariidae",
  genus: "Stercorarius",
  species: "Stercorarius parasiticus",
  englishName: "Arctic Skua",
  internationalName: "Parasitic Jaeger",
  category: "A",
  populationSize: "1,000 - 10,000 Pairs",
  btoStatusInBritain: "Migrant Breeder, Passage Visitor",
  thumbnailUrl: '',
  creationDate: "2020-04-27T22:51:38.26Z",
  lastUpdateDate: "2020-04-27T22:51:38.26Z",
  birdConservationStatus: {} as IConservationStatus,
  birderStatus: "Common"
};

// /Birds/Bird?id=1002
export const fakeBirdDetailResponse =
{
  "birdId": 1002,
  "class": "Aves",
  "order": "Charadriiformes",
  "family": "Stercorariidae",
  "genus": "Stercorarius",
  "species": "Stercorarius parasiticus",
  "englishName": "Arctic Skua",
  "internationalName": "Parasitic Jaeger",
  "category": "A",
  "populationSize": "1,000 - 10,000 Pairs",
  "btoStatusInBritain": "Migrant Breeder, Passage Visitor",
  "thumbnailUrl": null,
  "creationDate": "2020-04-27T22:51:38.26Z",
  "lastUpdateDate": "2020-04-27T22:51:38.26Z",
  "birdConservationStatus": {
    "conservationStatusId": 1,
    "conservationList": "Red",
    "conservationListColourCode": "Red",
    "description": "Red is the highest conservation priority, with these species needing urgent action.  Species are placed on the Red-list if they meet one or more of the following criteria: are globally important, have declined historically, show recent severe decline, and have failed to recover from historic decline.",
    "creationDate": "2021-02-16T21:18:37.7562143Z",
    "lastUpdateDate": "2021-02-16T21:18:37.7562143Z",
    "birds": [
      {
        "birdId": 1002,
        "class": "Aves",
        "order": "Charadriiformes",
        "family": "Stercorariidae",
        "genus": "Stercorarius",
        "species": "Stercorarius parasiticus",
        "englishName": "Arctic Skua",
        "internationalName": "Parasitic Jaeger",
        "category": "A",
        "populationSize": "1,000 - 10,000 Pairs",
        "btoStatusInBritain": "Migrant Breeder, Passage Visitor",
        "thumbnailUrl": null,
        "creationDate": "2020-04-27T22:51:38.26Z",
        "lastUpdateDate": "2020-04-27T22:51:38.26Z",
        "conservationStatusId": 1,
        "observations": null,
        "birderStatus": 0,
        "tweetDay": null
      }
    ]
  },
  "birderStatus": "Common"
};

// Birds/BirdsList
export const fakeBirdsListResponse = [{ "birdId": 1002, "species": "Stercorarius parasiticus", "englishName": "Arctic Skua", "populationSize": "1,000 - 10,000 Pairs", "btoStatusInBritain": "Migrant Breeder, Passage Visitor", "thumbnailUrl": null, "conservationStatus": "Red", "conservationListColourCode": "Red", "birderStatus": "Common" }, { "birdId": 1003, "species": "Sterna paradisaea", "englishName": "Arctic Tern", "populationSize": "10,000 - 100,000 Pairs", "btoStatusInBritain": "Migrant Breeder, Passage Visitor", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1004, "species": "Recurvirostra avosetta", "englishName": "Avocet", "populationSize": "1,000 - 10,000 Pairs", "btoStatusInBritain": "Migrant/Resident Breeder, Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1005, "species": "Puffinus mauretanicus", "englishName": "Balearic Shearwater", "populationSize": "1,000 - 10,000 Birds", "btoStatusInBritain": "Passage Visitor", "thumbnailUrl": null, "conservationStatus": "Red", "conservationListColourCode": "Red", "birderStatus": "Common" }, { "birdId": 1006, "species": "Tyto alba", "englishName": "Barn Owl", "populationSize": "1,000 - 10,000 Pairs", "btoStatusInBritain": "Resident Breeder", "thumbnailUrl": null, "conservationStatus": "Green", "conservationListColourCode": "Green", "birderStatus": "Common" }, { "birdId": 1007, "species": "Branta leucopsis", "englishName": "Barnacle Goose", "populationSize": "10,000 - 100,000 Individuals", "btoStatusInBritain": "Escaped Breeder, Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1008, "species": "Limosa lapponica", "englishName": "Bar-tailed Godwit", "populationSize": "10,000 - 100,000 Individuals", "btoStatusInBritain": "Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1009, "species": "Panurus biarmicus", "englishName": "Bearded Tit", "populationSize": "500 - 1000 Pairs", "btoStatusInBritain": "Resident Breeder, Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Green", "conservationListColourCode": "Green", "birderStatus": "Common" }, { "birdId": 1010, "species": "Cygnus columbianus", "englishName": "Bewick's Swan", "populationSize": "1,000 - 10,000 Individuals", "btoStatusInBritain": "Winter Migrant", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1012, "species": "Lyrurus tetrix", "englishName": "Black Grouse", "populationSize": "1,000 - 10,000 Males", "btoStatusInBritain": "Resident Breeder", "thumbnailUrl": null, "conservationStatus": "Red", "conservationListColourCode": "Red", "birderStatus": "Common" }, { "birdId": 1013, "species": "Cepphus grylle", "englishName": "Black Guillemot", "populationSize": "10,000 - 100,000 Pairs", "btoStatusInBritain": "Resident Breeder", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1015, "species": "Chlidonias niger", "englishName": "Black Tern", "populationSize": "Not recorded", "btoStatusInBritain": "Former Breeder, Passage Visitor", "thumbnailUrl": null, "conservationStatus": "Green", "conservationListColourCode": "Green", "birderStatus": "Common" }, { "birdId": 1016, "species": "Turdus merula", "englishName": "Blackbird", "populationSize": "4.9 million Pairs", "btoStatusInBritain": "Migrant/Resident Breeder, Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Green", "conservationListColourCode": "Green", "birderStatus": "Common" }, { "birdId": 1017, "species": "Sylvia atricapilla", "englishName": "Blackcap", "populationSize": "1.1 million Territories", "btoStatusInBritain": "Migrant Breeder, Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Green", "conservationListColourCode": "Green", "birderStatus": "Common" }, { "birdId": 1018, "species": "Chroicocephalus ridibundus", "englishName": "Black-headed Gull", "populationSize": "100,000 - 500,000 Pairs", "btoStatusInBritain": "Migrant/Resident Breeder, Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1020, "species": "Limosa limosa", "englishName": "Black-tailed Godwit", "populationSize": "100-500 Pairs", "btoStatusInBritain": "Migrant Breeder, Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Red", "conservationListColourCode": "Red", "birderStatus": "Common" }, { "birdId": 1021, "species": "Gavia arctica", "englishName": "Black-throated Diver", "populationSize": "100-500 Pairs", "btoStatusInBritain": "Migrant/Resident Breeder, Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1022, "species": "Cyanistes caeruleus", "englishName": "Blue Tit", "populationSize": "3.4 million Territories", "btoStatusInBritain": "Resident Breeder, Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Green", "conservationListColourCode": "Green", "birderStatus": "Common" }, { "birdId": 1023, "species": "Fringilla montifringilla", "englishName": "Brambling", "populationSize": "100,000 - 500,000 Individuals", "btoStatusInBritain": "Scarce Breeder, Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Green", "conservationListColourCode": "Green", "birderStatus": "Common" }, { "birdId": 1024, "species": "Branta bernicla", "englishName": "Brent Goose", "populationSize": "10,000 - 100,000 Individuals", "btoStatusInBritain": "Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1025, "species": "Pyrrhula pyrrhula", "englishName": "Bullfinch", "populationSize": "100,000 - 500,000 Territories", "btoStatusInBritain": "Resident Breeder, Scarce Visitor", "thumbnailUrl": null, "conservationStatus": "Amber", "conservationListColourCode": "Orange", "birderStatus": "Common" }, { "birdId": 1026, "species": "Buteo buteo", "englishName": "Buzzard", "populationSize": "10,000 - 100,000 Pairs", "btoStatusInBritain": "Resident Breeder, Passage/Winter Visitor", "thumbnailUrl": null, "conservationStatus": "Green", "conservationListColourCode": "Green", "birderStatus": "Common" }, { "birdId": 1027, "species": "Branta canadensis", "englishName": "Canada Goose", "populationSize": "10,000 - 100,000 Pairs", "btoStatusInBritain": "Introduced Breeder, Accidental", "thumbnailUrl": null, "conservationStatus": "Not assessed", "conservationListColourCode": "Black", "birderStatus": "Common" }];



export const fakeBirdIndexResponse = {"totalItems":227,"items":[{"birdId":1002,"species":"Stercorarius parasiticus","englishName":"Arctic Skua","populationSize":"1,000 - 10,000 Pairs","btoStatusInBritain":"Migrant Breeder, Passage Visitor","thumbnailUrl":null,"conservationStatus":"Red","conservationListColourCode":"Red","birderStatus":"Common"},{"birdId":1003,"species":"Sterna paradisaea","englishName":"Arctic Tern","populationSize":"10,000 - 100,000 Pairs","btoStatusInBritain":"Migrant Breeder, Passage Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1004,"species":"Recurvirostra avosetta","englishName":"Avocet","populationSize":"1,000 - 10,000 Pairs","btoStatusInBritain":"Migrant/Resident Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1005,"species":"Puffinus mauretanicus","englishName":"Balearic Shearwater","populationSize":"1,000 - 10,000 Birds","btoStatusInBritain":"Passage Visitor","thumbnailUrl":null,"conservationStatus":"Red","conservationListColourCode":"Red","birderStatus":"Common"},{"birdId":1006,"species":"Tyto alba","englishName":"Barn Owl","populationSize":"1,000 - 10,000 Pairs","btoStatusInBritain":"Resident Breeder","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1007,"species":"Branta leucopsis","englishName":"Barnacle Goose","populationSize":"10,000 - 100,000 Individuals","btoStatusInBritain":"Escaped Breeder, Winter Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1008,"species":"Limosa lapponica","englishName":"Bar-tailed Godwit","populationSize":"10,000 - 100,000 Individuals","btoStatusInBritain":"Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1009,"species":"Panurus biarmicus","englishName":"Bearded Tit","populationSize":"500 - 1000 Pairs","btoStatusInBritain":"Resident Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1010,"species":"Cygnus columbianus","englishName":"Bewick's Swan","populationSize":"1,000 - 10,000 Individuals","btoStatusInBritain":"Winter Migrant","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1012,"species":"Lyrurus tetrix","englishName":"Black Grouse","populationSize":"1,000 - 10,000 Males","btoStatusInBritain":"Resident Breeder","thumbnailUrl":null,"conservationStatus":"Red","conservationListColourCode":"Red","birderStatus":"Common"},{"birdId":1013,"species":"Cepphus grylle","englishName":"Black Guillemot","populationSize":"10,000 - 100,000 Pairs","btoStatusInBritain":"Resident Breeder","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1015,"species":"Chlidonias niger","englishName":"Black Tern","populationSize":"Not recorded","btoStatusInBritain":"Former Breeder, Passage Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1016,"species":"Turdus merula","englishName":"Blackbird","populationSize":"4.9 million Pairs","btoStatusInBritain":"Migrant/Resident Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1017,"species":"Sylvia atricapilla","englishName":"Blackcap","populationSize":"1.1 million Territories","btoStatusInBritain":"Migrant Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1018,"species":"Chroicocephalus ridibundus","englishName":"Black-headed Gull","populationSize":"100,000 - 500,000 Pairs","btoStatusInBritain":"Migrant/Resident Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1020,"species":"Limosa limosa","englishName":"Black-tailed Godwit","populationSize":"100-500 Pairs","btoStatusInBritain":"Migrant Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Red","conservationListColourCode":"Red","birderStatus":"Common"},{"birdId":1021,"species":"Gavia arctica","englishName":"Black-throated Diver","populationSize":"100-500 Pairs","btoStatusInBritain":"Migrant/Resident Breeder, Winter Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1022,"species":"Cyanistes caeruleus","englishName":"Blue Tit","populationSize":"3.4 million Territories","btoStatusInBritain":"Resident Breeder, Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1023,"species":"Fringilla montifringilla","englishName":"Brambling","populationSize":"100,000 - 500,000 Individuals","btoStatusInBritain":"Scarce Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1024,"species":"Branta bernicla","englishName":"Brent Goose","populationSize":"10,000 - 100,000 Individuals","btoStatusInBritain":"Winter Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1025,"species":"Pyrrhula pyrrhula","englishName":"Bullfinch","populationSize":"100,000 - 500,000 Territories","btoStatusInBritain":"Resident Breeder, Scarce Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1026,"species":"Buteo buteo","englishName":"Buzzard","populationSize":"10,000 - 100,000 Pairs","btoStatusInBritain":"Resident Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1027,"species":"Branta canadensis","englishName":"Canada Goose","populationSize":"10,000 - 100,000 Pairs","btoStatusInBritain":"Introduced Breeder, Accidental","thumbnailUrl":null,"conservationStatus":"Not assessed","conservationListColourCode":"Black","birderStatus":"Common"},{"birdId":1028,"species":"Tetrao urogallus","englishName":"Capercaillie","populationSize":"Not recorded","btoStatusInBritain":"Not recorded","thumbnailUrl":null,"conservationStatus":"Red","conservationListColourCode":"Red","birderStatus":"Common"},{"birdId":1029,"species":"Corvus corone","englishName":"Carrion Crow","populationSize":"1 million Territories","btoStatusInBritain":"Resident Breeder, Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1030,"species":"Larus cachinnans","englishName":"Caspian Gull","populationSize":"Not recorded","btoStatusInBritain":"Scarce Visitor","thumbnailUrl":null,"conservationStatus":"Amber","conservationListColourCode":"Orange","birderStatus":"Common"},{"birdId":1031,"species":"Cettia cetti","englishName":"Cetti's Warbler","populationSize":"1,000 - 10,000 Males","btoStatusInBritain":"Resident Breeder, Passage Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1032,"species":"Fringilla coelebs","englishName":"Chaffinch","populationSize":"5.8 million Territories","btoStatusInBritain":"Resident Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1033,"species":"Phylloscopus collybita","englishName":"Chiffchaff","populationSize":"1.1 million Territories","btoStatusInBritain":"Migrant Breeder, Passage/Winter Visitor","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"},{"birdId":1034,"species":"Pyrrhocorax pyrrhocorax","englishName":"Chough","populationSize":"100-500 Pairs","btoStatusInBritain":"Resident Breeder","thumbnailUrl":null,"conservationStatus":"Green","conservationListColourCode":"Green","birderStatus":"Common"}]}



export const fakeIBirdArray: IBirdSummary[] =
  [
    {
      birdId: 1002,
      species: "Stercorarius parasiticus",
      englishName: "Arctic Skua",
      populationSize: "1,000 - 10,000 Pairs",
      btoStatusInBritain: "Migrant Breeder, Passage Visitor",
      thumbnailUrl: null,
      conservationStatus: "Red",
      conservationListColourCode: "Red",
      birderStatus: "Common"
    },
    {
      birdId: 1003,
      species: "Sterna paradisaea",
      englishName: "Arctic Tern",
      populationSize: "10,000 - 100,000 Pairs",
      btoStatusInBritain: "Migrant Breeder, Passage Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1004,
      species: "Recurvirostra avosetta",
      englishName: "Avocet",
      populationSize: "1,000 - 10,000 Pairs",
      btoStatusInBritain: "Migrant/Resident Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1005,
      species: "Puffinus mauretanicus",
      englishName: "Balearic Shearwater",
      populationSize: "1,000 - 10,000 Birds",
      btoStatusInBritain: "Passage Visitor",
      thumbnailUrl: null,
      conservationStatus: "Red",
      conservationListColourCode: "Red",
      birderStatus: "Common"
    },
    {
      birdId: 1006,
      species: "Tyto alba",
      englishName: "Barn Owl",
      populationSize: "1,000 - 10,000 Pairs",
      btoStatusInBritain: "Resident Breeder",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1007,
      species: "Branta leucopsis",
      englishName: "Barnacle Goose",
      populationSize: "10,000 - 100,000 Individuals",
      btoStatusInBritain: "Escaped Breeder, Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1008,
      species: "Limosa lapponica",
      englishName: "Bar-tailed Godwit",
      populationSize: "10,000 - 100,000 Individuals",
      btoStatusInBritain: "Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1009,
      species: "Panurus biarmicus",
      englishName: "Bearded Tit",
      populationSize: "500 - 1000 Pairs",
      btoStatusInBritain: "Resident Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1010,
      species: "Cygnus columbianus",
      englishName: "Bewick's Swan",
      populationSize: "1,000 - 10,000 Individuals",
      btoStatusInBritain: "Winter Migrant",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1012,
      species: "Lyrurus tetrix",
      englishName: "Black Grouse",
      populationSize: "1,000 - 10,000 Males",
      btoStatusInBritain: "Resident Breeder",
      thumbnailUrl: null,
      conservationStatus: "Red",
      conservationListColourCode: "Red",
      birderStatus: "Common"
    },
    {
      birdId: 1013,
      species: "Cepphus grylle",
      englishName: "Black Guillemot",
      populationSize: "10,000 - 100,000 Pairs",
      btoStatusInBritain: "Resident Breeder",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1015,
      species: "Chlidonias niger",
      englishName: "Black Tern",
      populationSize: "Not recorded",
      btoStatusInBritain: "Former Breeder, Passage Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1016,
      species: "Turdus merula",
      englishName: "Blackbird",
      populationSize: "4.9 million Pairs",
      btoStatusInBritain: "Migrant/Resident Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1017,
      species: "Sylvia atricapilla",
      englishName: "Blackcap",
      populationSize: "1.1 million Territories",
      btoStatusInBritain: "Migrant Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1018,
      species: "Chroicocephalus ridibundus",
      englishName: "Black-headed Gull",
      populationSize: "100,000 - 500,000 Pairs",
      btoStatusInBritain: "Migrant/Resident Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1020,
      species: "Limosa limosa",
      englishName: "Black-tailed Godwit",
      populationSize: "100-500 Pairs",
      btoStatusInBritain: "Migrant Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Red",
      conservationListColourCode: "Red",
      birderStatus: "Common"
    },
    {
      birdId: 1021,
      species: "Gavia arctica",
      englishName: "Black-throated Diver",
      populationSize: "100-500 Pairs",
      btoStatusInBritain: "Migrant/Resident Breeder, Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1022,
      species: "Cyanistes caeruleus",
      englishName: "Blue Tit",
      populationSize: "3.4 million Territories",
      btoStatusInBritain: "Resident Breeder, Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1023,
      species: "Fringilla montifringilla",
      englishName: "Brambling",
      populationSize: "100,000 - 500,000 Individuals",
      btoStatusInBritain: "Scarce Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1024,
      species: "Branta bernicla",
      englishName: "Brent Goose",
      populationSize: "10,000 - 100,000 Individuals",
      btoStatusInBritain: "Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1025,
      species: "Pyrrhula pyrrhula",
      englishName: "Bullfinch",
      populationSize: "100,000 - 500,000 Territories",
      btoStatusInBritain: "Resident Breeder, Scarce Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1026,
      species: "Buteo buteo",
      englishName: "Buzzard",
      populationSize: "10,000 - 100,000 Pairs",
      btoStatusInBritain: "Resident Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1027,
      species: "Branta canadensis",
      englishName: "Canada Goose",
      populationSize: "10,000 - 100,000 Pairs",
      btoStatusInBritain: "Introduced Breeder, Accidental",
      thumbnailUrl: null,
      conservationStatus: "Not assessed",
      conservationListColourCode: "Black",
      birderStatus: "Common"
    },
    {
      birdId: 1028,
      species: "Tetrao urogallus",
      englishName: "Capercaillie",
      populationSize: "Not recorded",
      btoStatusInBritain: "Not recorded",
      thumbnailUrl: null,
      conservationStatus: "Red",
      conservationListColourCode: "Red",
      birderStatus: "Common"
    },
    {
      birdId: 1029,
      species: "Corvus corone",
      englishName: "Carrion Crow",
      populationSize: "1 million Territories",
      btoStatusInBritain: "Resident Breeder, Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1030,
      species: "Larus cachinnans",
      englishName: "Caspian Gull",
      populationSize: "Not recorded",
      btoStatusInBritain: "Scarce Visitor",
      thumbnailUrl: null,
      conservationStatus: "Amber",
      conservationListColourCode: "Orange",
      birderStatus: "Common"
    },
    {
      birdId: 1031,
      species: "Cettia cetti",
      englishName: "Cetti's Warbler",
      populationSize: "1,000 - 10,000 Males",
      btoStatusInBritain: "Resident Breeder, Passage Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1032,
      species: "Fringilla coelebs",
      englishName: "Chaffinch",
      populationSize: "5.8 million Territories",
      btoStatusInBritain: "Resident Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1033,
      species: "Phylloscopus collybita",
      englishName: "Chiffchaff",
      populationSize: "1.1 million Territories",
      btoStatusInBritain: "Migrant Breeder, Passage/Winter Visitor",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    },
    {
      birdId: 1034,
      species: "Pyrrhocorax pyrrhocorax",
      englishName: "Chough",
      populationSize: "100-500 Pairs",
      btoStatusInBritain: "Resident Breeder",
      thumbnailUrl: null,
      conservationStatus: "Green",
      conservationListColourCode: "Green",
      birderStatus: "Common"
    }
  ]