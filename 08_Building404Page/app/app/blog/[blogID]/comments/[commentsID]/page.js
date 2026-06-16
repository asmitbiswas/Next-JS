export default async function comments({params}){
    const paramsObj = await params;
    const {blogID, commentID} = paramsObj;
    console.log(paramsObj)
    return(
        <div>All comments no <i>{commentID}</i> <b>{blogID}</b> page</div>
    )
}