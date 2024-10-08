import React, { useEffect, useState } from 'react';

const url = "https://v2.api.noroff.dev/online-shop";

export function Home(){
    const [posts, setPosts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState(false);

    useEffect(()  => {
        async function getData() {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setPosts(json.data);
                console.log(json);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getData();
    }, []);

    if (isLoading) {
        return <div>Loading items...</div>;
    }

    if (isError) {
        return <div>Error loading items.. try refreshing the page.</div>;
    }

    return (
        <div className='flex flex-wrap gap-10 py-5 justify-center'>
            {posts.map((post) => (
                <div key={post.id} className='w-52 cursor-pointer verflow-hidden transition-transform duration-200 hover:scale-105'>
                    <div>
                        <img className='w-52 h-52' src={post.image.url}></img>
                    </div>
                    <div>
                        <h3>Rated {post.rating}/5</h3>
                    </div>
                    <div>
                        <h2 className='text-lg py-1'>{post.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;