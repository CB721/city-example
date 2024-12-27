'use client'

import { useEffect, useState } from "react";
import CursorIcon from '../../Icons/Cursor'
import { QTechAiResponse } from "@/services/ai";
import styles from './AiResponse.module.css';
import useInterval from "@/hooks/useInterval";

export interface AiResponseUIProps {
  aiRes: QTechAiResponse;
  query: string;
}

function AiResponse({ aiRes, query }: AiResponseUIProps) {
  const [replacedOutput, setReplacedOutput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [i, setI] = useState<number>(0);

  const interval = (aiRes.timeToComplete / aiRes.output.length) + Math.random() * 100;

  useEffect(() => {
    let x = aiRes.output.replaceAll('[term]', query);
    Array.from({ length: 4 }).forEach((_, i) => {
      x = x.replaceAll(`[term${i + 2}]`, query);
    });
    setReplacedOutput(x);
  }, [aiRes, query]);

  useInterval(() => {
    if (output.length < replacedOutput.length && replacedOutput.length === aiRes.output.length) {
      setOutput((prevOutput) => prevOutput + replacedOutput[i]);
      setI((prevI) => prevI + 1);
    }
  }, interval);

  const timeToComplete = Math.round((aiRes.timeToComplete + (interval * aiRes.output.length)) / 1000);
  const finishedTyping = output.length === aiRes.output.length;

  return (
    <div className="rounded max-w-full h-auto bg-background text-primary mb-3 py-2 px-4">
      <h3 className="text-lg text-tertiary">Lando AI Response</h3>
      {!aiRes.error ? (
        <>
          {aiRes.intro && <p className={`text-base text-secondary mb-2 ${styles.textFocusIn}`}><em>{aiRes.intro.trim()}</em></p>}
          <span className="p-1">
            {output.trim()}
            {!finishedTyping && (
              <CursorIcon className={styles.cursor} />
            )}
          </span>
          <p className={"text-sm text-secondary min-h-5 text-right mt-2"}>
            {finishedTyping &&
              <span className={styles.textFocusIn}>
                Time to complete: ~{timeToComplete} second{timeToComplete > 1 ? 's' : ''}
              </span>
            }
          </p>
        </>
      ) : (
        <p className="text-base bg-red-600 p-1 max-w-fit text-primary">{aiRes.error}</p>
      )}
      <p className="text-sm text-secondary text-right">QTech AI Summary <em>Beta</em></p>
    </div>
  );
}

export default AiResponse;