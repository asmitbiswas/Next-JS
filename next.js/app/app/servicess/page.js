const { default: Link } = require("next/link");

export default function servicess(){
    return(
        <div>
            <h1>
                <p>
                    <Link href = "/servicess/web-dev">Web development</Link>
                </p>
                <p>
                    <Link href="/">App development</Link>
                </p>
                <p>
                    <Link href="/">Web/App design</Link>
                </p>
                <p>
                    <Link href="/">SEO</Link>
                </p>

                {/* <Link href="/"></Link> */}

            </h1>
        </div>
    )
}