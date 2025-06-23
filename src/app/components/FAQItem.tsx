"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import clsx from "clsx";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "border border-gray-300 rounded-lg overflow-hidden transition-all duration-300",
        isOpen && "bg-[#D9D9D9]"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-full flex items-start justify-between gap-4 p-4 text-left transition-colors duration-200",
          isOpen ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"
        )}
      >
        <div className="flex items-start gap-2">
          {/* Qアイコン */}
          <div className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-[#002FFE] text-white text-xs font-bold mt-1">
            Q
          </div>
          <span className="text-lg font-semibold">{question}</span>
        </div>
        <FaChevronDown
          className={clsx(
            "mt-1 text-gray-600 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="mt-2 p-4 border-3 border-[#10B54A] rounded-lg bg-white flex items-start gap-2">
          {/* Aアイコン */}
          <div className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-[#10B54A] text-white text-xs font-bold mt-1">
            A
          </div>
          <div className="text-base leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
}


