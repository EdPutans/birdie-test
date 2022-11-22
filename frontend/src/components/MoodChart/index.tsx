import React from 'react';
import './style.css';
import Section from '../Section';
import { XAxis, YAxis, CartesianGrid, Line, ComposedChart, Bar } from 'recharts'
import { ticks, transformMoodData } from './utils/transformData';
import { numberToCapitalisedMood } from './utils/moodNumberConverters';
import { useStore } from '../../utils/store';

const LINE_FILL_COLOR = "#00ff00"
const BAR_FILL_COLOR = "#32faee"
const GRID_COLOR = "#aaa"

export const noRecordsTestId = 'noRecordsTestId'

function MoodGraph() {
  const { moodRecords, fetchMoodForUserId, recipientId } = useStore();

  React.useEffect(() => {
    if (!recipientId) return;

    fetchMoodForUserId()
  }, [fetchMoodForUserId, recipientId])

  const convertedData = transformMoodData(moodRecords);

  if (!moodRecords.length) return <p data-testid={noRecordsTestId}>Looks like there's no data yet. 😓</p>

  // arbitraty numbers that handle low amounts of data points
  const chartWidth = convertedData.length < 10 ? 400 : convertedData.length * 20;

  return (
    <Section title={`Mood over time for recipient id ${recipientId}`}>
      <div className='moodchart_container'>
        <ComposedChart data={convertedData} height={250} width={chartWidth}>
          <YAxis ticks={ticks} tickCount={3} tickFormatter={numberToCapitalisedMood} />
          <XAxis dataKey="date" />
          <CartesianGrid stroke={GRID_COLOR} />
          <Bar dataKey="mood" fill={BAR_FILL_COLOR} />
          <Line type="monotone" dataKey='mood' stroke={LINE_FILL_COLOR} />
        </ComposedChart>
      </div>
    </Section>
  )
}

export default React.memo(MoodGraph);
