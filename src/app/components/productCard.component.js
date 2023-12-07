import Image from 'next/image'
import Link from 'next/link'
import Button from './button.component'

export default function ProductCard ({id, name, value, thumbnail}){

    const slug = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replaceAll(' ', '-')

    return (
        <div className='hover:shadow-[#777b8180] hover:shadow-lg p-4 rounded-lg'>
            <Image width={100} height={100} src={thumbnail} />
            <div className='flex flex-col gap-4 py-4'>
                <Link href={`/${slug}`}><h2 className='text-blue-600'><strong>{name}</strong></h2></Link>
                <p className='text-slate-500'>R$ <strong>{value}</strong></p>
            </div>
            <Button
                type='button'
                className='bg-yellow-500 text-slate-900 p-2 hover:bg-yellow-600'
                label="Comprar"
            />
        </div>
    )
}