const { default: Link } = require("next/link");

export default async function servicess({params}){
    console.log(await params)
    return(
        <div>
            <h1>
                <p>
                    <Link href = "/blogs/web-dev">Web development</Link>
                </p>
                <p>
                    <Link href="/blogs/seo">SEO</Link>
                </p>

                <Link href="/blogs/about">about</Link>
            </h1>
        </div>
    )
}