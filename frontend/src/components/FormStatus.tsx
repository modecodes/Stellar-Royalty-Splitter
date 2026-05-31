import type { Network } from "../context/NetworkContext";
import { getStellarExpertTxUrl, formatTxHash } from "../lib/explorer";

export type FormStatusType = "ok" | "error" | "info";

interface FormStatusProps {
  type: FormStatusType;
  message: string;
  txHash?: string;
  network?: Network;
}

export default function FormStatus({ type, message, txHash, network }: FormStatusProps) {
  const showTxLink = type === "ok" && txHash && network;

  return (
    <div className={`form-status form-status--${type}`}>
      <span>{message}</span>
      {showTxLink && (
        <a
          className="form-status__tx-link"
          href={getStellarExpertTxUrl(network, txHash)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View transaction ${txHash} on Stellar Expert`}
        >
          <span className="form-status__tx-icon" aria-hidden="true">
            ↗
          </span>
          {formatTxHash(txHash)}
        </a>
      )}
    </div>
  );
}
