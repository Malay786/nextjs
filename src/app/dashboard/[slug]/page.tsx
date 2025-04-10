type Params = Promise<{slug: string}>;

export default async function DashboardRoute({params} : {params: Params}) {

    const {slug} = await params
    return <h1>hello from the slug route : {slug}</h1>
}