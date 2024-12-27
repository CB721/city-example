'use client'

import { useState } from "react";
import CursorIcon from '../../Icons/Cursor'
import { QTechAiResponse } from "@/services/ai";
import styles from './AiResponse.module.css';
import useInterval from "@/hooks/useInterval";

export interface AiResponseUIProps {
  aiRes: QTechAiResponse;
}

function AiResponse({ aiRes }: AiResponseUIProps) {
  const [output, setOutput] = useState<string>('');
  const [i, setI] = useState<number>(0);

  const interval = (aiRes.timeToComplete / aiRes.output.length) + Math.random() * 100;

  useInterval(() => {
    if (output.length < aiRes.output.length) {
      setOutput((prevOutput) => prevOutput + aiRes.output[i]);
      setI((prevI) => prevI + 1);
    }
  }, interval);

  const timeToComplete = Math.round(aiRes.timeToComplete / 1000);

  return (
    <div className="rounded max-w-full h-auto bg-background text-primary mb-3 py-2 px-4">
      <h3 className="text-lg text-tertiary">Lando AI Response</h3>
      {!aiRes.error ? (
        <>
          {aiRes.intro && <p className={`text-base text-secondary ${styles.textFocusIn}`}><em>{aiRes.intro.trim()}</em></p>}
          <span className="p-1">
            {output.trim()}
            {output.trim().length !== aiRes.output.trim().length && (
              <CursorIcon className={styles.cursor} />
            )}
          </span>
          <p className="text-sm text-secondary text-right">Time to complete: ~{timeToComplete} second{timeToComplete > 1 ? 's' : ''}</p>
        </>
      ) : (
        <p className="text-base bg-red-600 p-1 max-w-fit text-primary">{aiRes.error}</p>
      )}
      <p className="text-sm text-secondary text-right">Cutie AI <em>Beta</em></p>
    </div>
  );
}

export default AiResponse;