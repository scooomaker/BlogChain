import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';
import { AiOutlineArrowLeft, AiFillCaretLeft } from "react-icons/ai";
import { IconContext } from "react-icons";

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div className='mx-32 my-24 mobile:mx-8 mobile:my-5'>

      <div className='sticky top-0  backdrop-blur-sm py-8 flex'>
        
          <IconContext.Provider value={{ size: '3em', className: 'mt-[5px] cursor-pointer' }}>
            <Link href="/blog/">
            <AiOutlineArrowLeft />
          </Link>
          </IconContext.Provider>
        
      </div>




      <div className='flex flex-row'>
        <div>
          <div className='sticky top-[25%] w-[25%] apple text-black font-bold text-[4vw] pr-16 3xlmin:basis-4/12 3xl:hidden'>
            {frontmatter.title}
          </div>
        </div>

        <div className='3xlmin:basis-5/12 mt-16 prose pc:prose-2xl 4k:prose-2xl' dangerouslySetInnerHTML={{ __html: md().render(content) }} />

        <div className='3xlmin:basis-3/12'></div>
      </div>


    </div>


  );
}
