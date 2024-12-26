import { SearchResult } from "@/app/data/searchResults";

export interface QTechAiResponse {
  output: string;
  timeToComplete: number;
  error?: string;
}

function fetchQTechResp(searchResults: SearchResult[]): Promise<QTechAiResponse> {
  const randomDelay = Math.floor(Math.random() * 1000) + 1000;
  const randomError = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomError) {
        reject('Error fetching results');
      }

      let output = '';

      const randomNumOfIterations = Math.floor(Math.random() * 5) + 1;

      for (let i = 0; i < randomNumOfIterations; i++) {
        const descriptions = searchResults
          .map((result) => result.description.split(' '))
          .sort((a, b) => a.length - b.length);
  
        for (let i = 0; i < descriptions[0].length; i++) {
          const randomDescriptionIndex = Math.floor(Math.random() * descriptions.length);
          let randomWord = descriptions[randomDescriptionIndex][i];
          if (output[output.length - 2] === '.' && randomWord[randomWord.length - 1] === '.') {
            randomWord = randomWord.slice(0, randomWord.length - 1);
  
          }
          output += randomWord + ' ';
        }
  
        output = output.trim();
  
        if (output[output.length - 1] !== '.') {
          output += '. ';
        }
      }

      resolve({
        output,
        timeToComplete: randomDelay,
      });
    }, randomDelay);
  });
}

export default fetchQTechResp;