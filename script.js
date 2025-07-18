function calculateBlendPrice() {
    const arabicaPercentage = parseFloat(document.getElementById('arabica-percentage').value);
    if (isNaN(arabicaPercentage) || arabicaPercentage < 0 || arabicaPercentage > 100) {
        alert('لطفاً درصد معتبر (۰ تا ۱۰۰) وارد کنید.');
        return;
    }

    const robustaPercentage = 100 - arabicaPercentage;

    // قیمت‌های پایه
    const arabicaNormal = 950; // زیر 10 کیلو
    const arabicaBulk = 900;   // بالای 10 کیلو
    const robustaNormal = 900; // زیر 10 کیلو
    const robustaBulk = 850;   // بالای 10 کیلو

    // محاسبه قیمت ترکیبی
    const normalPrice = (arabicaPercentage / 100) * arabicaNormal + (robustaPercentage / 100) * robustaNormal;
    const bulkPrice = (arabicaPercentage / 100) * arabicaBulk + (robustaPercentage / 100) * robustaBulk;

    // نمایش قیمت‌ها
    document.getElementById('normal-price').textContent = Math.round(normalPrice);
    document.getElementById('bulk-price').textContent = Math.round(bulkPrice);
}