export default function Product ({params, searchParams}) {
    return (
        <section className="p-4">
            <h1 className="font-bold text-slate-500">{params.slug}</h1>
        </section>
    )
}