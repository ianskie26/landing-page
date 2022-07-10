import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Cards from "./components/Cards"
import data from "./data"

export default function App() {

  const cards = data.map(item => {
    return (
      <Cards
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="cards--wrapper">
        <h5 className="cards--title"><span>We share our thoughts on design</span></h5>
      </div>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}