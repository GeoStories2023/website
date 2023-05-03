import React, { useEffect, useState } from 'react'
import "@/style/Tourhistory.scss"
import TourLayout from '../TourLayout'
import tourhistoryImg from "@/assets/tourhistory.jpg"
import { FetchApi } from '@/FetchApi'

function Tourhistory() {

  const [tours, setTours] = useState([])
  const accessToken = localStorage.getItem('accessToken') ?? ""

  useEffect(() => {
    console.log("TourHistory")
    FetchApi.get('/tours/started', accessToken).then((res) => {
      console.log("TourHistory", res)
      if (res) {
        setTours(res)
      }
    })
  }, [])
  return (
    <div className="tourhistory-container">
      <TourLayout title="Tour History" image={tourhistoryImg} tours={tours} />
    </div>
  )
}

export default Tourhistory
