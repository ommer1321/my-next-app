// import { fetchReferanslar, fetchUrunKategoriler, fetchUrunler } from '../../services/api'; // yoluna göre düzelt

// export default async function UrunlerPage() {
//   const { data: urunler, meta } = await fetchUrunler();
//   const { data: kategoriler } = await fetchUrunKategoriler();
//    const { data: referanslar } = await fetchReferanslar();
//   console.log('Ürünler:', urunler);
//   console.log('Kategoriler:', kategoriler);
//   console.log('Referanslar:', referanslar);
  
//   return (

//     <>
    


//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Ürünler ({meta.pagination.total} adet)</h1>
//       <ul className="space-y-4">
//         {urunler.map((urun) => (
//           <li key={urun.id} className="border rounded p-4 shadow">
//             <h2 className="text-lg font-semibold">{urun.urunName}</h2>
//             <p className="text-sm text-gray-600 whitespace-pre-line">{urun.urunDesc}</p>
//             <p className="text-xs text-gray-400 mt-2">
//               Yayın Tarihi: {new Date(urun.publishedAt).toLocaleDateString('tr-TR')}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>


// <hr />


// {/* <div className="p-8 space-y-6">
//       <h1 className="text-2xl font-bold">Ürün Kategorileri</h1>

//       {kategoriler.map((kategori) => {
//         const imgUrl =
//           kategori.attributes.urunKategoriImage?.data?.attributes.url;

//         return (
//           <div key={kategori.id} className="border p-4 rounded shadow">
//             <h2 className="text-xl font-semibold">
//               {kategori.attributes.urunKategoriName}
//             </h2>

//             {imgUrl && (
//               <Image
//                 src={`http://localhost:1337${imgUrl}`}
//                 alt={kategori.attributes.urunKategoriName}
//                 width={400}
//                 height={250}
//                 className="my-4 rounded"
//               />
//             )}

//             <h3 className="text-lg mt-4 font-medium">Ürünler:</h3>
//             <ul className="list-disc ml-6">
//               {kategori.attributes.urunlers.data.map((urun) => (
//                 <li key={urun.id}>{urun.attributes.urunName}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </div> */}


//         </>
//   );
// }
