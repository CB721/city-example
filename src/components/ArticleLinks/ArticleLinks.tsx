import { searchResults } from "@/app/data/searchResults";
import { Routes } from "@/constants/Routes";
import Container from '@mui/material/Container';
import ArticleLink from "./ArticleLink/ArticleLink";

interface ArticleLinksProps {
  route: Routes;
}

function ArticleLinks({ route }: ArticleLinksProps) {
  const residentArticles = searchResults.filter((result) => result.route === route);

  return (
    <Container maxWidth="md">
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 py-8">
        {residentArticles.map((article) => (
          <ArticleLink
            key={article.title}
            icon={article.icon}
            title={article.title}
          />
        ))}
      </div>
    </Container>
  )
}

export default ArticleLinks;