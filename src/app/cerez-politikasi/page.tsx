import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CerezPolitikasi() {
  return (
    <>
      <Head>
        <title>Çerez Politikası | KAS SPOR</title>
        <meta name="description" content="KAS SPOR çerez politikası" />
      </Head>
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px", lineHeight: "1.8" }}>
        <h1 style={{ color: "#b40024" }}>Çerez Politikası</h1>
        <p><strong>Son Güncelleme:</strong> 2 Temmuz 2025</p>

        <p>
          Bu Çerez Politikası, <strong>KAS SPOR</strong> (“biz”, “bize” veya “bizim”) tarafından
          işletilen <Link href="https://www.kasspor.com.tr" target="_blank">www.kasspor.com.tr</Link> web sitesi
          üzerinden toplanan çerezlerin kullanımına ilişkin bilgi vermek amacıyla hazırlanmıştır.
        </p>

        <h2>1. Çerez Nedir?</h2>
        <p>
          Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza gönderilen ve bilgisayarınızda
          veya mobil cihazınızda saklanan küçük metin dosyalarıdır. Çerezler, web sitelerinin çalışmasını
          sağlamak veya daha verimli çalışmasını temin etmek, ayrıca site sahiplerine bilgi sağlamak için
          yaygın şekilde kullanılmaktadır.
        </p>

        <h2>2. Hangi Tür Çerezleri Kullanıyoruz?</h2>
        <h3>Zorunlu Çerezler</h3>
        <p>
          Bu çerezler, web sitemizin düzgün şekilde çalışabilmesi için gereklidir. Örneğin, güvenlik ve
          oturum yönetimi için kullanılırlar.
        </p>

        <h3>Performans ve Analitik Çerezleri</h3>
        <p>
          Bu çerezler, ziyaretçilerin sitemizi nasıl kullandığını anlamamıza yardımcı olur. Böylece site
          performansını analiz edebilir ve geliştirebiliriz. Örneğin, Google Analytics gibi üçüncü taraf
          araçlar kullanılabilir.
        </p>

        <h3>İşlevsellik Çerezleri</h3>
        <p>
          Bu çerezler, site tercihlerinizi hatırlayarak daha kişisel bir deneyim sunmamıza olanak tanır.
          Örneğin, dil tercihinizin hatırlanması.
        </p>

        <h3>Reklam Çerezleri</h3>
        <p>
          Bu çerezler, ilgi alanlarınıza daha uygun reklamlar göstermek amacıyla kullanılabilir. Ayrıca reklam
          kampanyalarının etkinliğini ölçmeye yardımcı olur.
        </p>

        <h2>3. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
        <p>
          Tarayıcınızın ayarlarından çerezleri yönetebilir veya silebilirsiniz. Çoğu tarayıcı çerezleri otomatik
          olarak kabul eder ancak isterseniz tarayıcınızın ayarlarını değiştirerek çerezleri reddedebilirsiniz.
          Çerezleri devre dışı bırakmanız durumunda, web sitemizin bazı işlevlerinin düzgün çalışmayabileceğini
          unutmayın.
        </p>
        <p>
          Ayrıca sitemize ilk geldiğinizde gösterilen çerez bildirimini kabul ederek çerez kullanımımıza
          onay verebilir veya reddedebilirsiniz.
        </p>

        <h2>4. Çerez Politikasında Değişiklikler</h2>
        <p>
          Çerez Politikamız zaman zaman güncellenebilir. Önemli değişiklikler olması halinde bu sayfada
          güncellenmiş politikayı yayınlayacağız ve son güncelleme tarihini değiştireceğiz.
        </p>

        <h2>5. İletişim</h2>
        <p>
          Çerez Politikamız hakkında sorularınız varsa bizimle şu adresten iletişime geçebilirsiniz:<br/>
          📧 <a href="mailto:info@kasspor.com.tr">info@kasspor.com.tr</a>
        </p>
      </div>
    </>
  );
}
