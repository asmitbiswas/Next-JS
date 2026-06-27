import { notFound } from "next/navigation";

export async function GenerateMetaData({params}) {
    const {blogID} = await params;
    return{
        title: `Blog ${blogID}`,
    }
}
export default async function Blog({params}){
    const {blogID} = await params;
       if (blogID === 'test') {
        notFound();
    }
    return(
        <div>Blog {blogID}</div>
    )
}