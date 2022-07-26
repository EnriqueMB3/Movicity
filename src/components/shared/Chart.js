import React from 'react'
import { PieChart } from './styles'

export const Chart = () => {
  return (
    <div className="single-chart">
    <PieChart viewBox="0 0 36 36">
        <path className="circle-bg"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path className="circle"
        strokeDasharray="87, 100"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">8.7</text>
    </PieChart>
</div>
  )
}