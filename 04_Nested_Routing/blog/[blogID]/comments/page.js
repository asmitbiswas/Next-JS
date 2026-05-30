export default async function Blog({params}){
    const {blogID} = await params
    return(
        <div>comments {blogID}</div>
    )
}