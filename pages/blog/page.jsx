import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import BgImg from '../../components/BgImg';
import LittleNav from '../../components/LittleNav';
import Navbar from '../../components/Navbar';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <Navbar name="blog" />
      <BgImg />
      <LittleNav />

      {/* > xl  */}
      <div className="flex flex-row subpixel-antialiased xl:hidden">
        {/* left lan  */}
        <div className="basis-4/12 pl-36 pt-16 pr-10 font-sans">
          <div>
            <div className='text-5xl pb-1 font-medium'>FengXiao</div>
            <p className='font-serif text-xl'>@scooomaker</p>

            <br />
            <p></p>

            <br />
            <p>scooomaker@foxmail.com</p>

          </div>
        </div>

        {/* center lan  */}
        <div className="basis-5/12 mt-3 bg-stone-50 shadow-xl rounded-lg">
          <div className="divide-y-8">
            {/* A text begin  */}
            <div className=' text-2xl pt-3 pb-1'>
              <span className='px-5 mb-0 pb-0'>Tweets</span>
              <span className='px-8 mb-0 pb-0'>replies</span>
              <span className='pl-3 mb-0 pb-0'>Media</span>
            </div>



            {
              posts.map(({ slug, frontmatter }) => (

                <div key={slug}>
                  <Link href={`/blog/${slug}`}>
                    <div className='h-52 pt-5 pl-5 pr-2 pb-5 cursor-pointer'>
                      <h1 className='text-3xl truncate'>{frontmatter.title}</h1>
                      <div className='font-serif truncate'>{frontmatter.date}</div>
                      <hr />
                      <div className='h-[105px] font-light px-3 pt-2 indent-8 discript-text'>
                        {frontmatter.descript}
                      </div>

                    </div>
                  </Link>
                </div>

              ))}


          </div>
        </div>


        {/* right lan  */}
        <div className="basis-3/12 mt-3 bg-stone-50 shadow-xl rounded-lg mx-8 pb-8 h-min">
          <div className='m-auto p-auto '>
            <div className='text-3xl font-medium ml-5 mt-6 mb-2'>Your Tweet activity</div>
            <div className='font-light text-xl mt-6 mx-6'>
              Your Tweets earned 4,596 impressions over the last 28 days
            </div>
            <div className='font-normal text-xl mt-6 mx-6'>
              View Your top Tweets
            </div>
          </div>

          <div>

          </div>
        </div>

      </div>
      {/* > xl  */}




      {/* < xl  */}
      <div className="xlmin:hidden space-y-4">

        {
          posts.map(({ slug, frontmatter }) => (

            <div key={slug} className="h-52 pt-5 pl-5 pr-2 pb-5  mt-3 bg-stone-50 shadow-xl rounded-lg mx-2 ">
              <Link href={`/blog/${slug}`}>
                <div className='h-52 pt-5 pl-5 pr-2 pb-5 cursor-pointer'>
                  <h1 className='text-3xl truncate'>{frontmatter.title}</h1>
                  <div className='font-serif truncate'>{frontmatter.date}</div>
                  <hr />
                  <div className='h-[105px] font-light px-3 pt-2 indent-8 discript-text'>
                    {frontmatter.descript}
                  </div>

                </div>
              </Link>
            </div>

          ))
        }

      </div>
      {/* < xl  */}




    </>

  );
}
