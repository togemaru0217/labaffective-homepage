'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export default function LabPieCharts() {
  const nationalityData = {
    labels: ['日本人学生', '留学生'],
    datasets: [
      {
        data: [9, 4],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const genderData = {
    labels: ['男性', '女性'],
    datasets: [
      {
        data: [11, 2],
        backgroundColor: ['#4BC0C0', '#FF9F40'],
      },
    ],
  };

  const yearData = {
    labels: ['B4', 'M1', 'M2', '博士', '交換留学生'],
    datasets: [
      {
        data: [3, 4, 2, 3, 1],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">日本人学生と留学生</h3>
        <Pie data={nationalityData} />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">男女割合</h3>
        <Pie data={genderData} />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">学年別割合</h3>
        <Pie data={yearData} />
      </div>
    </div>
  );
}
