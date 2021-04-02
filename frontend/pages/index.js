import Head from 'next/head'
import { FooterComponent } from './components/FooterComponent'
import {  HomeComponents } from './components/HomeComponents'
import { NavigationComponent } from './components/NavigationComponent'

export default function Home() {
  return (
    <div className=" p-8 mr-2  ml-2">
      <Head>
        <title>Book Planner</title>
        {/* //TODO : THINK OF A NICE ICON*/}
      </Head>


      <NavigationComponent></NavigationComponent>
      

      <main>
        <HomeComponents></HomeComponents>
        

      </main>

     <FooterComponent></FooterComponent>
    </div>
  )
}
