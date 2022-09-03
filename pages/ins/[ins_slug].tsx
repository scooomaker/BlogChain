import React from 'react'
import fs from 'fs';
import matter from 'gray-matter';



export async function getStaticPaths() {
  const files = fs.readdirSync('ins');
  const paths = files.map((fileName) => ({
    params: {
      ins_slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { ins_slug } }: any) {
  const fileName = fs.readFileSync(`ins/${ins_slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}


function PostIns({ frontmatter, content }: any) {
  return (
      <>
          {frontmatter.title}
          {content}
      </>
  )
}

export default PostIns