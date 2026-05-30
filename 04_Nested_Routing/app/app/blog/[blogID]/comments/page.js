export default async function Blog({params}){
    const paramsObj = await params;
    const {blogID} = paramsObj;
    console.log(paramsObj)
    return(
        <div>All comments on <b>{blogID}</b> page</div>
    )
}