import fs from 'fs';
import matter from 'gray-matter';
// import md from 'markdown-it';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dark,
  dracula,
  prism,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';



import Link from 'next/link';
import { AiOutlineArrowLeft, AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
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

export async function getStaticProps({ params: { slug } }:any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }: any) {
  return (
    <div className='mx-32 my-24 padmax:mx-8 padmax:my-5'>

      <div className='sticky top-0 backdrop-blur-sm py-8 padmax:py-4 flex'>
        <IconContext.Provider value={{ size: '2em', className: 'mt-[5px] cursor-pointer' }}>
          <Link href="/blog/">
            <AiOutlineArrowLeft />
          </Link>
        </IconContext.Provider>
      </div>






      <div className='flex justify-between padmax:justify-center'>

        <div className='basis-[33%] padmax:hidden'>
          <div className='sticky top-[17%] apple text-black dark:text-white font-bold ml-[50px] 3xl:ml-0'>
            <div className=' text-[4vw] w-[60%] h-[520px] '>
              {frontmatter.title}
            </div>

            <div className='text-[1.5vw]'>
              Author: &nbsp; &nbsp; &nbsp; {frontmatter.author}
            </div>

          </div>
        </div>

        {/* <div className='basis-[41.6%] 3xl:basis-[77%] mt-8 prose xlmin:prose-2xl' dangerouslySetInnerHTML={{ __html: md().render(content) }} /> */}

        {/* <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} className='basis-[41.6%] 3xl:basis-[77%] mt-8 prose xlmin:prose-2xl' /> */}

        

        <div className="prose">
          <ReactMarkdown
            className='basis-[41.6%] 3xl:basis-[77%] mt-8 '
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dracula} // try passing different color schemes, drak, dracula etc.
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code>{children}</code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>




        <div className='basis-[20.83%] 3xl:hidden'>
          <div className='top-[20%] text-[2vw] apple font-bold text-center'>
            <div>
              {frontmatter.date}
            </div>
            <div className='h-[65vh]'>
            </div>

            <div className='flex justify-center '>
              <IconContext.Provider value={{ size: '1em' }}>
                <AiFillLeftCircle />
                <span className='w-10'></span>
                <AiFillRightCircle />
              </IconContext.Provider>
            </div>
          </div>
        </div>



      </div>


    </div>


  );
}
