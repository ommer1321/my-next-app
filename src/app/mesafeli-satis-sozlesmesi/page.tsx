// app/mesafeli-satis-sozlesmesi/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mesafeli Satış Sözleşmesi',
  description: 'Mesafeli satış sözleşmesi metni.',
};

export default function MesafeliSatisSozlesmesiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mesafeli Satış Sözleşmesi</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. TARAFLAR</h2>
      <p>İşbu Sözleşme aşağıdaki taraflar arasında aşağıda belirtilen hüküm ve şartlar çerçevesinde imzalanmıştır.</p>
      <p><strong>ALICI:</strong> <br/> AD-SOYAD: <br/> ADRES:</p>
      <p><strong>SATICI:</strong> <br/> AD-SOYAD: <br/> ADRES:</p>
      <p>İş bu sözleşmeyi kabul etmekle ALICI, sözleşme konusu siparişi onayladığı takdirde sipariş konusu bedeli ve varsa kargo ücreti, vergi gibi belirtilen ek ücretleri ödeme yükümlülüğü altına gireceğini ve bu konuda bilgilendirildiğini peşinen kabul eder.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. TANIMLAR</h2>
      <p>İşbu sözleşmenin uygulanmasında ve yorumlanmasında aşağıda yazılı terimler karşılarındaki yazılı açıklamaları ifade edeceklerdir.</p>
      <ul className="list-disc ml-6">
        <li>BAKAN: Gümrük ve Ticaret Bakanı’nı,</li>
        <li>BAKANLIK: Gümrük ve Ticaret Bakanlığı’nı,</li>
        <li>KANUN: 6502 sayılı Tüketicinin Korunması Hakkında Kanun’u,</li>
        <li>YÖNETMELİK: Mesafeli Sözleşmeler Yönetmeliği’ni,</li>
        <li>HİZMET: Bir ücret veya menfaat karşılığında yapılan veya yapılması taahhüt edilen mal sağlama dışındaki her türlü tüketici işlemini,</li>
        <li>SATICI: Ticari veya mesleki faaliyetleri kapsamında tüketiciye mal sunan veya mal sunan adına veya hesabına hareket eden şirketi,</li>
        <li>ALICI: Bir mal veya hizmeti ticari veya mesleki olmayan amaçlarla edinen, kullanan veya yararlanan gerçek ya da tüzel kişiyi,</li>
        <li>SİTE: SATICI’ya ait internet sitesini,</li>
        <li>SİPARİŞ VEREN: Bir mal veya hizmeti SATICI’ya ait internet sitesi üzerinden talep eden gerçek ya da tüzel kişiyi,</li>
        <li>TARAFLAR: SATICI ve ALICI’yı,</li>
        <li>SÖZLEŞME: SATICI ve ALICI arasında akdedilen işbu sözleşmeyi,</li>
        <li>MAL: Alışverişe konu olan taşınır eşyayı ve elektronik ortamda hazırlanan yazılım, ses, görüntü ve benzeri gayri maddi malları,</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. KONU</h2>
      <p>İşbu Sözleşme, ALICI’nın, SATICI’ya ait internet sitesi üzerinden elektronik ortamda siparişini verdiği aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Kanun ve Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerini düzenler.</p>
      <p>Listelenen ve sitede ilan edilen fiyatlar satış fiyatıdır. Güncellenene kadar geçerlidir.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. SATICI BİLGİLERİ</h2>
      <p>Ünvanı: <br/> Adres: <br/> Telefon: <br/> Faks: <br/> Eposta:</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. ALICI BİLGİLERİ</h2>
      <p>Teslim edilecek kişi: <br/> Teslimat Adresi: <br/> Telefon: <br/> Eposta/kullanıcı adı:</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. SİPARİŞ VEREN KİŞİ BİLGİLERİ</h2>
      <p>Ad/Soyad/Unvan: <br/> Adres: <br/> Telefon: <br/> Eposta/kullanıcı adı:</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. SÖZLEŞME KONUSU ÜRÜN/ÜRÜNLER BİLGİLERİ</h2>
      <p>Ürün özellikleri SATICI’nın internet sitesinde yayınlanmaktadır.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. FATURA BİLGİLERİ</h2>
      <p>Ad/Soyad/Unvan: <br/> Adres: <br/> Telefon: <br/> Eposta: <br/> Fatura sipariş ile teslim edilecektir.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. GENEL HÜKÜMLER</h2>
      <p>ALICI, site üzerinden ürünün temel nitelikleri, fiyatı ve teslimata ilişkin ön bilgileri okuyup elektronik ortamda onayladığını kabul eder.</p>
      <p>Ürün, 30 günü aşmayan sürede teslim edilir.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. CAYMA HAKKI</h2>
      <p>ALICI, ürünü teslim aldıktan sonra 14 gün içinde cayma hakkını kullanabilir.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">11. CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER</h2>
      <p>Kişiye özel hazırlanan ürünler, iç giyim alt parçaları, makyaj malzemeleri gibi ürünlerde cayma hakkı kullanılamaz.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">12. TEMERRÜT HALİ VE HUKUKİ SONUÇLARI</h2>
      <p>ALICI, kredi kartı temerrüdünde bankaya karşı sorumlu olacağını kabul eder.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">13. YETKİLİ MAHKEME</h2>
      <p>Tüketici şikayet ve itirazları tüketici hakem heyeti veya mahkemesine yapılacaktır.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">14. YÜRÜRLÜK</h2>
      <p>ALICI, sipariş verdiğinde işbu sözleşmenin tüm şartlarını kabul etmiş sayılır.</p>
    </div>
  );
}
