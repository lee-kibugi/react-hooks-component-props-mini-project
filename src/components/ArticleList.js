import React from 'react';
import blogData from '../data/blog';
import Article from './Article'; // Assuming you have an Article component

function ArticleList({ posts}) {
  console.log (posts)
  return (
    <div>
    <main>
      {posts.map((l) => (
        <Article 
        key={l.id}
        title={l.title}
         data={l.date}
         preview={l.preview}
          />
      ))}
    </main>
    </div>
  );
};

export default ArticleList;
