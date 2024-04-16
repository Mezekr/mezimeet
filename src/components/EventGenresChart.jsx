import React, { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

const EvetGenersChart = ({ events }) => {
	const [data, setData] = useState([]);

	const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
	const COLORS = ['#DD0000', '#00DD00', '#0000DD', '#DDDD00', '#DD00DD'];

	useEffect(() => {
		setData(getData());
	}, [`${events}`]);

	const getData = () => {
		const data = genres.map((genre) => {
			const filteredEvents = events.filter((event) =>
				event.summary.includes(genre)
			);
			return {
				name: genre,
				value: filteredEvents.length,
			};
		});
		return data;
	};

	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		outerRadius,
		percent,
		index,
	}) => {
		const RADIAN = Math.PI / 180;
		const radius = outerRadius;
		const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
		const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
		return percent ? (
			<text
				x={x}
				y={y}
				fill={COLORS[index]}
				textAnchor={x > cx ? 'start' : 'end'}
				dominantBaseline="central"
			>
				{`${genres[index]} ${(percent * 100).toFixed(0)}%`}
			</text>
		) : null;
	};

	return (
		<ResponsiveContainer width="99%" height={400}>
			<PieChart>
				<Pie
					data={data}
					dataKey="value"
					fill="#8884d8"
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={120}
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index]} />
					))}
				</Pie>
				<Legend verticalAlign="bottom" height={36} />
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EvetGenersChart;