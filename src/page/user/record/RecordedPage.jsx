import RecordedCard from '@/components/Cards/Recorded/RecordedCard'
import HeaderBack from '@/components/HeaderBack'
import React from 'react'

function RecordedPage() {
  return (
    <div>
      <HeaderBack text="Recorded Experience" link={"/user"}/>
      <div className="my-5 grid grid-cols-3 2xl:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-4">
<RecordedCard/>
<RecordedCard/>
<RecordedCard/>
<RecordedCard/>

</div>


    </div>
  )
}

export default RecordedPage
