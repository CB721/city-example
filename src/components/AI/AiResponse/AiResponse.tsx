'use client'

import { useEffect, useState } from "react";
import Image from 'next/image';
import CursorIcon from '../../Icons/Cursor'
import { QTechAiResponse } from "@/services/ai";
import styles from './AiResponse.module.css';
import useInterval from "@/hooks/useInterval";
import SyncIcon from '@mui/icons-material/Sync';

export interface AiResponseUIProps {
  aiRes: QTechAiResponse;
  query: string;
}

function AiResponse({ aiRes, query }: AiResponseUIProps) {
  const [replacedOutput, setReplacedOutput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [i, setI] = useState<number>(0);
  const [usedOutput, setUsedOutput] = useState<1 | 2>(1);
  const [finishedTyping, setFinishedTyping] = useState({
    1: false,
    2: false
  })

  const interval = (aiRes.timeToComplete / (aiRes[usedOutput === 1 ? 'output' : 'output2']?.length || aiRes.timeToComplete)) + (Math.random() * 55);

  useEffect(() => {
    // Reset output and i when replacedOutput changes
    setOutput('');
    setI(0);
  }, [replacedOutput]);

  useEffect(() => {
    if (aiRes.output.length < 20) {
      setUsedOutput(2);
    }
  }, [usedOutput, aiRes]);

  useEffect(() => {
    let x = aiRes[usedOutput === 1 ? 'output' : 'output2']?.replaceAll('[term]', query);
    if (!x) return;

    Array.from({ length: 4 }).forEach((_, i) => {
      x = x!.replaceAll(`[term${i + 2}]`, query);
    });
    setReplacedOutput(x);
  }, [aiRes, query, usedOutput]);

  useEffect(() => {
    if (output.length === replacedOutput.length && !finishedTyping[usedOutput]) {
      setFinishedTyping((prev) => ({ ...prev, [usedOutput]: true }));
    }
  }, [finishedTyping, output.length, replacedOutput.length, usedOutput]);

  useInterval(() => {
    if (output.length < replacedOutput.length) {
      setOutput((prevOutput) => prevOutput + replacedOutput[i]);
      setI((prevI) => prevI + 1);
    }
  }, interval);

  const timeToComplete = Math.round((aiRes.timeToComplete + (interval * (aiRes[usedOutput === 1 ? 'output' : 'output2']?.length || 1))) / 1000);

  return (
    <div className="rounded max-w-full h-auto bg-background text-primary mb-3 py-2 px-4">
      <div className="flex justify-start items-center">
        <Image
          src="/images/profiles/lando.jpg"
          alt="Lando AI"
          width={28}
          height={28}
          className='rounded-full w-7 h-7 object-cover mr-2'
        />
        <h3 className="text-lg text-tertiary">Lando AI Response</h3>
      </div>
      {!aiRes.error ? (
        <>
          {aiRes.intro && <p className={`text-base text-secondary mb-2 ${styles.textFocusIn}`}><em>{aiRes.intro.trim()}</em></p>}
          <span className="p-1">
            {output.trim()}
            {!finishedTyping[usedOutput] && (
              <CursorIcon className={styles.cursor} />
            )}
          </span>

        </>
      ) : (
        <p className="text-base bg-red-600 p-1 max-w-fit text-primary mt-2">{aiRes.error}</p>
      )}
      <div className="flex justify-between items-end">
        <SyncIcon
          className="text-primary text-sm w-3.5 h-3.5 cursor-pointer"
          onClick={() => {
            if (usedOutput === 1 && (aiRes.output2 || '').length > 20) {
              setUsedOutput(2);
              setOutput('');
              setI(0);
            } else if (usedOutput === 2 && (aiRes.output || '').length > 20) {
              setUsedOutput(1);
              setOutput('');
              setI(0);
            }
          }}
        />
        <div>
          <p className={"text-sm text-secondary min-h-5 text-right mt-2"}>
            {finishedTyping[usedOutput] && !aiRes.error &&
              <span className={styles.textFocusIn}>
                Time to complete: ~{timeToComplete} second{timeToComplete > 1 ? 's' : ''}
              </span>
            }
          </p>
          <p className="text-sm text-secondary text-right">QTech AI Summary <em>Beta</em></p>
        </div>
      </div>
    </div>
  );
}

export default AiResponse;