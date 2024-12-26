import { QTechAiResponse } from "@/services/ai";

export interface AiResponseUIProps {
  aiRes: QTechAiResponse;
}

function AiResponse({ aiRes }: AiResponseUIProps) {
  return (
    <div className="rounded max-w-full h-auto bg-background text-primary mb-3 py-2 px-4">
      <h3 className="text-lg text-tertiary px-1">Lando AI Response</h3>
      {aiRes.intro && <p className="text-base text-secondary px-1"><em>{aiRes.intro.trim()}</em></p>}
      <p className="text-base text-secondary p-1">{aiRes.output.trim()}</p>
      {!aiRes.error ? (
        <p className="text-sm text-secondary text-right">Time to complete: ~{Math.round(aiRes.timeToComplete / 1000)} seconds</p>
      ) : (
        <p className="text-base bg-red-600 p-1 max-w-fit text-primary">{aiRes.error}</p>
      )}
      <p className="text-sm text-secondary text-right px-1">Q-Search <em>Beta</em></p>
    </div>
  );
}

export default AiResponse;