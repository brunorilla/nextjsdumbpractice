import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {Layout} from '../../components/Layout';

interface Post {
    title: string;
}

const Post: React.FC<Post> = ({title}) => {

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <header><Image src="/images/profile.jpeg" alt="Profile" height={144} width={144}></Image></header>
                <h1>First Post</h1>
            </div>
        </Layout>);
}


export default Post;

