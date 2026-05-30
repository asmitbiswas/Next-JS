export default async function Blog({params}){
    const {blogID} = await params
    return(
        <div>All comments on {blogID}</div>
    )
}