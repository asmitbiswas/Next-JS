const { default: Link } = require("next/link");

export default function servicess(){
    return(
        <div>
            <h1>
                <p>
                    <Link href = "/servicess/web-dev">Web development</Link>
                </p>
                <p>
                    <Link href="/servicess/seo">SEO</Link>
                </p>

                {/* <Link href="/"></Link> */}
            </h1>
        </div>
    )
}