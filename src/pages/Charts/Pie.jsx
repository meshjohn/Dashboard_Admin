import React from "react";
import { pieChartData } from "../../data/dummy";
import { ChartsHeader } from "../../component";
import { Pie as PieChart } from '../../component';

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown"></ChartsHeader>
      <div className="w-full">
        <PieChart id="chart-pie" data={pieChartData} legendVisibility height='full' ></PieChart>
      </div>
    </div>
  );
};

export default Pie;