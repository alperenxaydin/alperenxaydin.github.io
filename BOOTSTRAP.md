# Bootstrap 5 Kapsamlı Öğrenme Rehberi

## İçindekiler
1. [Bootstrap Nedir ve Neden Kullanılır?](#1-bootstrap-nedir)
2. [Kurulum ve Başlangıç](#2-kurulum)
3. [Grid Sistemi](#3-grid-sistemi)
4. [Tipografi ve Metin](#4-tipografi)
5. [Renkler ve Yardımcı Sınıflar](#5-renkler)
6. [Butonlar](#6-butonlar)
7. [Formlar](#7-formlar)
8. [Componentler](#8-componentler)
9. [Navigation (Navigasyon)](#9-navigation)
10. [Utilities (Yardımcı Sınıflar)](#10-utilities)
11. [Responsive Tasarım](#11-responsive)
12. [Proje Örnekleri](#12-projeler)

---

## 1. Bootstrap Nedir ve Neden Kullanılır? {#1-bootstrap-nedir}

Bootstrap, Twitter tarafından geliştirilen ve şu anda dünyanın en popüler CSS framework'üdür. Hızlı bir şekilde responsive ve modern web siteleri oluşturmanıza olanak tanır.

**Avantajları:**
- Hazır componentler (navbar, card, modal vb.)
- Güçlü grid sistemi
- Responsive tasarım için hazır breakpoint'ler
- Cross-browser uyumluluğu
- Büyük topluluk desteği
- Hızlı prototipleme

---

## 2. Kurulum ve Başlangıç {#2-kurulum}

### CDN ile Kurulum (En Kolay)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Projesi</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    
    <h1>Merhaba Bootstrap!</h1>
    
    <!-- Bootstrap JS Bundle (Popper dahil) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Önemli:** `viewport` meta etiketi mutlaka olmalı, aksi halde responsive çalışmaz!

---

## 3. Grid Sistemi {#3-grid-sistemi}

Bootstrap'in en güçlü özelliği 12 sütunlu grid sistemidir. Flexbox tabanlıdır.

### Temel Yapı

```html
<div class="container">
    <div class="row">
        <div class="col">Sütun 1</div>
        <div class="col">Sütun 2</div>
        <div class="col">Sütun 3</div>
    </div>
</div>
```

### Container Çeşitleri

- `container`: Sabit genişlik (responsive breakpoint'lere göre)
- `container-fluid`: %100 genişlik
- `container-sm`, `container-md`, `container-lg`, `container-xl`: Belirli breakpoint'te sabit

### Breakpoint'ler

| Prefix | Ekran Boyutu | Genişlik |
|--------|--------------|----------|
| (yok)  | Extra Small  | <576px   |
| `sm`   | Small        | ≥576px   |
| `md`   | Medium       | ≥768px   |
| `lg`   | Large        | ≥992px   |
| `xl`   | Extra Large  | ≥1200px  |
| `xxl`  | XX Large     | ≥1400px  |

### Sütun Örnekleri

```html
<!-- Eşit genişlikli 3 sütun -->
<div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
</div>

<!-- Belirli genişlikler (12'lik sistem) -->
<div class="row">
    <div class="col-8">Geniş alan (8/12)</div>
    <div class="col-4">Dar alan (4/12)</div>
</div>

<!-- Responsive sütunlar -->
<div class="row">
    <div class="col-12 col-md-6 col-lg-4">
        Mobilde tam genişlik, tablette yarı, masaüstünde 1/3
    </div>
    <div class="col-12 col-md-6 col-lg-4">Sütun 2</div>
    <div class="col-12 col-md-6 col-lg-4">Sütun 3</div>
</div>

<!-- Offset (boşluk bırakma) -->
<div class="row">
    <div class="col-4 offset-4">Ortada duran sütun</div>
</div>
```

### Row Özellikleri

```html
<!-- Sütunlar arası boşluk (gutter) kontrolü -->
<div class="row g-0">No gutter</div>
<div class="row g-3">Orta gutter</div>
<div class="row g-5">Büyük gutter</div>

<!-- Dikey hizalama -->
<div class="row align-items-start">Üstte hizalı</div>
<div class="row align-items-center">Ortada hizalı</div>
<div class="row align-items-end">Altta hizalı</div>

<!-- Yatay hizalama -->
<div class="row justify-content-start">Sola hizalı</div>
<div class="row justify-content-center">Ortaya hizalı</div>
<div class="row justify-content-end">Sağa hizalı</div>
<div class="row justify-content-between">Aralarında boşluk</div>
```

---

## 4. Tipografi ve Metin {#4-tipografi}

### Başlıklar

```html
<h1>h1. Bootstrap başlık</h1>
<h2>h2. Bootstrap başlık</h2>
<!-- ... h6'ya kadar -->

<!-- Sınıf olarak da kullanılabilir -->
<p class="h1">h1 gibi görünen paragraf</p>

<!-- Display başlıklar (daha büyük) -->
<h1 class="display-1">Display 1</h1>
<h1 class="display-6">Display 6</h1>

<!-- Lead text (öne çıkan metin) -->
<p class="lead">Bu önemli bir paragraf.</p>
```

### Metin Stilleri

```html
<!-- Metin hizalama -->
<p class="text-start">Sola hizalı</p>
<p class="text-center">Ortaya hizalı</p>
<p class="text-end">Sağa hizalı</p>

<!-- Metin dönüşümü -->
<p class="text-lowercase">küçük harf</p>
<p class="text-uppercase">BÜYÜK HARF</p>
<p class="text-capitalize">Her Kelime Büyük</p>

<!-- Font ağırlığı -->
<p class="fw-bold">Kalın</p>
<p class="fw-normal">Normal</p>
<p class="fw-light">İnce</p>

<!-- Font stili -->
<p class="fst-italic">İtalik</p>
<p class="fst-normal">Normal</p>

<!-- Metin dekorasyonu -->
<p class="text-decoration-underline">Altı çizili</p>
<p class="text-decoration-line-through">Üstü çizili</p>
<p class="text-decoration-none">Dekorasyon yok</p>
```

### Listeler

```html
<!-- Liste işaretlerini kaldırma -->
<ul class="list-unstyled">
    <li>Madde 1</li>
    <li>Madde 2</li>
</ul>

<!-- Inline liste -->
<ul class="list-inline">
    <li class="list-inline-item">Madde 1</li>
    <li class="list-inline-item">Madde 2</li>
</ul>
```

---

## 5. Renkler ve Yardımcı Sınıflar {#5-renkler}

### Renk Paleti

Bootstrap'te 8 temel tema rengi var:

```html
<!-- Metin renkleri -->
<p class="text-primary">Primary mavi</p>
<p class="text-secondary">Secondary gri</p>
<p class="text-success">Success yeşil</p>
<p class="text-danger">Danger kırmızı</p>
<p class="text-warning">Warning sarı</p>
<p class="text-info">Info açık mavi</p>
<p class="text-light">Light açık gri</p>
<p class="text-dark">Dark koyu gri</p>

<!-- Arkaplan renkleri -->
<div class="bg-primary text-white">Primary arkaplan</div>
<div class="bg-success text-white">Success arkaplan</div>
<!-- Diğer renkler için aynı mantık -->
```

### Gradient (Degrade)

```html
<div class="bg-primary bg-gradient">Gradient arkaplan</div>
```

---

## 6. Butonlar {#6-butonlar}

### Temel Butonlar

```html
<!-- Standart butonlar -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>

<!-- Outline butonlar -->
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-success">Outline Success</button>
```

### Buton Boyutları

```html
<button class="btn btn-primary btn-lg">Büyük buton</button>
<button class="btn btn-primary">Normal buton</button>
<button class="btn btn-primary btn-sm">Küçük buton</button>
```

### Buton Durumları

```html
<!-- Aktif durum -->
<button class="btn btn-primary active">Aktif</button>

<!-- Devre dışı -->
<button class="btn btn-primary" disabled>Devre Dışı</button>

<!-- Block buton (tam genişlik) -->
<button class="btn btn-primary w-100">Block Buton</button>
```

### Buton Grupları

```html
<div class="btn-group">
    <button class="btn btn-primary">Sol</button>
    <button class="btn btn-primary">Orta</button>
    <button class="btn btn-primary">Sağ</button>
</div>

<!-- Dikey grup -->
<div class="btn-group-vertical">
    <button class="btn btn-primary">Üst</button>
    <button class="btn btn-primary">Orta</button>
    <button class="btn btn-primary">Alt</button>
</div>
```

---

## 7. Formlar {#7-formlar}

### Temel Form

```html
<form>
    <!-- Text input -->
    <div class="mb-3">
        <label for="email" class="form-label">E-posta</label>
        <input type="email" class="form-control" id="email" placeholder="ornek@email.com">
    </div>
    
    <!-- Password -->
    <div class="mb-3">
        <label for="password" class="form-label">Şifre</label>
        <input type="password" class="form-control" id="password">
    </div>
    
    <!-- Textarea -->
    <div class="mb-3">
        <label for="message" class="form-label">Mesaj</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
    </div>
    
    <!-- Select -->
    <div class="mb-3">
        <label for="country" class="form-label">Ülke</label>
        <select class="form-select" id="country">
            <option selected>Seçiniz...</option>
            <option value="1">Türkiye</option>
            <option value="2">Almanya</option>
            <option value="3">İngiltere</option>
        </select>
    </div>
    
    <!-- Checkbox -->
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="check1">
        <label class="form-check-label" for="check1">
            Şartları kabul ediyorum
        </label>
    </div>
    
    <!-- Radio buttons -->
    <div class="mb-3">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" id="male" value="male">
            <label class="form-check-label" for="male">Erkek</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" id="female" value="female">
            <label class="form-check-label" for="female">Kadın</label>
        </div>
    </div>
    
    <!-- Switch -->
    <div class="form-check form-switch mb-3">
        <input class="form-check-input" type="checkbox" id="switch1">
        <label class="form-check-label" for="switch1">Bildirimleri aç</label>
    </div>
    
    <button type="submit" class="btn btn-primary">Gönder</button>
</form>
```

### Form Boyutları

```html
<input class="form-control form-control-lg" type="text" placeholder="Büyük input">
<input class="form-control" type="text" placeholder="Normal input">
<input class="form-control form-control-sm" type="text" placeholder="Küçük input">
```

### Form Validation (Doğrulama)

```html
<form class="was-validated">
    <div class="mb-3">
        <label for="validInput" class="form-label">Geçerli input</label>
        <input type="text" class="form-control is-valid" id="validInput" required>
        <div class="valid-feedback">Harika görünüyor!</div>
    </div>
    
    <div class="mb-3">
        <label for="invalidInput" class="form-label">Geçersiz input</label>
        <input type="text" class="form-control is-invalid" id="invalidInput" required>
        <div class="invalid-feedback">Lütfen geçerli bir değer girin.</div>
    </div>
</form>
```

### Input Group (Eklentili Input)

```html
<!-- Önde eklenti -->
<div class="input-group mb-3">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Kullanıcı adı">
</div>

<!-- Sonda eklenti -->
<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Alıcının kullanıcı adı">
    <span class="input-group-text">@example.com</span>
</div>

<!-- Butonlu -->
<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Ara...">
    <button class="btn btn-primary" type="button">Ara</button>
</div>
```

### Floating Labels

```html
<div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">E-posta adresi</label>
</div>
```

---

## 8. Componentler {#8-componentler}

### Cards (Kartlar)

```html
<!-- Basit card -->
<div class="card" style="width: 18rem;">
    <img src="resim.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Kart Başlığı</h5>
        <p class="card-text">Kart içeriği buraya gelir.</p>
        <a href="#" class="btn btn-primary">Detay</a>
    </div>
</div>

<!-- Header ve footer'lı card -->
<div class="card">
    <div class="card-header">
        Öne Çıkan
    </div>
    <div class="card-body">
        <h5 class="card-title">Başlık</h5>
        <p class="card-text">İçerik</p>
        <a href="#" class="btn btn-primary">Git</a>
    </div>
    <div class="card-footer text-muted">
        2 gün önce
    </div>
</div>

<!-- Renkli card -->
<div class="card text-white bg-primary mb-3">
    <div class="card-body">
        <h5 class="card-title">Primary card</h5>
        <p class="card-text">Mavi arkaplan</p>
    </div>
</div>
```

### Alerts (Uyarılar)

```html
<div class="alert alert-primary" role="alert">
    Primary uyarı mesajı
</div>

<div class="alert alert-success" role="alert">
    Başarılı işlem!
</div>

<div class="alert alert-danger" role="alert">
    Hata oluştu!
</div>

<!-- Kapatılabilir alert -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    Dikkat! Bu önemli bir uyarı.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>

<!-- İkonlu alert -->
<div class="alert alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24">...</svg>
    <div>İşlem başarıyla tamamlandı!</div>
</div>
```

### Badges (Rozetler)

```html
<h1>Başlık <span class="badge bg-secondary">Yeni</span></h1>

<button type="button" class="btn btn-primary">
    Bildirimler <span class="badge bg-danger">4</span>
</button>

<!-- Pill badge (yuvarlak) -->
<span class="badge rounded-pill bg-primary">Pill</span>
```

### Breadcrumb

```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Ana Sayfa</a></li>
        <li class="breadcrumb-item"><a href="#">Ürünler</a></li>
        <li class="breadcrumb-item active" aria-current="page">Bilgisayar</li>
    </ol>
</nav>
```

### Pagination (Sayfalama)

```html
<nav>
    <ul class="pagination">
        <li class="page-item disabled">
            <a class="page-link" href="#">Önceki</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#">Sonraki</a>
        </li>
    </ul>
</nav>

<!-- Büyük pagination -->
<ul class="pagination pagination-lg">...</ul>

<!-- Küçük pagination -->
<ul class="pagination pagination-sm">...</ul>
```

### Progress Bars (İlerleme Çubukları)

```html
<!-- Basit -->
<div class="progress">
    <div class="progress-bar" style="width: 50%"></div>
</div>

<!-- Etiketli -->
<div class="progress">
    <div class="progress-bar" style="width: 75%">75%</div>
</div>

<!-- Renkli -->
<div class="progress">
    <div class="progress-bar bg-success" style="width: 40%"></div>
</div>

<!-- Çizgili -->
<div class="progress">
    <div class="progress-bar progress-bar-striped" style="width: 60%"></div>
</div>

<!-- Animasyonlu -->
<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 70%"></div>
</div>
```

### Spinners (Yükleyiciler)

```html
<!-- Border spinner -->
<div class="spinner-border" role="status">
    <span class="visually-hidden">Yükleniyor...</span>
</div>

<!-- Renkli spinner -->
<div class="spinner-border text-primary" role="status"></div>

<!-- Growing spinner -->
<div class="spinner-grow text-success" role="status"></div>

<!-- Küçük spinner -->
<div class="spinner-border spinner-border-sm" role="status"></div>

<!-- Buton içinde -->
<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status"></span>
    Yükleniyor...
</button>
```

### Tooltips (İpuçları)

```html
<!-- Tooltip kullanmak için JavaScript gerekir -->
<button type="button" class="btn btn-secondary" 
        data-bs-toggle="tooltip" 
        data-bs-placement="top" 
        title="Bu bir tooltip!">
    Üzerime gel
</button>

<!-- JavaScript'te başlatma: -->
<script>
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
</script>
```

### Popovers

```html
<button type="button" class="btn btn-lg btn-danger" 
        data-bs-toggle="popover" 
        title="Popover başlık" 
        data-bs-content="Popover içeriği buraya gelir.">
    Tıkla
</button>

<!-- JavaScript'te başlatma: -->
<script>
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
</script>
```

### Modal (Popup)

```html
<!-- Modal tetikleyici buton -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Modal Aç
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal Başlık</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>Modal içeriği buraya gelir.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                <button type="button" class="btn btn-primary">Kaydet</button>
            </div>
        </div>
    </div>
</div>

<!-- Tam ekran modal -->
<div class="modal-dialog modal-fullscreen">...</div>

<!-- Büyük modal -->
<div class="modal-dialog modal-lg">...</div>

<!-- Küçük modal -->
<div class="modal-dialog modal-sm">...</div>

<!-- Ortalanmış modal -->
<div class="modal-dialog modal-dialog-centered">...</div>
```

### Accordion (Akordiyon)

```html
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Bölüm #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Bölüm 1 içeriği
            </div>
        </div>
    </div>
    
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Bölüm #2
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Bölüm 2 içeriği
            </div>
        </div>
    </div>
</div>
```

### Carousel (Slider)

```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
    </div>
    
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="slide1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>İlk Slayt</h5>
                <p>Açıklama metni</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="slide2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="slide3.jpg" class="d-block w-100" alt="...">
        </div>
    </div>
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
```

---

## 9. Navigation (Navigasyon) {#9-navigation}

### Navbar (Menü Çubuğu)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        
        <!-- Mobil toggle butonu -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Ana Sayfa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Hakkımızda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Hizmetler</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                        Daha Fazla
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Aksiyon</a></li>
                        <li><a class="dropdown-item" href="#">Başka aksiyon</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Ayrılmış link</a></li>
                    </ul>
                </li>
            </ul>
            
            <!-- Sağa hizalı menü -->
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Giriş</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Koyu navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">...</nav>

<!-- Renkli navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">...</nav>

<!-- Sabit üstte navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">...</nav>

<!-- Sabit altta navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">...</nav>

<!-- Yapışkan navbar (scroll'da sabit) -->
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">...</nav>
```

### Nav Tabs ve Pills

```html
<!-- Tabs -->
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" href="#">Aktif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled">Devre Dışı</a>
    </li>
</ul>

<!-- Pills -->
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link active" href="#">Aktif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>

<!-- Dikey pills -->
<ul class="nav nav-pills flex-column">
    <li class="nav-item">
        <a class="nav-link active" href="#">Aktif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>

<!-- Tab içeriği ile birlikte -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home">Ana Sayfa</button>
    </li>
    <li class="nav-item">
        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile">Profil</button>
    </li>
</ul>

<div class="tab-content">
    <div class="tab-pane fade show active" id="home">Ana sayfa içeriği</div>
    <div class="tab-pane fade" id="profile">Profil içeriği</div>
</div>
```

---

## 10. Utilities (Yardımcı Sınıflar) {#10-utilities}

### Spacing (Boşluk)

Bootstrap'te margin ve padding için kısaltmalar:
- `m` = margin
- `p` = padding
- `t` = top (üst)
- `b` = bottom (alt)
- `s` = start (sol, LTR'de)
- `e` = end (sağ, LTR'de)
- `x` = yatay (sol ve sağ)
- `y` = dikey (üst ve alt)

Boyutlar: 0, 1, 2, 3, 4, 5, auto

```html
<!-- Margin örnekleri -->
<div class="m-0">Margin yok</div>
<div class="m-3">Tüm yönlerde margin</div>
<div class="mt-3">Üstte margin</div>
<div class="mb-3">Altta margin</div>
<div class="ms-3">Solda margin</div>
<div class="me-3">Sağda margin</div>
<div class="mx-3">Yatayda margin</div>
<div class="my-3">Dikeyde margin</div>
<div class="mx-auto">Yatayda ortala</div>

<!-- Padding örnekleri -->
<div class="p-3">Tüm yönlerde padding</div>
<div class="pt-3">Üstte padding</div>
<div class="px-3">Yatayda padding</div>
<div class="py-3">Dikeyde padding</div>

<!-- Responsive spacing -->
<div class="m-3 m-md-5">Mobilde 3, tablette 5 margin</div>
```

### Display

```html
<div class="d-none">Gizli</div>
<div class="d-block">Block</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline-block</div>
<div class="d-flex">Flex</div>
<div class="d-grid">Grid</div>

<!-- Responsive display -->
<div class="d-none d-md-block">Mobilde gizli, tablette görünür</div>
```

### Flexbox Utilities

```html
<!-- Flex container -->
<div class="d-flex">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
</div>

<!-- Yön -->
<div class="d-flex flex-row">Yatay</div>
<div class="d-flex flex-column">Dikey</div>
<div class="d-flex flex-row-reverse">Ters yatay</div>

<!-- Justify content (yatay hizalama) -->
<div class="d-flex justify-content-start">Başta</div>
<div class="d-flex justify-content-center">Ortada</div>
<div class="d-flex justify-content-end">Sonda</div>
<div class="d-flex justify-content-between">Aralarında boşluk</div>
<div class="d-flex justify-content-around">Eşit boşluklar</div>

<!-- Align items (dikey hizalama) -->
<div class="d-flex align-items-start">Üstte</div>
<div class="d-flex align-items-center">Ortada</div>
<div class="d-flex align-items-end">Altta</div>

<!-- Flex wrap -->
<div class="d-flex flex-wrap">Sarmalama var</div>
<div class="d-flex flex-nowrap">Sarmalama yok</div>

<!-- Flex grow ve shrink -->
<div class="flex-grow-1">Büyür</div>
<div class="flex-shrink-1">Küçülür</div>
```

### Boyutlar (Width & Height)

```html
<!-- Width -->
<div class="w-25">%25 genişlik</div>
<div class="w-50">%50 genişlik</div>
<div class="w-75">%75 genişlik</div>
<div class="w-100">%100 genişlik</div>
<div class="w-auto">Otomatik genişlik</div>

<!-- Height -->
<div class="h-25">%25 yükseklik</div>
<div class="h-50">%50 yükseklik</div>
<div class="h-100">%100 yükseklik</div>

<!-- Max width/height -->
<div class="mw-100">Max %100 genişlik</div>
<div class="mh-100">Max %100 yükseklik</div>

<!-- Viewport boyutları -->
<div class="vw-100">%100 viewport genişlik</div>
<div class="vh-100">%100 viewport yükseklik</div>
```

### Borders (Kenarlıklar)

```html
<!-- Kenarlık ekleme -->
<div class="border">Tüm kenarlıklar</div>
<div class="border-top">Üst kenarlık</div>
<div class="border-end">Sağ kenarlık</div>
<div class="border-bottom">Alt kenarlık</div>
<div class="border-start">Sol kenarlık</div>

<!-- Kenarlık kaldırma -->
<div class="border border-0">Kenarlık yok</div>
<div class="border border-top-0">Üst kenarlık yok</div>

<!-- Kenarlık rengi -->
<div class="border border-primary">Primary kenarlık</div>
<div class="border border-danger">Danger kenarlık</div>

<!-- Kenarlık yuvarlaklığı -->
<div class="rounded">Yuvarlak köşeler</div>
<div class="rounded-0">Köşe yok</div>
<div class="rounded-1">Küçük yuvarlaklık</div>
<div class="rounded-3">Büyük yuvarlaklık</div>
<div class="rounded-circle">Daire</div>
<div class="rounded-pill">Pill şekil</div>

<!-- Belirli köşeler -->
<div class="rounded-top">Üst köşeler</div>
<div class="rounded-end">Sağ köşeler</div>
```

### Shadows (Gölgeler)

```html
<div class="shadow-none">Gölge yok</div>
<div class="shadow-sm">Küçük gölge</div>
<div class="shadow">Normal gölge</div>
<div class="shadow-lg">Büyük gölge</div>
```

### Position

```html
<div class="position-static">Static</div>
<div class="position-relative">Relative</div>
<div class="position-absolute">Absolute</div>
<div class="position-fixed">Fixed</div>
<div class="position-sticky">Sticky</div>

<!-- Position yardımcıları -->
<div class="position-absolute top-0 start-0">Sol üst köşe</div>
<div class="position-absolute top-0 end-0">Sağ üst köşe</div>
<div class="position-absolute bottom-0 start-0">Sol alt köşe</div>
<div class="position-absolute bottom-0 end-0">Sağ alt köşe</div>

<!-- Ortala -->
<div class="position-absolute top-50 start-50 translate-middle">Tam orta</div>
```

### Overflow

```html
<div class="overflow-auto">Otomatik overflow</div>
<div class="overflow-hidden">Gizli overflow</div>
<div class="overflow-visible">Görünür overflow</div>
<div class="overflow-scroll">Scroll overflow</div>
```

### Visibility

```html
<div class="visible">Görünür</div>
<div class="invisible">Görünmez (yer kaplar)</div>
```

### Z-index

```html
<div class="z-n1">Z-index -1</div>
<div class="z-0">Z-index 0</div>
<div class="z-1">Z-index 1</div>
<div class="z-2">Z-index 2</div>
<div class="z-3">Z-index 3</div>
```

---

## 11. Responsive Tasarım {#11-responsive}

### Responsive Breakpoint Stratejisi

Bootstrap'te "mobile-first" yaklaşım kullanılır. Yani önce mobil için tasarlarız, sonra büyük ekranlar için düzenleriz.

```html
<!-- Mobilde 12, tablette 6, masaüstünde 4 sütun -->
<div class="row">
    <div class="col-12 col-md-6 col-lg-4">1. Kutu</div>
    <div class="col-12 col-md-6 col-lg-4">2. Kutu</div>
    <div class="col-12 col-md-6 col-lg-4">3. Kutu</div>
</div>
```

### Responsive Utilities

```html
<!-- Responsive display -->
<div class="d-none d-sm-block">Small ve üstünde görünür</div>
<div class="d-block d-md-none">Medium'dan küçüklerde görünür</div>

<!-- Responsive text alignment -->
<p class="text-start text-md-center text-lg-end">
    Mobilde sola, tablette ortaya, masaüstünde sağa hizalı
</p>

<!-- Responsive spacing -->
<div class="mt-2 mt-md-4 mt-lg-5">Responsive margin-top</div>

<!-- Responsive flex -->
<div class="d-flex flex-column flex-md-row">
    Mobilde dikey, tablette yatay
</div>
```

### Responsive Images

```html
<!-- Responsive resim -->
<img src="image.jpg" class="img-fluid" alt="...">

<!-- Thumbnail (küçük resim) -->
<img src="image.jpg" class="img-thumbnail" alt="...">

<!-- Yuvarlak resim -->
<img src="image.jpg" class="rounded-circle" alt="...">
```

### Container Queries (Yeni)

```html
<!-- Belirli breakpoint'te container -->
<div class="container-sm">Small'dan itibaren container</div>
<div class="container-md">Medium'dan itibaren container</div>
<div class="container-lg">Large'dan itibaren container</div>
```

---

## 12. Proje Örnekleri {#12-projeler}

### Proje 1: Basit Landing Page

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">MyBrand</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#features">Özellikler</a></li>
                    <li class="nav-item"><a class="nav-link" href="#pricing">Fiyatlar</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">İletişim</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-light py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold">İşinizi Büyütün</h1>
                    <p class="lead">En iyi çözümlerle işletmenizi bir üst seviyeye taşıyın.</p>
                    <button class="btn btn-primary btn-lg">Hemen Başlayın</button>
                </div>
                <div class="col-lg-6">
                    <img src="https://via.placeholder.com/500" class="img-fluid rounded" alt="Hero">
                </div>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section id="features" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Özelliklerimiz</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h3>⚡ Hızlı</h3>
                            <p>Yıldırım hızında performans</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h3>🔒 Güvenli</h3>
                            <p>Verileriniz bizimle güvende</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h3>📱 Responsive</h3>
                            <p>Her cihazda mükemmel görünüm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
        <div class="container text-center">
            <p class="mb-0">&copy; 2024 MyBrand. Tüm hakları saklıdır.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Proje 2: Dashboard Layout

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .sidebar {
            min-height: 100vh;
            background-color: #212529;
        }
        .sidebar .nav-link {
            color: rgba(255,255,255,.75);
        }
        .sidebar .nav-link.active {
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <nav class="col-md-3 col-lg-2 d-md-block sidebar collapse" id="sidebarMenu">
                <div class="position-sticky pt-3">
                    <h5 class="text-white px-3">Dashboard</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">📊 Ana Sayfa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">📦 Ürünler</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">👥 Kullanıcılar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">⚙️ Ayarlar</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Main content -->
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Dashboard</h1>
                </div>

                <!-- Stats Cards -->
                <div class="row g-3 mb-4">
                    <div class="col-md-3">
                        <div class="card bg-primary text-white">
                            <div class="card-body">
                                <h6>Toplam Satış</h6>
                                <h3>$12,345</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card bg-success text-white">
                            <div class="card-body">
                                <h6>Yeni Müşteriler</h6>
                                <h3>234</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card bg-warning text-white">
                            <div class="card-body">
                                <h6>Bekleyen</h6>
                                <h3>45</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card bg-danger text-white">
                            <div class="card-body">
                                <h6>İptal</h6>
                                <h3>12</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Table -->
                <div class="card">
                    <div class="card-header">
                        <h5>Son Siparişler</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Müşteri</th>
                                    <th>Ürün</th>
                                    <th>Durum</th>
                                    <th>Tutar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#001</td>
                                    <td>Ahmet Yılmaz</td>
                                    <td>Laptop</td>
                                    <td><span class="badge bg-success">Tamamlandı</span></td>
                                    <td>$899</td>
                                </tr>
                                <tr>
                                    <td>#002</td>
                                    <td>Ayşe Demir</td>
                                    <td>Telefon</td>
                                    <td><span class="badge bg-warning">Bekliyor</span></td>
                                    <td>$599</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Proje 3: E-Ticaret Ürün Kartları

```html
<div class="container my-5">
    <h2 class="mb-4">Öne Çıkan Ürünler</h2>
    <div class="row g-4">
        <div class="col-md-6 col-lg-3">
            <div class="card h-100">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Ürün">
                <div class="card-body d-flex flex-column">
                    <span class="badge bg-success mb-2 align-self-start">İndirimde</span>
                    <h5 class="card-title">Ürün Adı</h5>
                    <p class="card-text">Ürün açıklaması buraya gelir.</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="text-muted text-decoration-line-through">$99</span>
                            <span class="h5 mb-0 text-danger">$79</span>
                        </div>
                        <button class="btn btn-primary w-100">Sepete Ekle</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Diğer ürünler için tekrarla -->
    </div>
</div>
```

---

## Pratik İpuçları ve Best Practices

### 1. Class Sıralaması
Class'ları mantıklı bir sırada yazın:
```html
<div class="container mt-5 p-3 bg-light rounded shadow">
```
Sıralama: Layout → Spacing → Görünüm → Efektler

### 2. Gereksiz Class'lardan Kaçının
```html
<!-- Kötü -->
<div class="col-12 col-sm-12 col-md-6">

<!-- İyi -->
<div class="col-12 col-md-6">
```

### 3. Custom CSS ile Bootstrap'i Geçersiz Kılma
```css
/* Custom CSS dosyanızda */
.btn-primary {
    background-color: #your-color;
    border-color: #your-color;
}
```

### 4. Accessibility (Erişilebilirlik)
```html
<!-- Butonlar için aria etiketleri -->
<button type="button" class="btn-close" aria-label="Kapat"></button>

<!-- Form elemanları için label -->
<label for="email">E-posta</label>
<input type="email" id="email" class="form-control">
```

### 5. JavaScript Componentlerini Başlatma
Bazı componentler için JavaScript başlatma gerekir:
```javascript
// Tooltip'leri başlat
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Popover'ları başlat
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
```

---

## Sık Yapılan Hatalar

1. **Viewport meta etiketi eksik** → Responsive çalışmaz
2. **JS bundle dahil edilmemiş** → Dropdown, modal vb. çalışmaz
3. **Grid yapısı bozuk** → `.row` içinde `.col` olmalı
4. **Sütun toplamı 12'yi geçiyor** → Layout bozulur
5. **CDN linkleri eski versiyon** → Yeni özellikler çalışmaz

---

## Sonraki Adımlar

Bu rehberi tamamladıktan sonra:

1. **Kendi projelerinizi yapın** → Öğrendiklerinizi uygulayın
2. **Bootstrap dokümantasyonunu inceleyin** → https://getbootstrap.com
3. **Bootstrap Icons kullanın** → https://icons.getbootstrap.com
4. **Sass ile özelleştirme öğrenin** → Renkleri ve değişkenleri özelleştirin
5. **jQuery öğrenin** → Bootstrap 5'te gerekli değil ama yine de faydalı

---

## Faydalı Kaynaklar

- **Resmi Dokümantasyon:** https://getbootstrap.com/docs
- **Bootstrap Icons:** https://icons.getbootstrap.com
- **Bootstrap Themes:** https://themes.getbootstrap.com
- **Örnekler:** https://getbootstrap.com/docs/5.3/examples/

---

## Özet Cheat Sheet

**Grid:**
```
.container, .container-fluid
.row
.col, .col-6, .col-md-4
```

**Spacing:**
```
m-3, p-3, mt-3, mb-3, mx-auto
```

**Display:**
```
d-none, d-block, d-flex, d-md-none
```

**Renk:**
```
text-primary, bg-success, btn-danger
```

**Butonlar:**
```
btn btn-primary, btn-lg, btn-outline-info
```

**Formlar:**
```
form-control, form-label, form-select
```

Başarılar! Bootstrap ile harika projeler yapacaksınız! 🚀