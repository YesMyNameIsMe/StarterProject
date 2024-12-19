import React from 'react'
import VoteComponent from '../components/VoteComponent'

function ActivityPage() {
  return (
    <div>
      <div className="relative my-12 flex flex-col items-center">
        Voting
        <div className="relative z-10 p-6 w-full max-w-2x1 flex flex-col gap-6">
          <VoteComponent />
        </div>
      </div>
    </div>
  );
}

export default ActivityPage