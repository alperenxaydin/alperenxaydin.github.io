# jQuery Başlangıç Rehberi - Sıfırdan İleri Seviye

## İçindekiler
1. [jQuery Nedir ve Neden Kullanılır?](#1-jquery-nedir)
2. [Kurulum ve İlk Adımlar](#2-kurulum)
3. [Temel Kavramlar](#3-temel-kavramlar)
4. [Element Seçiciler (Selectors)](#4-selectors)
5. [DOM Manipülasyonu](#5-dom)
6. [Olaylar (Events)](#6-events)
7. [Efektler ve Animasyonlar](#7-effects)
8. [CSS İşlemleri](#8-css)
9. [AJAX İşlemleri](#9-ajax)
10. [Pratik Örnekler](#10-ornekler)
11. [Mini Projeler](#11-projeler)

---

## 1. jQuery Nedir ve Neden Kullanılır? {#1-jquery-nedir}

jQuery, JavaScript'i daha kolay ve hızlı yazmak için geliştirilmiş bir kütüphanedir. 

**"Write less, do more"** (Az yaz, çok yap) sloganıyla bilinir.

### Normal JavaScript vs jQuery

```javascript
// Normal JavaScript (uzun)
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myDiv").style.display = "none";
});

// jQuery ile (kısa ve kolay)
$("#myButton").click(function() {
    $("#myDiv").hide();
});
```

### Ne İşe Yarar?

- ✅ HTML elementlerini kolayca seçme ve değiştirme
- ✅ Animasyonlar ve efektler
- ✅ Olaylara (click, hover vb.) kolayca müdahale
- ✅ AJAX ile veri alma/gönderme
- ✅ Cross-browser (tüm tarayıcılarda) uyumluluk

---

## 2. Kurulum ve İlk Adımlar {#2-kurulum}

### CDN ile Kurulum (Önerilen)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Projesi</title>
</head>
<body>
    
    <h1 id="baslik">Merhaba jQuery!</h1>
    <button id="btn">Tıkla</button>
    
    <!-- jQuery CDN - Body'nin sonunda olmalı -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    
    <!-- Kendi kodumuz -->
    <script>
        // jQuery kodu buraya
        $("#btn").click(function() {
            alert("Butona tıklandı!");
        });
    </script>
</body>
</html>
```

### Document Ready

jQuery kodları sayfanın yüklenmesini beklemeli:

```javascript
// Yöntem 1 (tam)
$(document).ready(function() {
    // jQuery kodlarınız
    console.log("Sayfa hazır!");
});

// Yöntem 2 (kısa)
$(function() {
    // jQuery kodlarınız
    console.log("Sayfa hazır!");
});
```

**ÖNEMLİ:** jQuery kodlarını her zaman `$(document).ready()` içine yazın!

---

## 3. Temel Kavramlar {#3-temel-kavramlar}

### $ İşareti

`$` işareti jQuery'nin kısaltmasıdır. `jQuery()` ile aynıdır.

```javascript
$("p")       // jQuery ile
jQuery("p")  // Aynı şey
```

### jQuery Zinciri (Chaining)

jQuery'de işlemleri zincirleme yapabilirsiniz:

```javascript
$("#myDiv")
    .css("color", "red")
    .slideUp(2000)
    .slideDown(2000);
```

### jQuery Nesnesi

jQuery bir element seçtiğinde, onu jQuery nesnesine çevirir:

```javascript
var $div = $("#myDiv");  // jQuery nesnesi
// Genelde jQuery değişkenlerinin önüne $ koyarız (zorunlu değil)
```

---

## 4. Element Seçiciler (Selectors) {#4-selectors}

CSS seçiciler gibi çalışır!

### Temel Seçiciler

```javascript
// ID ile seçim
$("#myId")          // <div id="myId">

// Class ile seçim
$(".myClass")       // <div class="myClass">

// Element ile seçim
$("p")              // Tüm <p> etiketleri
$("div")            // Tüm <div> etiketleri

// Hepsini seçme
$("*")              // Sayfadaki tüm elementler

// Birden fazla seçici
$("h1, h2, h3")     // Tüm h1, h2, h3'ler
```

### Hiyerarşik Seçiciler

```javascript
// Çocuk seçici
$("div > p")        // div'in direkt çocuğu olan p'ler

// Torun seçici
$("div p")          // div içindeki tüm p'ler (derinliğine)

// Kardeş seçici
$("h1 + p")         // h1'den hemen sonraki p
$("h1 ~ p")         // h1'den sonraki tüm kardeş p'ler
```

### Filtreler

```javascript
// İlk ve son
$("p:first")        // İlk p
$("p:last")         // Son p

// Index ile
$("li:eq(2)")       // 3. li (index 0'dan başlar)
$("li:gt(2)")       // Index 2'den büyük li'ler
$("li:lt(2)")       // Index 2'den küçük li'ler

// Tek ve çift
$("tr:even")        // Çift sıradaki satırlar
$("tr:odd")         // Tek sıradaki satırlar

// Attribute ile
$("a[href]")        // href'i olan a'lar
$("a[target='_blank']")  // target="_blank" olan a'lar
$("input[type='text']")  // type="text" olan input'lar
```

### Form Seçicileri

```javascript
$(":input")         // Tüm input, select, textarea, button
$(":text")          // type="text" olan input'lar
$(":password")      // type="password"
$(":radio")         // Radio button'lar
$(":checkbox")      // Checkbox'lar
$(":submit")        // Submit button'lar
$(":checked")       // Seçili checkbox/radio'lar
$(":selected")      // Seçili option'lar
$(":disabled")      // Disabled elementler
$(":enabled")       // Enabled elementler
```

### Özel Filtreler

```javascript
$("div:contains('Merhaba')")  // İçinde "Merhaba" geçen div'ler
$("div:empty")                // Boş div'ler
$("div:has(p)")               // İçinde p olan div'ler
$("div:not(.myClass)")        // myClass'ı olmayan div'ler
$("div:visible")              // Görünür div'ler
$("div:hidden")               // Gizli div'ler
```

---

## 5. DOM Manipülasyonu {#5-dom}

### İçerik Alma ve Değiştirme

```javascript
// Metin içeriği
var text = $("p").text();           // p'nin metnini al
$("p").text("Yeni metin");          // p'nin metnini değiştir

// HTML içeriği
var html = $("div").html();         // div'in HTML'ini al
$("div").html("<b>Kalın</b> metin"); // div'in HTML'ini değiştir

// Input değeri
var value = $("#isim").val();       // Input'un değerini al
$("#isim").val("Ahmet");            // Input'a değer yaz
```

### Attribute İşlemleri

```javascript
// Attribute alma
var href = $("a").attr("href");     // a'nın href'ini al

// Attribute değiştirme
$("a").attr("href", "https://google.com");  // href değiştir

// Birden fazla attribute
$("img").attr({
    "src": "resim.jpg",
    "alt": "Açıklama",
    "width": "300"
});

// Attribute kaldırma
$("a").removeAttr("target");
```

### Class İşlemleri

```javascript
// Class ekleme
$("div").addClass("active");
$("div").addClass("active featured");  // Birden fazla

// Class kaldırma
$("div").removeClass("active");

// Class var mı kontrol
if ($("div").hasClass("active")) {
    console.log("Active class var!");
}

// Class toggle (varsa kaldır, yoksa ekle)
$("div").toggleClass("active");
```

### Element Ekleme

```javascript
// Sonuna ekle (içine, en sona)
$("div").append("<p>Yeni paragraf</p>");

// Başına ekle (içine, en başa)
$("div").prepend("<p>Başa eklenen</p>");

// Sonrasına ekle (dışına, sonra)
$("div").after("<p>Div'den sonra</p>");

// Öncesine ekle (dışına, önce)
$("div").before("<p>Div'den önce</p>");
```

### Element Kaldırma

```javascript
// Elementi kaldır
$("p").remove();                    // Tüm p'leri sil

// İçeriği temizle
$("div").empty();                   // div'in içini boşalt

// Elementi başka yere taşı
$("p").appendTo("#container");      // p'yi container'a taşı
```

### Element Oluşturma

```javascript
// Yeni element oluştur
var yeniDiv = $("<div></div>");
var yeniP = $("<p>Merhaba</p>");

// Özellik ekleyerek oluştur
var yeniLink = $("<a>", {
    text: "Google'a git",
    href: "https://google.com",
    target: "_blank",
    class: "link"
});

// Sayfaya ekle
$("body").append(yeniLink);
```

---

## 6. Olaylar (Events) {#6-events}

### Click Olayı

```javascript
// Temel click
$("button").click(function() {
    alert("Butona tıklandı!");
});

// this kullanımı
$(".btn").click(function() {
    $(this).hide();  // Tıklanan butonu gizle
});
```

### Double Click

```javascript
$("div").dblclick(function() {
    $(this).css("background", "yellow");
});
```

### Mouse Olayları

```javascript
// Mouse üzerine gelince
$("div").mouseenter(function() {
    $(this).css("background", "lightblue");
});

// Mouse çıkınca
$("div").mouseleave(function() {
    $(this).css("background", "white");
});

// Hover (mouseenter + mouseleave)
$("div").hover(
    function() {
        // Mouse gelince
        $(this).addClass("highlight");
    },
    function() {
        // Mouse çıkınca
        $(this).removeClass("highlight");
    }
);
```

### Form Olayları

```javascript
// Input'a yazı yazıldığında
$("input").keyup(function() {
    var value = $(this).val();
    console.log("Yazılan: " + value);
});

// Input değiştiğinde
$("input").change(function() {
    console.log("Değer değişti!");
});

// Form gönderildiğinde
$("form").submit(function(e) {
    e.preventDefault();  // Sayfanın yenilenmesini engelle
    alert("Form gönderildi!");
});

// Input'a focus olunca
$("input").focus(function() {
    $(this).css("background", "lightyellow");
});

// Input'tan çıkınca
$("input").blur(function() {
    $(this).css("background", "white");
});
```

### Klavye Olayları

```javascript
// Tuşa basıldığında
$("input").keydown(function(e) {
    console.log("Basılan tuş kodu: " + e.keyCode);
    
    // Enter tuşu
    if (e.keyCode === 13) {
        alert("Enter'a basıldı!");
    }
});

// Tuş bırakıldığında
$("input").keyup(function() {
    // Gerçek zamanlı arama için kullanılır
});
```

### On Metodu (Evrensel)

```javascript
// Tüm olaylar için kullanılabilir
$("button").on("click", function() {
    alert("Tıklandı!");
});

// Birden fazla olay
$("div").on("mouseenter mouseleave", function() {
    $(this).toggleClass("active");
});

// Dinamik elementler için (delegation)
$("body").on("click", ".dinamik-buton", function() {
    // Sonradan eklenen butonlar için de çalışır
    alert("Dinamik butona tıklandı!");
});
```

### Olayı Kaldırma

```javascript
// Tüm olayları kaldır
$("button").off("click");

// Belirli olayı kaldır
$("button").off("click", myFunction);
```

---

## 7. Efektler ve Animasyonlar {#7-effects}

### Göster/Gizle

```javascript
// Gizle
$("div").hide();           // Anında gizle
$("div").hide(1000);       // 1 saniyede gizle

// Göster
$("div").show();           // Anında göster
$("div").show(2000);       // 2 saniyede göster

// Toggle (göster/gizle)
$("div").toggle();
$("div").toggle(1000);

// Hız parametreleri
$("div").hide("slow");     // Yavaş (600ms)
$("div").hide("fast");     // Hızlı (200ms)
$("div").hide(1500);       // Özel (1500ms)
```

### Fade (Soldurma)

```javascript
// Fade out (soldurarak gizle)
$("div").fadeOut(1000);

// Fade in (soldurarak göster)
$("div").fadeIn(1000);

// Fade toggle
$("div").fadeToggle(1000);

// Fade to (belirli opacity'e)
$("div").fadeTo(1000, 0.5);  // %50 opacity
```

### Slide (Kaydırma)

```javascript
// Slide up (yukarı kaydırarak gizle)
$("div").slideUp(1000);

// Slide down (aşağı kaydırarak göster)
$("div").slideDown(1000);

// Slide toggle
$("div").slideToggle(1000);
```

### Callback Fonksiyonu

Animasyon bitince çalışacak kod:

```javascript
$("div").hide(1000, function() {
    alert("Gizleme işlemi bitti!");
});

// Örnek: Sıralı animasyonlar
$("#div1").fadeOut(1000, function() {
    $("#div2").fadeOut(1000, function() {
        $("#div3").fadeOut(1000);
    });
});
```

### Özel Animasyonlar

```javascript
// Animate
$("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
}, 1000);

// Göreceli değerler
$("div").animate({
    left: '+=50px',    // 50px sağa
    fontSize: '20px'
}, 1000);

// Sıralı animasyonlar
$("div")
    .animate({left: '250px'}, 1000)
    .animate({top: '100px'}, 1000)
    .animate({opacity: '0.5'}, 1000);
```

### Animasyon Kontrolü

```javascript
// Animasyonu durdur
$("div").stop();

// Kuyruğu temizle
$("div").stop(true);

// Hemen son haline getir
$("div").stop(true, true);

// Gecikme
$("div").delay(2000).fadeIn();
```

---

## 8. CSS İşlemleri {#8-css}

### CSS Okuma ve Yazma

```javascript
// Tek CSS özelliği
$("div").css("color");                  // Rengi oku
$("div").css("color", "red");           // Rengi değiştir

// Birden fazla CSS
$("div").css({
    "color": "white",
    "background-color": "black",
    "font-size": "20px",
    "padding": "10px"
});
```

### Boyut İşlemleri

```javascript
// Width ve Height
$("div").width();               // Genişliği al
$("div").width(300);            // Genişliği ayarla
$("div").height(200);           // Yüksekliği ayarla

// Inner (padding dahil)
$("div").innerWidth();
$("div").innerHeight();

// Outer (border dahil)
$("div").outerWidth();
$("div").outerHeight();

// Outer (margin dahil)
$("div").outerWidth(true);
$("div").outerHeight(true);
```

### Pozisyon İşlemleri

```javascript
// Element pozisyonu (sayfaya göre)
var pos = $("div").offset();
console.log(pos.top);    // Üstten uzaklık
console.log(pos.left);   // Soldan uzaklık

// Parent'a göre pozisyon
var relPos = $("div").position();

// Scroll pozisyonu
$(window).scrollTop();        // Dikey scroll
$(window).scrollTop(500);     // 500px'e scroll et
$(window).scrollLeft();       // Yatay scroll
```

---

## 9. AJAX İşlemleri {#9-ajax}

AJAX, sayfa yenilenmeden sunucuyla iletişim kurmayı sağlar.

### Basit GET İsteği

```javascript
$.get("data.php", function(data) {
    console.log("Gelen veri: " + data);
    $("#sonuc").html(data);
});
```

### GET ile Parametre Gönderme

```javascript
$.get("search.php", { 
    q: "jquery",
    page: 1 
}, function(data) {
    $("#results").html(data);
});
```

### POST İsteği

```javascript
$.post("save.php", {
    name: "Ahmet",
    age: 25
}, function(response) {
    alert("Kayıt başarılı: " + response);
});
```

### JSON Verisi Alma

```javascript
$.getJSON("users.json", function(data) {
    $.each(data, function(index, user) {
        console.log(user.name);
    });
});
```

### Gelişmiş AJAX

```javascript
$.ajax({
    url: "data.php",
    type: "POST",
    data: { id: 123 },
    dataType: "json",
    success: function(response) {
        console.log("Başarılı:", response);
    },
    error: function(xhr, status, error) {
        console.log("Hata:", error);
    },
    beforeSend: function() {
        $("#loading").show();
    },
    complete: function() {
        $("#loading").hide();
    }
});
```

### Load Metodu

HTML içeriği yükleme:

```javascript
// Basit yükleme
$("#div1").load("content.html");

// Belirli bir bölümü yükleme
$("#div1").load("page.html #content");

// Callback ile
$("#div1").load("content.html", function(response, status, xhr) {
    if (status == "success") {
        alert("Yüklendi!");
    } else {
        alert("Hata: " + xhr.statusText);
    }
});
```

---

## 10. Pratik Örnekler {#10-ornekler}

### Örnek 1: Göster/Gizle Toggle

```html
<button id="toggleBtn">Göster/Gizle</button>
<div id="box" style="display:none; background:lightblue; padding:20px;">
    Bu kutu gösterilip gizlenebilir!
</div>

<script>
$(function() {
    $("#toggleBtn").click(function() {
        $("#box").slideToggle();
    });
});
</script>
```

### Örnek 2: Accordion (Akordeon)

```html
<div class="accordion">
    <h3 class="accordion-header">Bölüm 1</h3>
    <div class="accordion-content">Bölüm 1 içeriği</div>
    
    <h3 class="accordion-header">Bölüm 2</h3>
    <div class="accordion-content">Bölüm 2 içeriği</div>
</div>

<script>
$(function() {
    // İçerikleri gizle
    $(".accordion-content").hide();
    
    // Başlığa tıklandığında
    $(".accordion-header").click(function() {
        // Tıklanan başlığın içeriğini göster/gizle
        $(this).next(".accordion-content").slideToggle();
        
        // Diğerlerini kapat
        $(this).siblings(".accordion-content").slideUp();
    });
});
</script>
```

### Örnek 3: Tab Menü

```html
<ul class="tabs">
    <li class="active" data-tab="tab1">Tab 1</li>
    <li data-tab="tab2">Tab 2</li>
    <li data-tab="tab3">Tab 3</li>
</ul>

<div class="tab-content">
    <div id="tab1" class="tab-pane active">İçerik 1</div>
    <div id="tab2" class="tab-pane">İçerik 2</div>
    <div id="tab3" class="tab-pane">İçerik 3</div>
</div>

<script>
$(function() {
    $(".tabs li").click(function() {
        // Aktif class'ı değiştir
        $(".tabs li").removeClass("active");
        $(this).addClass("active");
        
        // İçeriği göster
        var tabId = $(this).data("tab");
        $(".tab-pane").removeClass("active");
        $("#" + tabId).addClass("active");
    });
});
</script>

<style>
.tab-pane { display: none; }
.tab-pane.active { display: block; }
.tabs li { display: inline-block; padding: 10px; cursor: pointer; }
.tabs li.active { background: blue; color: white; }
</style>
```

### Örnek 4: Form Validasyonu

```html
<form id="myForm">
    <input type="text" id="name" placeholder="İsim">
    <span class="error"></span><br>
    
    <input type="email" id="email" placeholder="E-posta">
    <span class="error"></span><br>
    
    <button type="submit">Gönder</button>
</form>

<script>
$(function() {
    $("#myForm").submit(function(e) {
        e.preventDefault();
        
        // Hataları temizle
        $(".error").text("");
        
        var isValid = true;
        
        // İsim kontrolü
        if ($("#name").val() === "") {
            $("#name").next(".error").text("İsim gerekli!");
            isValid = false;
        }
        
        // E-posta kontrolü
        var email = $("#email").val();
        if (email === "") {
            $("#email").next(".error").text("E-posta gerekli!");
            isValid = false;
        } else if (!email.includes("@")) {
            $("#email").next(".error").text("Geçerli e-posta girin!");
            isValid = false;
        }
        
        if (isValid) {
            alert("Form geçerli!");
            // Form gönderimi yapılabilir
        }
    });
});
</script>

<style>
.error { color: red; font-size: 12px; }
</style>
```

### Örnek 5: Karakter Sayacı

```html
<textarea id="message" maxlength="200"></textarea>
<div id="counter">200 karakter kaldı</div>

<script>
$(function() {
    $("#message").keyup(function() {
        var maxLength = 200;
        var length = $(this).val().length;
        var remaining = maxLength - length;
        
        $("#counter").text(remaining + " karakter kaldı");
        
        if (remaining < 20) {
            $("#counter").css("color", "red");
        } else {
            $("#counter").css("color", "black");
        }
    });
});
</script>
```

### Örnek 6: Modal Popup

```html
<button id="openModal">Modal Aç</button>

<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Modal Başlık</h2>
        <p>Modal içeriği buraya gelir.</p>
    </div>
</div>

<script>
$(function() {
    // Modal aç
    $("#openModal").click(function() {
        $("#myModal").fadeIn();
    });
    
    // Modal kapat (X)
    $(".close").click(function() {
        $("#myModal").fadeOut();
    });
    
    // Dışarı tıklayınca kapat
    $("#myModal").click(function(e) {
        if ($(e.target).is("#myModal")) {
            $("#myModal").fadeOut();
        }
    });
});
</script>

<style>
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
.modal-content {
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 80%;
    max-width: 500px;
    border-radius: 5px;
}
.close {
    float: right;
    font-size: 28px;
    cursor: pointer;
}
</style>
```

### Örnek 7: Smooth Scroll

```html
<a href="#section1" class="scroll-link">Bölüm 1'e Git</a>
<a href="#section2" class="scroll-link">Bölüm 2'ye Git</a>

<div id="section1" style="height:800px; background:lightblue;">Bölüm 1</div>
<div id="section2" style="height:800px; background:lightgreen;">Bölüm 2</div>

<script>
$(function() {
    $(".scroll-link").click(function(e) {
        e.preventDefault();
        
        var target = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
</script>
```

### Örnek 8: Image Gallery

```html
<div class="gallery">
    <img src="thumb1.jpg" class="thumbnail" data-full="full1.jpg">
    <img src="thumb2.jpg" class="thumbnail" data-full="full2.jpg">
    <img src="thumb3.jpg" class="thumbnail" data-full="full3.jpg">
</div>

<div id="lightbox">
    <img id="lightbox-img" src="">
    <span id="lightbox-close">&times;</span>
</div>

<script>
$(function() {
    $(".thumbnail").click(function() {
        var fullImg = $(this).data("full");
        $("#lightbox-img").attr("src", fullImg);
        $("#lightbox").fadeIn();
    });
    
    $("#lightbox-close, #lightbox").click(function() {
        $("#lightbox").fadeOut();
    });
});
</script>

<style>
.thumbnail { width: 150px; margin: 10px; cursor: pointer; }
#lightbox {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
}
#lightbox-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90%;
}
#lightbox-close {
    position: absolute;
    top: 20px;
    right: 40px;
    color: white;
    font-size: 40px;
    cursor: pointer;
}
</style>
```

---

## 11. Mini Projeler {#11-projeler}

### Proje 1: Todo List (Yapılacaklar Listesi)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        body { font-family: Arial; max-width: 500px; margin: 50px auto; }
        #todoInput { width: 70%;