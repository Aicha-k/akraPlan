import Head from "next/head";
import { BooksComponent } from "./components/BooksComponent";

import { Provider } from "react-redux";
import { FooterComponent } from "./components/FooterComponent";
import { HomeComponents } from "./components/HomeComponents";
import { NavigationComponent } from "./components/NavigationComponent";
import { store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className=" p-8 mr-2  ml-2">
        <Head>
          <title>Book Planner</title>
          {/* //TODO : THINK OF A NICE ICON*/}
        </Head>
        <BooksComponent></BooksComponent>

        {/* <NavigationComponent></NavigationComponent>
      

      <main>
        <HomeComponents></HomeComponents>
        

      </main>

     <FooterComponent></FooterComponent> */}
      </div>
    </Provider>
  );
}
