import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import BgImg from '../../components/BgImg';
import LittleNav from '../../components/LittleNav';
import Navbar from '../../components/Navbar';

const profile = {
  name: 'Feng Xiao', id: '@scooomaker',
  mail: 'scooomaker@foxmail.com'
};


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

export default function Blog({ posts }: any) {
  return (
    <div className='bg-[#f5f8fa]'>
      <Navbar name='blog' />
      <BgImg />
      <LittleNav />


      {/* > xl  */}
      <section className="h-screen flex mx-auto z-0 py-3 px-7 bg-[#f5f8fa]">


        {/* left lan  */}
        <aside className="w-[24%] h-screen mt-14">
          <div className='m-auto p-auto'>
            <div className='text-5xl font-bold apple'>{profile.name}</div>
            <p className='font-serif font-light text-[18px]'>{profile.id}</p>
            <br />
            <br />
            <p className='apple break-words'>{profile.mail}</p>

          </div>
        </aside>


        {/* center lan  */}
        <div className="apple w-[45%] mt-14">
          <div className='rounded-[6px] border-[1px] border-[#e1e8ed] bg-[#FFFFFF]'>



            {posts.map(({ slug, frontmatter }: any) => (

              <>
                <div key={slug} className="px-7 py-6 ">
                  <Link href={`/blog/${slug}`}>
                    <div className=' cursor-pointer'>
                      <div className='font-serif truncate text-[#657786]'>
                        <span className='text-[14px]'>@scooo&nbsp;</span>
                        <span className='text-[13px]'>{frontmatter.date}</span>
                      </div>
                      <h2 className='text-2xl truncate'>{frontmatter.title}</h2>
                      <hr />
                      <div className='text-sm  font-light px-2 pt-2  discript-text'>
                        {frontmatter.descript}
                      </div>

                    </div>
                  </Link>

                </div>
                <hr />
              </>
            ))}
          </div>


          
        </div>


        <aside className='apple w-[31%] mt-14 ml-3 px-3 text-[#5b5f6d]'>
          <div className='m-auto p-auto '>
            <div className='text-3xl font-medium '>Your Tweet activity</div>
            <div className='font-light text-xl mt-6'>
              Your Tweets earned 4,596 impressions over the last 28 days
            </div>
            <div className='font-normal text-xl mt-6'>
              View Your top Tweets
            </div>
          </div>
        </aside>



      </section>
      {/* > xl  */}


















      {/* < xl  */}
      {/* <div className="xlmin:hidden space-y-7 h-screen">

        {
          posts.map(({ slug, frontmatter }: any) => (

            <div key={slug} className="h-52 pt-5 pl-5 pr-2 pb-5  mt-3 bg-stone-50 drop-shadow-xl rounded-lg mx-2">
              <Link href={`/blog/${slug}`}>
                <div className='h-52 pl-2 pr-2 pb-5 cursor-pointer'>
                  <h1 className='text-3xl truncate '>{frontmatter.title}</h1>
                  <div className='font-serif truncate'>{frontmatter.date}</div>
                  <hr />
                  <div className='h-[105px] font-light px-3 pt-2 indent-8 discript-text-mobile'>
                    {frontmatter.descript}
                  </div>

                </div>
              </Link>
            </div>

          ))
        }

      </div> */}
      {/* < xl  */}




    </div>

  );
}
