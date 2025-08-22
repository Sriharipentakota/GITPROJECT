import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart = ({ quizResults }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(107, 114, 128, 0.8)',
        },
      },
      y: {
        display: true,
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
        ticks: {
          color: 'rgba(107, 114, 128, 0.8)',
          callback: function(value) {
            return value + '%';
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 4,
        hoverRadius: 6,
      },
    },
  };

  const data = {
    labels: quizResults.length > 0 
      ? quizResults.map((_, index) => `Quiz ${index + 1}`)
      : ['No data'],
    datasets: [
      {
        data: quizResults.length > 0 
          ? quizResults.map(result => result.score)
          : [0],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  if (quizResults.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: '12rem', color: '#6c757d' }}>
        <div className="text-center">
          <div className="fs-2 mb-2">📊</div>
          <p>Take some quizzes to see your progress!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: '12rem' }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default ProgressChart;