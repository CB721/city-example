import { SearchResult, searchResults } from "@/app/data/searchResults";

export interface QTechAiResponse {
  output: string;
  output2?: string;
  timeToComplete: number;
  error?: string;
  intro?: string;
}

const introPhrases = [
  "I didn't find much on that, but here's what I got: \n",
  "Here's what I found: \n",
  "Here goes nothing: \n",
  "I have a bad feeling about this... \n",
  "Well, what do we have here? \n",
  "I promise you, not a scratch! \n",
  "Would you get going, you pirate! \n",
  "You truly belong here with us among the clouds. \n",
  "I'm responsible these days. It's the price you pay for being successful. \n",
  "I'm not a hero. I'm a scoundrel. There's a difference. \n",
  "I've just made a deal that will keep the Empire out of here forever. \n",
  "You know, seeing you sure brings back a few things. \n",
  "I'm sorry, am I interrupting anything? \n",
  "I searched all the archives and found this: \n",
];

const starWarsWords = [
  "Alderaan",
  "Anakin",
  "Darth",
  "Vader",
  "Tatooine",
  "Luke",
  "Leia",
  "Obi-Wan",
  "Kenobi",
  "Sith",
  "Jedi",
  "TheForce",
  "Rebel",
  "Empire",
  "Han",
  "Solo",
  "Chewbacca",
  "Millennium Falcon",
  "R2-D2",
  "C-3PO",
  "Stormtrooper",
  "X-Wing",
  "TIE fighter",
  "Death Star",
  "Boba Fett",
  "Mace Windu",
  "Qui-Gon",
  "Jinn",
  "Padmé",
  "Amidala",
  "Jar Jar",
  "Binks",
  "Darth Maul",
  "Count Dooku",
  "Grievous",
  "Yoda",
  "Sarlacc",
  "Womp Rat",
  "Coruscant",
  "Endor",
  "Dagobah",
  "Mustafar",
  "Hoth",
  "Naboo",
  "Kashyyyk",
  "Bespin",
  "Jakku",
  "Crait",
  "Rogue One",
  "Ahsoka",
  "Sabine",
  "Ezra",
  "Maul",
  "Kylo Ren",
  "Snoke",
  "Rey",
  "Finn",
  "Poe",
  "BB-8",
  "Resistance",
  "First Order",
  "Clone Trooper",
  "Reylo",
  "Mandalorian",
  "Bounty Hunter",
  "Jango Fett",
  "Clone Wars",
  "Fennec Shand",
  "Gungan",
  "Sith Lord",
  "Moff",
  "Palpatine",
  "Chewie",
  "Lobot",
  "Yavin",
  "Wookiee",
  "Jabba",
  "Vulpter",
  "Sith Academy",
  "Holocron",
  "Ewok",
  "Droid",
  "Hyperspace",
  "Bespin",
  "Togruta",
  "Togruta",
  "TIE",
  "Porg",
  "Nightsister",
  "The Old Republic",
  "Dathomir",
  "Luminara",
  "Darth Revan",
  "Lightsaber",
  "Kessel run",
  "Geonosis",
  "Rogue Squadron",
  "Sith Empire",
  "Vader Down",
  "Senate",
];

function constructQueryResults(query: string): string {
  const queryTerms = query.split(" ");

  const results: SearchResult[] = [];

  queryTerms.forEach((term) => {
    const termCountInDescription = searchResults
      .map((result, index) => {
        const description = result.description.toLowerCase();
        if (description.includes(term)) {
          return { [index]: description.split(term).length - 1 };
        } else {
          return { [index]: 0 };
        }
      })
      .filter((result) => Object.values(result)[0] > 0)
      .sort((a, b) => {
        return Object.values(b)[0] - Object.values(a)[0];
      })
      .map((count: { [key: string]: number }) => {
        return searchResults[parseInt(Object.keys(count)[0])];
      });

    results.push(...termCountInDescription);
  });

  return constructOutput(results);
}

function constructOutput(
  relatedSearchResults: SearchResult[],
  includeRandomStarWarsWord?: boolean
): string {
  let output2 = "";

  const randomNumOfIterations = Math.floor(Math.random() * 5) + 1;
  let j = 0;

  while (j < randomNumOfIterations) {
    const descriptions = relatedSearchResults
      .map((result) => result.description.split(" "))
      .sort((a, b) => a.length - b.length);

    for (let i = 0; i < descriptions[0]?.length; i++) {
      const randomDescriptionIndex = Math.floor(
        Math.random() * descriptions.length
      );

      let randomWord = descriptions[randomDescriptionIndex][i] || "";

      if (
        output2[output2.length - 2] === "." &&
        randomWord[randomWord?.length - 1] === "."
      ) {
        randomWord = randomWord.slice(0, randomWord.length - 1);
      }
      // // if randomWord is capital, add a period and space before it
      // if (randomWord[0] === randomWord[0].toUpperCase() && output2[output2.length - 2] !== "."  && output2[output2.length - 1] !== "," && output2.length > 0) {
      //   output2 += ". ";
      // }
      const randomStarWarsWord =
        starWarsWords[Math.floor(Math.random() * starWarsWords.length)];
      const addRandomStarWarsWord = Math.random() > 0.9;
      if (addRandomStarWarsWord && includeRandomStarWarsWord) {
        output2 += randomStarWarsWord + " ";
      }

      output2 += randomWord + " ";
    }

    output2 = output2.trim();

    // if there is a comma, don't end there
    if (output2[output2.length - 1] === ",") {
      output2 += " ";
      continue;
    }

    // add punctuation
    if (output2[output2.length - 1] !== ".") {
      output2 += ". ";
    }

    j++;
  }

  return output2;
}

function fetchQTechResp(
  relatedSearchResults: SearchResult[],
  query: string,
  includeIntro?: boolean
): Promise<QTechAiResponse> {
  const randomDelay = Math.floor(Math.random() * 1000) + 1000;
  const randomError = Math.random() > 0.8;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomError) {
        reject("Error fetching results");
      }

      resolve({
        output: constructQueryResults(query),
        output2: constructOutput(relatedSearchResults, true),
        timeToComplete: randomDelay,
        intro: includeIntro
          ? introPhrases[Math.floor(Math.random() * introPhrases.length)]
          : undefined,
      });
    }, randomDelay);
  });
}

export default fetchQTechResp;
