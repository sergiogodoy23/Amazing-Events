import React from 'react'
import { EventsStats } from './EventsStats'
import { UpcomingStats } from './UpcomingStats'
import { PastStats } from './PastStats'

export const Tables = () => {
  return (
    <div className='container-section-tables'>

      <EventsStats />
      <UpcomingStats />
      <PastStats />


    </div>
  )
}
