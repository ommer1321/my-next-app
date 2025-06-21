// app/iade-sartlari/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İptal ve İade Şartları | Kasspor',
  description:
    'Kasspor ürünleri için iptal, iade ve garanti koşulları hakkında detaylı bilgilere buradan ulaşabilirsiniz.',
};

export default function IadeSartlariPage() {
  return (
    <section>
      {/* Hero Görsel + Başlık */}
      <div className="w-full h-64 md:h-80 bg-[url('/ks-slide1.png')] bg-cover bg-center flex items-center justify-center">
      
      </div>
 
      {/* İçerik Alanı */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
            <div className="bg-cover bg-center flex items-center justify-center">
         <Section title="İPTAL VE İADE ŞARTLARI" >
          <p className="mb-4">
          </p>
         
        </Section>
      </div>
        <Section title="GENEL ŞARTLAR">
          <p className="mb-4">
            www.kasspor.com.tr üzerinden satın aldığınız ürünlerde maksimum performans sağlamanızı hedefleriz. Ancak, ürün kaynaklı bir kusur olması halinde aşağıdaki iade koşulları geçerlidir:
          </p>
          <List items={[
            'Ürün kaynaklı bir hata bulunuyorsa, ürünü 15 gün içinde tüm belgeleriyle iade edebilirsiniz.',
            'İnceleme sonrası kusur onaylanırsa, ürün değiştirilir ya da ücret iade edilir.',
            'Kargo kaynaklı hasarlardan kargo firması sorumludur.'
          ]} />
        </Section>

        <Section title="İADE ŞARTLARI">
          <List items={[
            'Sipariş numarasıyla birlikte e-posta ya da telefon ile bize ulaşmanız gerekir.',
            'Ürün, orijinal ambalajı ve tüm belgeleriyle birlikte aşağıdaki adrese gönderilmelidir.'
          ]} />
          <ContactBox />
        </Section>

        <Section title="NASIL İADE EDİLİR?">
          <List items={[
            'Tüketici Kanunu gereği, 7 gün içinde cayma hakkınız vardır.',
            'Ambalajı açılmamış ve kullanılmamış ürünler faturasıyla iade edilebilir.',
            'Kargo ücreti alıcıya aittir, tutar 30 gün içinde geri ödenir.',
            'Faturasız ya da 7 günü geçen iadeler kabul edilmez.',
            'Kusurlu ürünler için iade süresi 30 gündür ve servis raporu gerekir.',
            '30 günü aşan iade talepleri yetkili servise yönlendirilir.',
            'Onay alınmadan gönderilen ürünler kabul edilmez.'
          ]} />
        </Section>

        <Section title="ARIZA VE İADE İŞLEMLERİ">
          <List items={[
            'İşlemler teknik ekiplerce incelenir, gerektiğinde üreticiye yönlendirilir.',
            'Üretici onayıyla ürün değiştirilir ya da ücret iadesi yapılır.'
          ]} />
        </Section>

        <Section title="SİPARİŞ İPTALİ">
          <p className="mb-4">
            Siparişlerinizi aynı gün içinde telefonla ya da WhatsApp Destek Hattı üzerinden iptal edebilirsiniz. Ürün kargoya verildikten sonra iptal yapılamaz.
          </p>
        </Section>

        <Section title="GARANTİ ŞARTLARI">
          <SubSection title="1. Garanti Süresi" text="Teslim tarihinden itibaren 2 yıl geçerlidir." />
          <SubSection title="2. Kapsam" text="Üretim kaynaklı malzeme, işçilik ve montaj hatalarını kapsar." />
          <SubSection title="3. Hariç Durumlar" text="Kullanım hataları, darbe, sıvı teması, yetkisiz müdahale vb." />
          <SubSection title="4. Değişim" text="Aynı arıza tekrar ederse muadili ile değiştirilir." />
          <SubSection title="5. Süre Koruması" text="Garanti süresi ilk teslim tarihine göre devam eder." />
          <SubSection title="6. Yedek Parça" text="10 yıl teknik servis ve parça desteği verilir." />
          <SubSection title="7. Kurulum" text="Yalnızca yetkili servis tarafından yapılmalıdır." />
          <SubSection title="8. Servis Süresi" text="Onarımlar 15 iş günü içinde tamamlanır." />
          <SubSection title="9. Geçerlilik" text="Garanti belgesi ve fatura ibrazı zorunludur." />
        </Section>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-4">{title}</h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-sm sm:text-base">{item}</li>
      ))}
    </ul>
  );
}

function SubSection({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-3">
      <h3 className="text-red-700 font-semibold">{title}</h3>
      <p className="text-sm sm:text-base">{text}</p>
    </div>
  );
}

function ContactBox() {
  return (
    <div className="bg-gray-100 border-l-4 border-red-600 p-4 my-6 text-sm sm:text-base">
      <p className="font-semibold">KASSPOR Teknik Destek ve Müşteri Hizmetleri</p>
      <p>📞 Telefon: 0 (212) 592 75 42 / +90 531 087 50 63</p>
      <p>📧 E-posta: info@kasspor.com.tr / satis@kasspor.com.tr</p>
      <p>🌐 Web: www.kasspor.com.tr</p>
      <p>📍 Adres: Adil Mahallesi Yakuphan Caddesi Gülbahar Sokak No: 7/19 İSTANBUL / SULTANBEYLİ</p>
    </div>
  );
}
