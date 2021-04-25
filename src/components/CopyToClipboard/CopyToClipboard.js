import React from "react";
import PropTypes from 'prop-types';

// Author: colebemis
// From: https://codesandbox.io/s/copy-to-clipboard-animation-qt8pf?file=/src/index.js:16-2490
const propTypes = {
  text: PropTypes.string.isRequired,
};

const CopyToClipboard = (props) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = () => {
    const { text } = props;
    navigator.clipboard.writeText(text);
    setCopied(true);
  }

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "inline-block"
      }}
    >
      <button
        className="btn-icon"
        onClick={handleCopy}
        style={{
          appearance: "none",
          padding: 8,
          border: 0,
          outline: 0,
          cursor: "pointer"
        }}
      >
        <div
          style={{
            position: "relative",
            height: 16,
            width: 16
          }}
        >
          <Clippy
            style={{
              color: "#2f363d",
              position: "absolute",
              top: 0,
              left: 0,
              strokeDasharray: 50,
              strokeDashoffset: copied ? -50 : 0,
              transition: "all 300ms ease-in-out"
            }}
          />
          <Check
            isVisible={copied}
            style={{
              color: "#28a745",
              position: "absolute",
              top: 0,
              left: 0,
              strokeDasharray: 50,
              strokeDashoffset: copied ? 0 : -50,
              transition: "all 300ms ease-in-out"
            }}
          />
        </div>
      </button>
    </div>
  );
}

const Clippy = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

const Check = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}

CopyToClipboard.propTypes = propTypes;
export default CopyToClipboard;
