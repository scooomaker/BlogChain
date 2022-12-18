import React from 'react'
import Navbar from '../../components/Navbar'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
    const files = fs.readdirSync('ins');

    const InsPost = files.map((fileName) => {
        const ins_slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`ins/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        return {
            ins_slug,
            frontmatter,
        };
    });

    return {
        props: {
            InsPost,
        },
    };
}


function friends({ InsPost }: any) {
    return (
        <>
            <Navbar name='ins' />

            <main className='h-screen'>

                <div className="max-w-[1200px] mx-auto my-16 apple text-[48px] py-[5vh] px-[8vw] font-bold">
                    Inspiration
                    <hr className='mt-5' />


                    {InsPost.map(({ ins_slug, frontmatter }: any) => (

                        <div key={ins_slug} className="h-52 pt-5 pl-5 pr-2 pb-5  mt-3 bg-stone-50 drop-shadow-xl rounded-lg mx-2">
                            <Link href={`/ins/${ins_slug}`}>
                                <div className='h-52 pl-2 pr-2 pb-5 cursor-pointer'>
                                    <h1 className='text-3xl truncate '>{frontmatter.title}</h1>
                                    <div className='font-serif truncate text-sm'>{frontmatter.date}</div>
                                    <hr />
                                    <div className='h-[105px] font-light px-3 pt-2 indent-8 discript-text-mobile text-base'>
                                        {frontmatter.descript}
                                    </div>

                                </div>
                            </Link>
                        </div>

                    ))}

                </div>




            </main>


        </>

    )
}

export default friends