import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import BgImg from '../../components/BgImg';
import LittleNav from '../../components/LittleNav';
import Navbar from '../../components/Navbar';

const profile = {
  name: 'FengXiao', id: '@scooomaker',
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

export default function Blog({ posts }) {
  return (
    <>
      <Navbar name="blog" />
      <BgImg />
      <LittleNav />

      {/* > xl  */}
      <div className="flex flex-row subpixel-antialiased max-w-[2300px]  mx-auto xl:hidden">
        {/* left lan  */}
        <div className="basis-3/12 spc:basis-4/12 m-8 pl-36 pt-16 pr-10 font-sans">
          <div className='spc:pl-20'>
            <div className='text-5xl pb-1 font-medium'>{profile.name}</div>
            <p className='font-serif text-xl'>{profile.id}</p>

            <br />
            <p></p>

            <br />
            <p>{profile.mail}</p>

          </div>
        </div>

        {/* center lan  */}
        <div className="basis-6/12 spc:basis-5/12 mt-3 h-full  ">
          <div className='flex flex-col'>

            {posts.map(({ slug, frontmatter }) => (

              <>
                <div key={slug} className="h-[270px] rounded-[15px] mt-16 bg-stone-50 drop-shadow-xl">
                  <Link href={`/blog/${slug}`}>
                      <div className='pt-5 pl-5 pr-2 pb-5 cursor-pointer'>
                        <h1 className='text-3xl truncate'>{frontmatter.title}</h1>
                        <div className='font-serif truncate'>{frontmatter.date}</div>
                        <hr />
                        <div className='h-[155px] font-light px-3 pt-2 indent-8 discript-text'>
                          {frontmatter.descript}
                        </div>

                      </div>
                  </Link>

                </div>
              </>
            ))}

          </div>
        </div>



        {/* right lan  */}
        <div className="basis-3/12 mt-3 bg-stone-50 drop-shadow-xl rounded-lg mx-8 pb-8 h-min">

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
      <div className="xlmin:hidden space-y-7">

        {
          posts.map(({ slug, frontmatter }) => (

            <div key={slug} className="h-52 pt-5 pl-5 pr-2 pb-5  mt-3 bg-stone-50 drop-shadow-xl rounded-lg mx-2 ">
              <Link href={`/blog/${slug}`}>
                <div className='h-52 pl-2 pr-2 pb-5 cursor-pointer'>
                  <h1 className='text-3xl truncate'>{frontmatter.title}</h1>
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

      </div>
      {/* < xl  */}




    </>

  );
}
