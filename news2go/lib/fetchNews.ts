import { gql } from "graphql-request";


const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    const GET_QUERY = gql`
    query MyQuerry(
        $acess_key: String!
        $categories: String!
        $keywords: String

    ) {
        myQuery(
            acess_key: $access_key
            categories: $categories
            countries: "us"
            sort: "published_desc"
            keywords: $keywords
        ) {
            data {
                author
                category
                image
                description
                country
                language
                published_at
                source
                title
                url
            }
            pagination {
                count
                limit
                offset
                total
            }
        }
    }
  `;

//   const res = await fetch()
    
}

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=03191ce9267d6f370508eea60aaa4f43"