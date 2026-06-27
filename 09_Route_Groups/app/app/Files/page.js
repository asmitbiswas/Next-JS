import Link from "next/link"

export default function Page() {
    return(
        <div>
            <p>
                <Link href="/Files/file1">File1</Link>
            </p>
            <p>
                <Link href="/Files/file2">File2</Link>
            </p>
            <p>
                <Link href="/Files/file3">File3</Link>
            </p>
        </div>
    )
}