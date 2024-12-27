import { ReactNode } from "react";

interface ArticleLinkProps {
  icon: ReactNode;
  title: string;
}

function ArticleLink({ icon, title }: ArticleLinkProps) {
  const removeTerms = (title: string) => {
    const arrThrough5 = Array.from(Array(5).keys()).slice(1);

    let x = title.replaceAll('[term]', 'resident');

    arrThrough5.forEach((num) => {
      x = x.replaceAll(`[term${num}]`, 'residents');
    });

    return x;
  }

  return (
    <div className="bg-primary text-background p-4 rounded flex justify-start items-start border border-gray-600 cursor-pointer">
      {icon}
      <div className="ml-2">
        <h2 className="text-lg text-text font-bold capitalize">{removeTerms(title)}</h2>
      </div>
    </div>
  );
}

export default ArticleLink;