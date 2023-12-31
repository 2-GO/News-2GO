
type Atricle = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    laguage: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
};

type NewsResponse = {
    pagination: Pagination, 
    data: Article[];
};


type Category = 
| "Business" | "Entertainment" | "General" | "Health" | "Science" | "Sports" | "Tech";
