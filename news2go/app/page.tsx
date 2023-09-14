import fetchNews from "@/lib/fetchNews";
import { categories } from "../constants";


export default async function Homepage() {

  const news: NewsResponse = await fetchNews(categories.join(","));  


  return (
    <div>
      HomePage
    </div>
  )
};
