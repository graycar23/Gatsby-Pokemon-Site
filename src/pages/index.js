// Step 1: Import React
import * as React from 'react'

import { useDispatch } from 'react-redux'
import { pieDataUpdateAction } from '../redux/pieData/pieActions'
import { usePieData } from '../redux/pieData/usePieData'

import Pie from '../components/pie'

import Layout from '../components/layout'

import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  const dispatch = useDispatch()
  const pieDataValues = usePieData()
  const pieDataUpdateActionFunction = pieDataUpdateAction

  console.log(pieDataValues)
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="An promotional image of various wrestlers from the wrestling company AEW."
        src="../images/aew.jpg"
      />
      <>
        <button onClick={() => dispatch(pieDataUpdateActionFunction())}>
          Update Data
        </button>
        <Pie
          data={pieDataValues}
          width={400}
          height={400}
          innerRadius={100}
          outerRadius={200}
          cornerRadius={15}
        />
      </>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage