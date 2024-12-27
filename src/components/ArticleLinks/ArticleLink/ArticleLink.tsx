import { Routes } from "@/constants/Routes";
import { ReactNode } from "react";

interface ArticleLinkProps {
  icon: ReactNode;
  title: string;
  route: Routes;
}

function ArticleLink({ icon, title, route }: ArticleLinkProps) {
  const removeTerms = (title: string) => {
    const arrThrough5 = Array.from(Array(5).keys()).slice(1);
    const pageName = route.split('/')[1];
    let x = title.replaceAll('[term]', pageName === Routes.Businesses.split('/')[1] ? 'Business' : pageName);

    arrThrough5.forEach((num) => {
      x = x.replaceAll(`[term${num}]`, pageName);
    });

    return x;
  }

  return (
    <div className="group ease-in bg-primary hover:bg-background text-background hover:text-primary p-4 rounded flex justify-start items-start border border-gray-600 hover:border-primary cursor-pointer">
      {icon}
      <div className="ml-2">
        <h2 className="text-lg text-text group-hover:text-primary font-bold capitalize">{removeTerms(title)}</h2>
      </div>
    </div>
  );
}

export default ArticleLink;