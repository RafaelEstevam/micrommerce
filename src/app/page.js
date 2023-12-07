import { cookies } from "next/headers";

import Banner from "./components/banner.component"

export default function Home() {

  const theme = cookies().get('theme');

  const productsList = [
    {id:1, name:'Cartão de visita', value:23.50, thumbnail: 'https://d2ofpir5gh0cbr.cloudfront.net/files/product/2023/09/Carrossel09.png'},
    {id:2, name:'Cartão 4X0', value:24.50, thumbnail: 'https://d2ofpir5gh0cbr.cloudfront.net/files/product/2023/09/Carrossel09.png'},
    {id:3, name:'Cartão 4X1', value:25.10, thumbnail: 'https://d2ofpir5gh0cbr.cloudfront.net/files/product/2023/09/Carrossel09.png'},
    {id:4, name:'Cartão 4X4', value:26.50, thumbnail: 'https://d2ofpir5gh0cbr.cloudfront.net/files/product/2023/09/Carrossel09.png'},
    {id:5, name:'Cartão com verniz', value:27.50, thumbnail: 'https://d2ofpir5gh0cbr.cloudfront.net/files/product/2023/09/Carrossel09.png'},
    {id:6, name:'Cartão com verniz', value:27.50, thumbnail: 'https://d2ofpir5gh0cbr.cloudfront.net/files/product/2023/09/Carrossel09.png'},
    {id:7, name:'Cartão com verniz', value:27.50, thumbnail: 'https://d2ofpir5gh0cbr.cloudfront.net/files/product/2023/09/Carrossel09.png'}
  ];

  return (
    <>
      <Banner {...{theme}}/>
      {/* <section className="w-full flex justify-center bg-slate-100">
        <div className="max-w-7xl w-full gap-4 flex justify-between">
          <div className="flex flex-col items-center w-full p-8">
            <h2 className="text-slate-600">Categoria</h2>
          </div>
          <div className="flex flex-col items-center w-full p-8">
            <h2 className="text-slate-600">Categoria</h2>
          </div>
          <div className="flex flex-col items-center w-full p-8">
            <h2 className="text-slate-600">Categoria</h2>
          </div>
          <div className="flex flex-col items-center w-full p-8">
            <h2 className="text-slate-600">Categoria</h2>
          </div>
          <div className="flex flex-col items-center w-full p-8">
            <h2 className="text-slate-600">Categoria</h2>
          </div>
          <div className="flex flex-col items-center w-full p-8">
            <h2 className="text-slate-600">Categoria</h2>
          </div>
        </div>
      </section>
      <section className="flex gap-4 justify-center">
        {productsList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section> */}
    </>
  )
}
