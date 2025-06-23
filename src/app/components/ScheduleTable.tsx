// app/components/ScheduleTable.tsx
import React from 'react';

type ScheduleData = {
  [day: string]: {
    [time: string]: string;
  };
};

interface ScheduleTableProps {
  label: string; // 学年名 (例: B4)
  title: string; // 表示タイトル
  schedule: ScheduleData;
}

const timeSlots = ['1-2', '3-4', '5-6', '7-8', '9-10'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function ScheduleTable({ label, title, schedule }: ScheduleTableProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* タグと外枠の一体化（下辺で接続） */}
      <div className="relative mt-6">
        <div className="inline-block bg-blue-500 text-white font-bold px-6 py-1 rounded-t-md text-lg z-10 relative">
          {label}
        </div>

        <div className="border-2 border-black rounded-md -mt-1 pt-6">
          <div className="text-center font-semibold text-lg mb-2">{title}</div>

          <div className="overflow-x-auto px-4 pb-4">
            <table className="table-fixed border-collapse border border-black w-full text-sm">
              <thead>
                <tr>
                  <th className="border border-black bg-gray-100 w-20 py-2"></th>
                  {days.map((day) => (
                    <th key={day} className="border border-black bg-gray-100 py-2">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot) => (
                  <tr key={slot}>
                    <td className="border border-black bg-gray-50 font-semibold text-center py-2">{slot}</td>
                    {days.map((day) => {
                      const content = schedule[day]?.[slot] || '';
                      return (
                        <td key={day + slot} className="border border-black text-center py-2 align-middle">
                          {content && (
                            <div className="inline-block px-2 py-1 text-xs bg-white border-2 border-sky-400 rounded-md text-gray-800 w-[80px]">
                              {content}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
